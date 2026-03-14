// ================================
// DESTINATION — text input + quick tags
// ================================

var destinationInput = document.getElementById("destination-input");
var destTags = document.querySelectorAll(".dest-tag");

// When user types in the box, update summary live
destinationInput.addEventListener("input", function() {
  updateSummary();
});

// When user clicks a quick-pick tag
destTags.forEach(function(tag) {
  tag.addEventListener("click", function() {

    // Remove selected from all tags
    destTags.forEach(function(t) { t.classList.remove("selected"); });

    // Mark this tag as selected
    tag.classList.add("selected");

    // Fill the text input with the tag's destination
    destinationInput.value = tag.getAttribute("data-dest");

    // Update summary
    updateSummary();
  });
});


// ================================
// STEP 1: PRICES FOR EACH OPTION
// Change these numbers to update pricing
// ================================

var tripTypePrice = {
  "Solo":    500,
  "Couple":  900,
  "Family":  1500,
  "Group":   2000,
  "Budget":  300
};

var daysPrice = {
  "1 Day":   1000,
  "2 Days":  1800,
  "3 Days":  2500,
  "4+ Days": 3500
};

var hotelPrice = {
  "Budget":   500,
  "Standard": 1200,
  "Premium":  2500
};

var transportPrice = {
  "No Transport":  0,
  "Cab":           600,
  "Pickup & Drop": 1000
};

var mealsPrice = {
  "No Meals":           0,
  "Breakfast Only":     300,
  "Breakfast + Dinner": 600
};

var sightseeingPrice = {
  "Standard":         400,
  "Full Sightseeing": 800,
  "Guided Tour":      1200
};


// ================================
// STEP 2: STORE WHAT USER SELECTED
// ================================

var selected = {
  tripType:    "",
  days:        "",
  hotel:       "",
  transport:   "",
  meals:       "",
  sightseeing: ""
};


// ================================
// STEP 3: HANDLE BUTTON CLICKS
// ================================

// Get all choice buttons on the page
var allButtons = document.querySelectorAll(".choice-btn");

// Add a click listener to each button
allButtons.forEach(function(btn) {

  btn.addEventListener("click", function() {

    // Read which group and value this button belongs to
    var group = btn.getAttribute("data-group");
    var value = btn.getAttribute("data-value");

    // Remove "selected" from all buttons in the same group
    document.querySelectorAll('[data-group="' + group + '"]').forEach(function(b) {
      b.classList.remove("selected");
    });

    // Add "selected" to the clicked button
    btn.classList.add("selected");

    // Save the choice
    selected[group] = value;

    // Update the right panel
    updateSummary();
    updatePrice();
  });

});


// ================================
// STEP 4: UPDATE SUMMARY TEXT
// ================================

function updateSummary() {
  // Read destination from the text input
  var dest = document.getElementById("destination-input").value.trim();

  document.getElementById("sum-destination").textContent = dest || "—";
  document.getElementById("sum-trip").textContent        = selected.tripType    || "—";
  document.getElementById("sum-days").textContent        = selected.days        || "—";
  document.getElementById("sum-hotel").textContent       = selected.hotel       || "—";
  document.getElementById("sum-transport").textContent   = selected.transport   || "—";
  document.getElementById("sum-meals").textContent       = selected.meals       || "—";
  document.getElementById("sum-sightseeing").textContent = selected.sightseeing || "—";
}


// ================================
// STEP 5: CALCULATE & SHOW PRICE
// ================================

function updatePrice() {

  // Get price for each selected option (0 if nothing chosen)
  var base       = (tripTypePrice[selected.tripType]        || 0) + (daysPrice[selected.days] || 0);
  var hotel      = hotelPrice[selected.hotel]               || 0;
  var transport  = transportPrice[selected.transport]       || 0;
  var meals      = mealsPrice[selected.meals]               || 0;
  var sightseeing = sightseeingPrice[selected.sightseeing]  || 0;

  // Add everything up
  var total = base + hotel + transport + meals + sightseeing;

  // Show each line in the breakdown
  document.getElementById("break-base").textContent      = "₹" + base;
  document.getElementById("break-hotel").textContent     = "₹" + hotel;
  document.getElementById("break-transport").textContent = "₹" + transport;
  document.getElementById("break-meals").textContent     = "₹" + meals;
  document.getElementById("break-sight").textContent     = "₹" + sightseeing;

  // Show the total
  document.getElementById("total-price").textContent = "₹" + total;
}


// ================================
// STEP 6: SAVE PLAN
// localStorage saves data in the browser
// ================================

document.getElementById("btn-save").addEventListener("click", function() {

  // Make sure user picked something
  if (!selected.tripType || !selected.days) {
    alert("Please select Trip Type and Days first!");
    return;
  }

  // Build an object with all selections
  var plan = {
    destination: document.getElementById("destination-input").value.trim(),
    tripType:    selected.tripType,
    days:        selected.days,
    hotel:       selected.hotel,
    transport:   selected.transport,
    meals:       selected.meals,
    sightseeing: selected.sightseeing
  };

  // Save to localStorage as a JSON string
  localStorage.setItem("myTourPlan", JSON.stringify(plan));

  alert("✅ Plan saved successfully!");
});


// ================================
// STEP 7: LOAD SAVED PLAN
// ================================

document.getElementById("btn-load").addEventListener("click", function() {

  // Read from localStorage
  var saved = localStorage.getItem("myTourPlan");

  // If nothing saved yet
  if (!saved) {
    alert("No saved plan found!");
    return;
  }

  // Convert JSON string back to object
  var plan = JSON.parse(saved);

  // Put saved values back into our selected object
  // Restore destination text input
  document.getElementById("destination-input").value = plan.destination || "";

  // Clear any selected dest tags, then re-select if it matches
  destTags.forEach(function(tag) {
    tag.classList.remove("selected");
    if (tag.getAttribute("data-dest") === plan.destination) {
      tag.classList.add("selected");
    }
  });

  selected.tripType    = plan.tripType    || "";
  selected.days        = plan.days        || "";
  selected.hotel       = plan.hotel       || "";
  selected.transport   = plan.transport   || "";
  selected.meals       = plan.meals       || "";
  selected.sightseeing = plan.sightseeing || "";

  // Visually mark the correct buttons as selected
  allButtons.forEach(function(btn) {
    var group = btn.getAttribute("data-group");
    var value = btn.getAttribute("data-value");

    btn.classList.remove("selected");

    if (selected[group] === value) {
      btn.classList.add("selected");
    }
  });

  // Refresh summary and price
  updateSummary();
  updatePrice();

  alert("📂 Saved plan loaded!");
});


// ================================
// STEP 8: RESET PLAN
// ================================

document.getElementById("btn-reset").addEventListener("click", function() {

  if (!confirm("Reset everything?")) return;

  // Clear destination input and tags
  document.getElementById("destination-input").value = "";
  destTags.forEach(function(tag) { tag.classList.remove("selected"); });

  // Remove selected class from all buttons
  allButtons.forEach(function(btn) {
    btn.classList.remove("selected");
  });

  // Clear selected values
  selected = { tripType: "", days: "", hotel: "", transport: "", meals: "", sightseeing: "" };

  // Reset summary and price
  updateSummary();
  updatePrice();
});


// ================================
// STEP 9: BOOK PLAN
// ================================

document.getElementById("btn-book").addEventListener("click", function() {

  if (!selected.tripType || !selected.days) {
    alert("Please select at least Trip Type and Days to book.");
    return;
  }

  var dest  = document.getElementById("destination-input").value.trim();
  var total = document.getElementById("total-price").textContent;

  alert(
    "🎉 Booking Confirmed!\n\n" +
    "Destination: " + (dest || "Not specified") + "\n" +
    "Trip: "        + selected.tripType   + "\n" +
    "Days: "        + selected.days       + "\n" +
    "Hotel: "       + (selected.hotel       || "Not selected") + "\n" +
    "Transport: "   + (selected.transport   || "Not selected") + "\n" +
    "Meals: "       + (selected.meals       || "Not selected") + "\n" +
    "Sightseeing: " + (selected.sightseeing || "Not selected") + "\n\n" +
    "Total: " + total + "\n\n" +
    "We will contact you shortly!"
  );
});


// ================================
// Run once when page loads
// ================================
updateSummary();
updatePrice();