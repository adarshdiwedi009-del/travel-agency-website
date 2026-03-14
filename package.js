/* ============================================================
   package.js - JavaScript for TravelNest Tour Packages Page

   What this file does:
   1. Filters package cards when a filter button is clicked
   2. Shows a Book Now confirmation alert
   3. Written simply for beginners
============================================================ */

// Wait for the full HTML page to load before running any code.
// This prevents errors caused by trying to access elements that do not exist yet.
document.addEventListener('DOMContentLoaded', function () {

  // -------------------------------------------------------
  // STEP 1: SELECT THE ELEMENTS WE NEED
  // -------------------------------------------------------

  // All filter buttons: All, Family, Couple, etc.
  var filterButtons = document.querySelectorAll('.filter-btn');

  // All package cards displayed on the page
  var packageCards = document.querySelectorAll('.package-card');

  // All Book Now buttons, one inside each card
  var bookButtons = document.querySelectorAll('.book-btn');

  // The no-results message paragraph shown when filter finds nothing
  var noResultsMsg = document.getElementById('noResultsMsg');


  // -------------------------------------------------------
  // STEP 2: FILTER BUTTONS LOGIC
  // When a filter button is clicked:
  //   - Mark it as active (highlighted)
  //   - Show only cards that match the selected type
  //   - Hide all other cards
  //   - Show a message if nothing matches
  // -------------------------------------------------------

  filterButtons.forEach(function (button) {

    button.addEventListener('click', function () {

      // Remove the active class from every button
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      // Add the active class to the button that was just clicked
      button.classList.add('active');

      // Read the filter value stored in the data-filter attribute
      // Example: <button data-filter=Family> gives us the string Family
      var selectedFilter = button.getAttribute('data-filter');

      // Count how many cards are visible after filtering
      var visibleCount = 0;

      // Loop through every card and decide to show or hide it
      packageCards.forEach(function (card) {

        // Read the type stored on this card in its data-type attribute
        // Example: <div class=package-card data-type=Family>
        var cardType = card.getAttribute('data-type');

        // Show the card if All is selected or if the type matches
        if (selectedFilter === 'all' || cardType === selectedFilter) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }

      });

      // Show the no-results message only when nothing is visible
      if (visibleCount === 0) {
        noResultsMsg.style.display = 'block';
      } else {
        noResultsMsg.style.display = 'none';
      }

    });

  });


  // -------------------------------------------------------
  // STEP 3: BOOK NOW BUTTON LOGIC
  // When a Book Now button is clicked, read the destination
  // name from the button and show a confirmation alert.
  // -------------------------------------------------------

  bookButtons.forEach(function (button) {

    button.addEventListener('click', function () {

      // Read the destination name from the data-destination attribute
      // Example: <button data-destination="Goa Beach Escape">
      var destination = button.getAttribute('data-destination');

      // Build a friendly confirmation message
     var message = `Booking Confirmed!

Package: ${destination}

Our travel expert will call you within 24 hours.
Thank you for choosing TravelNest!`;

alert(message);
    });

  });


});