/* ════════════════════════════════════════════════
   destination.js
   Travel Destination Webpage — External JavaScript
   Covers: data, card generation, modal tabs,
           scroll-spy nav, card animations
════════════════════════════════════════════════ */


/* ──────────────────────────────────────────────
   1.  DESTINATION DATA
   All destination info is stored here as arrays
   inside the `destinations` object.
────────────────────────────────────────────── */
const destinations = {

  /* ── RELIGIOUS ── */
  religious: [
    {
      name:     "Varanasi",
      country:  "Uttar Pradesh",
      img:      "vara.jpg",
      desc:     "One of the world's oldest cities, Varanasi sits on the sacred Ganges. Evening Ganga Aarti is a transcendent experience.",
      best:     "Oct – Mar",
      how:      "Direct trains from Delhi, Mumbai & Kolkata. Nearest airport: Lal Bahadur Shastri (VNS).",
      food:     "Kachori Sabzi, Chena Dahi Vada, Banarasi Lassi, Malaiyyo",
      todo:     ["Attend Ganga Aarti at Dashashwamedh Ghat at sunset", "Sunrise boat ride across all 88 ghats", "Visit Kashi Vishwanath Jyotirlinga Temple", "Explore narrow lanes of the old city (galis)", "Day trip to Sarnath — where Buddha gave his first sermon"],
      stay:     ["BrijRama Palace (Luxury — on the ghat)", "Hotel Ganges View (Mid-heritage)", "Stops Hostel Varanasi (Budget)"],
      culture:  "Varanasi is the spiritual capital of India. Death here is considered moksha (liberation). The city's silk weaving tradition is 2,000 years old and produces world-famous Banarasi saris.",
      mapSrc:   "https://maps.google.com/maps?q=Varanasi,India&t=&z=13&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Pilgrimage Lite",      days: "3N/4D", price: "₹8,000",  desc: "Ghats, Aarti & Sarnath tour" },
        { name: "Spiritual Immersion",  days: "5N/6D", price: "₹14,000", desc: "Ghats + Yoga + Kashi Vishwanath" },
        { name: "Heritage Luxury",      days: "4N/5D", price: "₹32,000", desc: "Heritage palace + private boat rides" }
      ]
    },
    {
      name:     "Golden Temple",
      country:  "Punjab · Amritsar",
      img:      "golden.jpg",
      desc:     "Harmandir Sahib shimmers in gold over the sacred Amrit Sarovar — Sikhism's most hallowed shrine.",
      best:     "Oct – Mar",
      how:      "Flight or train to Amritsar (ATQ). Well connected from Delhi (5 hrs by train).",
      food:     "Langar (free community meal), Amritsari Kulcha & Chole, Lassi, Pinni",
      todo:     ["Attend Amrit Vela morning prayers (4 AM)", "Walk the marble parikrama at midnight", "Watch Wagah Border Beating Retreat ceremony", "Visit Jallianwala Bagh memorial", "Eat Amritsari Kulcha in the lanes near the temple"],
      stay:     ["Taj Swarna (Luxury)", "Hotel Ritz Plaza (Mid-range)", "SGPC Pilgrim Accommodation (Budget)"],
      culture:  "The Langar (free kitchen) at the Golden Temple feeds 100,000+ people daily, regardless of religion — the world's largest free community kitchen. The temple was rebuilt in gold by Maharaja Ranjit Singh in the early 19th century.",
      mapSrc:   "https://maps.google.com/maps?q=Golden+Temple+Amritsar&t=&z=15&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Amritsar Day",     days: "1N/2D", price: "₹4,500",  desc: "Temple + Wagah Border ceremony" },
        { name: "Punjab Heritage",  days: "3N/4D", price: "₹11,000", desc: "Temple, food trail, Wagah, Attari" },
        { name: "Golden Luxury",    days: "4N/5D", price: "₹28,000", desc: "Luxury stay + private heritage guide" }
      ]
    },
    {
      name:     "Tirupati Balaji",
      country:  "Andhra Pradesh",
      img:      "balaji.jpg",
      desc:     "The richest and most-visited temple on Earth. Lord Venkateswara's abode at Tirumala draws 50,000+ devotees daily.",
      best:     "Sep – Feb",
      how:      "Flight to Tirupati (TIR). Good rail connectivity. APSRTC buses from Chennai & Bangalore.",
      food:     "Tirupati Laddu (iconic prasadam), Pesarattu, Pulihora, Chegodilu",
      todo:     ["Seek darshan at the main Tirumala temple", "Witness hair-tonsuring (tonsure) tradition", "Visit Sri Padmavathi Temple at Tiruchanur", "Explore Chandragiri Fort (11 km away)", "Take the cable car to Tirumala hills"],
      stay:     ["Marasa Sarovar Premiere (Luxury)", "Hotel Bliss (Mid-range)", "TTDC Pilgrim Cottages (Budget)"],
      culture:  "Devotees traditionally offer their hair as a symbol of surrendering ego. The Tirumala Tirupati Devasthanams (TTD) manages vast wealth, funding hospitals, schools, and cultural institutions across India.",
      mapSrc:   "https://maps.google.com/maps?q=Tirupati+Balaji+Temple&t=&z=14&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "One-Day Darshan",      days: "1N/2D", price: "₹5,500",  desc: "Quick VIP darshan package" },
        { name: "Tirupati Circuit",     days: "3N/4D", price: "₹13,000", desc: "Temple + nearby attractions" },
        { name: "Pilgrimage Premium",   days: "4N/5D", price: "₹24,000", desc: "Luxury lodge + VIP darshan slot" }
      ]
    },
    {
      name:     "Kedarnath",
      country:  "Uttarakhand",
      img:      "kedarnath.jpg",
      desc:     "A Jyotirlinga at 3,583 m altitude — one of Hinduism's holiest Shiva temples nestled in the Himalayas.",
      best:     "May – Jun & Sep – Oct",
      how:      "Drive to Gaurikund (nearest road head), then 16 km trek or helicopter from Phata/Guptkashi.",
      food:     "Simple dal-roti at trail dhabas, Aloo ke Gutke, Bal Mithai (Kumaoni sweet)",
      todo:     ["Trek the 16 km devotional pilgrimage path", "Attend the breathtaking evening aarti", "Explore the ancient stone temple (built 8th century)", "Watch sunrise over Kedar Dome snow peak", "Visit Vasuki Tal glacial lake (8 km from temple)"],
      stay:     ["GMVN Tourist Rest House (Kedarnath)", "Luxury tents at Gaurikund base camp", "Basic dharamshalas near the temple"],
      culture:  "The temple closes every winter under metres of snow and reopens on Akshaya Tritiya. The head priest (Rawal) belongs to the Veerashaiva Lingayat community of Karnataka.",
      mapSrc:   "https://maps.google.com/maps?q=Kedarnath+Temple+Uttarakhand&t=&z=13&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Kedarnath Trek",     days: "4N/5D", price: "₹15,000", desc: "Trek + temple stay + aarti" },
        { name: "Helicopter Darshan", days: "2N/3D", price: "₹22,000", desc: "Heli transfer + VIP darshan" },
        { name: "Char Dham Yatra",    days: "10N/11D", price: "₹48,000", desc: "All 4 Dhams by helicopter" }
      ]
    },
    {
      name:     "Ajmer Sharif",
      country:  "Rajasthan",
      img:      "ajmer.jpg",
      desc:     "The revered dargah of Sufi saint Hazrat Khwaja Moinuddin Chishti — one of South Asia's most sacred shrines.",
      best:     "Oct – Mar",
      how:      "Train to Ajmer from Delhi (5 hrs) or Mumbai (12 hrs). Well-connected by rail.",
      food:     "Sohan Halwa, Malpua, Ajmeri Biryani, Kachori",
      todo:     ["Offer chadar at the dargah in the inner sanctum", "Attend evening qawwali sessions", "Visit Brahma Temple at nearby Pushkar (11 km)", "Camel safari around Pushkar Lake", "Explore Ana Sagar Lake promenade"],
      stay:     ["Mansingh Palace Hotel (Luxury)", "Hotel Haveli Heritage (Mid)", "RTDC Tourist Bungalow (Budget)"],
      culture:  "The annual Urs festival draws millions of pilgrims of all faiths — a beautiful symbol of Sufi harmony. The dargah has been visited by Mughal emperors, British viceroys, and every Indian Prime Minister.",
      mapSrc:   "https://maps.google.com/maps?q=Ajmer+Sharif+Dargah&t=&z=15&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Ajmer–Pushkar",       days: "2N/3D", price: "₹7,500",  desc: "Dargah + Pushkar temple combo" },
        { name: "Rajasthan Spiritual",  days: "5N/6D", price: "₹18,000", desc: "Ajmer + Pushkar + Jaipur" },
        { name: "Heritage Premium",     days: "4N/5D", price: "₹26,000", desc: "Heritage hotels throughout" }
      ]
    },
    {
      name:     "Madurai Meenakshi",
      country:  "Tamil Nadu",
      img:      "meenakshi.jpg",
      desc:     "The Meenakshi Amman Temple's towering gopurams adorned with 33,000 sculptures are a Dravidian architectural masterpiece.",
      best:     "Oct – Mar",
      how:      "Flight to Madurai (IXM). Direct trains from Chennai, Bangalore & Coimbatore.",
      food:     "Jigarthanda (cooling drink), Kari Dosa, Idiyappam & Korma, Madurai Mutton Biryani",
      todo:     ["Witness the evening abhishekam (holy bath) ceremony", "Walk all 4 massive gopuram-lined corridors", "Visit Thirumalai Nayak Palace (1 km away)", "Explore Gandhi Memorial Museum", "Shop for Madurai Malli (jasmine) garlands"],
      stay:     ["Heritage Madurai (Luxury)", "Hotel Park Plaza (Mid-range)", "Hotel Supreme (Budget)"],
      culture:  "Madurai is one of India's oldest continuously inhabited cities. The annual Chittirai festival re-enacts the divine wedding of Meenakshi and Sundareswarar with grand processions.",
      mapSrc:   "https://maps.google.com/maps?q=Meenakshi+Temple+Madurai&t=&z=15&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Madurai Temple Day",  days: "2N/3D", price: "₹8,000",  desc: "Temple + Palace + city food tour" },
        { name: "Tamil Heritage",      days: "5N/6D", price: "₹20,000", desc: "Madurai + Rameswaram + Kanyakumari" },
        { name: "South Pilgrimage",    days: "8N/9D", price: "₹32,000", desc: "Full Tamil Nadu Char Dham circuit" }
      ]
    }
  ],

  /* ── DOMESTIC ── */
  domestic: [
    {
      name:     "Jaipur",
      country:  "Rajasthan",
      img:      "jaipur.jpg",
      desc:     "The Pink City dazzles with Amber Fort, Hawa Mahal, and the world's most colourful bazaars.",
      best:     "Oct – Feb",
      how:      "Flight (1.5 hrs from Delhi), train from Delhi (5 hrs) or Mumbai (18 hrs). On Golden Triangle route.",
      food:     "Dal Baati Churma, Ghewar, Pyaaz Kachori, Laal Maas (mutton curry)",
      todo:     ["Explore Amber Fort at sunrise (elephant or jeep)", "Walk through Hawa Mahal's 953 windows", "Watch the light & sound show at Nahargarh Fort", "Shop for gems in Johari Bazaar", "Visit City Palace & Jantar Mantar observatory"],
      stay:     ["Rambagh Palace (Ultra-luxury)", "Samode Haveli (Heritage mid)", "Pearl Palace Heritage (Budget gem)"],
      culture:  "Jaipur was painted pink in 1876 to welcome Prince Albert of Wales. India's first planned city, it was designed by mathematician-king Sawai Jai Singh II in a precise grid.",
      mapSrc:   "https://maps.google.com/maps?q=Jaipur,Rajasthan&t=&z=12&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Pink City Weekend",   days: "2N/3D", price: "₹9,500",  desc: "Forts, palaces & night market" },
        { name: "Rajasthan Royal",     days: "7N/8D", price: "₹38,000", desc: "Jaipur + Udaipur + Jodhpur" },
        { name: "Heritage Luxury",     days: "4N/5D", price: "₹55,000", desc: "Palace hotel + elephant ride" }
      ]
    },
    {
      name:     "Kerala Backwaters",
      country:  "Kerala",
      img:      "keralal.jpg",
      desc:     "Glide through 900 km of palm-fringed canals on a traditional houseboat in God's Own Country.",
      best:     "Oct – Feb",
      how:      "Flight to Kochi (COK), then drive 1.5 hrs to Alleppey (Alappuzha). Trains also available.",
      food:     "Kerala Fish Curry with red rice, Appam & Stew, Puttu & Kadala, Karimeen Pollichathu",
      todo:     ["Overnight houseboat cruise through Alleppey canals", "Village canoe tour at dawn", "Attend Kathakali classical dance performance", "Visit Periyar Tiger Reserve (Thekkady)", "Ayurveda rejuvenation spa treatment"],
      stay:     ["Kumarakom Lake Resort (Luxury)", "Floating Houseboat Premier (Mid)", "Zostel Alleppey (Budget)"],
      culture:  "Houseboat (kettuvallam) culture grew from ancient rice-barge trade routes. Kerala has 100% literacy and retains unique matrilineal social traditions among some communities.",
      mapSrc:   "https://maps.google.com/maps?q=Alleppey+Backwaters+Kerala&t=&z=12&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Backwater Bliss",    days: "3N/4D", price: "₹14,000", desc: "Houseboat + Kovalam beach" },
        { name: "Kerala Complete",    days: "7N/8D", price: "₹32,000", desc: "Munnar + Backwaters + Kovalam" },
        { name: "Ayurveda Retreat",   days: "6N/7D", price: "₹45,000", desc: "Wellness + backwaters + Thekkady" }
      ]
    },
    {
      name:     "Leh–Ladakh",
      country:  "Jammu & Kashmir",
      img:      "leh.jpg",
      desc:     "A high-altitude dreamscape of monasteries, turquoise Pangong Lake, and barren mountains under infinite skies.",
      best:     "Jun – Sep",
      how:      "Direct flights to Leh (IXL) from Delhi & Srinagar. Road via Manali (2 days) or Srinagar (1.5 days).",
      food:     "Thukpa (noodle soup), Momos, Butter Tea (Gur Gur Chai), Skyu (pasta stew)",
      todo:     ["Watch sunrise at Pangong Tso Lake (turquoise at dawn)", "Ride across Khardung La — one of world's highest motorable passes", "Visit Thiksey & Hemis monasteries", "Quad biking in Nubra Valley sand dunes", "Attend Ladakh Festival (September)"],
      stay:     ["The Grand Dragon Leh (Luxury)", "Hotel Saser (Mid-range)", "Nomadic Trails Camp (Budget)"],
      culture:  "Ladakh is a Tibetan Buddhist enclave with a distinct culture. Hemis monastery holds India's largest thangka painting, revealed once every 12 years. Local festivals feature cham (mask) dances.",
      mapSrc:   "https://maps.google.com/maps?q=Leh+Ladakh+India&t=&z=9&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Ladakh Intro",        days: "5N/6D", price: "₹22,000", desc: "Leh + Pangong + Nubra Valley" },
        { name: "Bike Expedition",     days: "10N/11D", price: "₹35,000", desc: "Manali to Leh on Royal Enfield" },
        { name: "Luxury Himalaya",     days: "7N/8D", price: "₹65,000", desc: "Private SUVs + glamping tents" }
      ]
    },
    {
      name:     "Goa",
      country:  "Goa",
      img:      "goa.jpg",
      desc:     "Golden beaches, Portuguese churches, vibrant nightlife, and spiced seafood — India's perennial favourite escape.",
      best:     "Nov – Feb",
      how:      "Flight to Goa (GOI) from all major cities. Konkan Railway (scenic option). Cruise ships also dock here.",
      food:     "Goan Fish Curry Rice, Bebinca (layered dessert), Vindaloo, Feni (cashew spirit)",
      todo:     ["Beach-hop from Calangute to secluded Palolem", "Explore Old Goa's UNESCO World Heritage churches", "Water sports at Baga (parasailing, jet ski)", "Spice plantation tour with traditional lunch", "Sunset cruise on the Mandovi River"],
      stay:     ["Taj Exotica Resort (Luxury)", "La Calypso Resort (Mid)", "The Bunk Hostel (Budget)"],
      culture:  "Goa was a Portuguese colony for 451 years (1510–1961). This is visible everywhere — in the Konkani-Portuguese cuisine, Baroque churches, and colonial mansions (casas grandes).",
      mapSrc:   "https://maps.google.com/maps?q=Goa,India&t=&z=11&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Goa Beach Weekend",   days: "3N/4D", price: "₹12,000", desc: "North & South beaches + nightlife" },
        { name: "Heritage Goa",        days: "4N/5D", price: "₹18,000", desc: "Old Goa + spice tour + beaches" },
        { name: "Luxury Goa",          days: "5N/6D", price: "₹42,000", desc: "5-star resort + private yacht" }
      ]
    },
    {
      name:     "Agra",
      country:  "Uttar Pradesh",
      img:      "agra.jpg",
      desc:     "Home of the Taj Mahal — the greatest monument of love ever built and a UNESCO World Heritage Site.",
      best:     "Oct – Mar",
      how:      "Gatimaan Express from Delhi (1.5 hrs). Taj Express (2 hrs). On Golden Triangle tourist circuit.",
      food:     "Petha (white pumpkin sweet), Mughlai Biryani, Agra ka Dalmoth, Bedhai Poori",
      todo:     ["Photograph the Taj Mahal at sunrise (magical golden light)", "Explore the UNESCO-listed Agra Fort", "Day trip to Fatehpur Sikri ghost city (37 km)", "Book moonlight Taj viewing (limited tickets)", "Marble inlay (pietra dura) craft workshop"],
      stay:     ["The Oberoi Amarvilas (Luxury — Taj view from every room)", "Courtyard by Marriott (Mid)", "Hotel Sidhartha (Budget)"],
      culture:  "The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died in 1631. Construction took 22 years, 20,000 artisans, and used white Makrana marble from Rajasthan.",
      mapSrc:   "https://maps.google.com/maps?q=Taj+Mahal+Agra&t=&z=15&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Taj in a Day",       days: "1N/2D", price: "₹6,000",  desc: "Taj Mahal + Agra Fort" },
        { name: "Golden Triangle",    days: "6N/7D", price: "₹26,000", desc: "Delhi + Agra + Jaipur" },
        { name: "Mughal Luxe",        days: "4N/5D", price: "₹48,000", desc: "Oberoi stay + private guide" }
      ]
    },
    {
      name:     "Darjeeling",
      country:  "West Bengal",
      img:      "darjeeling.jpg",
      desc:     "The Queen of Hills — famous for its first-flush tea, UNESCO Toy Train, and panoramic views of Kanchenjunga.",
      best:     "Mar – May & Sep – Dec",
      how:      "Flight to Bagdogra (IXB), then 3 hr taxi through mountain roads. Toy Train from NJP (heritage option).",
      food:     "Darjeeling First Flush Tea, Momos, Sel Roti (rice doughnut), Thukpa noodle soup",
      todo:     ["Watch sunrise over Kanchenjunga from Tiger Hill (4 AM start)", "Ride the UNESCO Darjeeling Himalayan Railway (Toy Train)", "Tour Happy Valley Tea Estate — smell fresh leaves", "Walk the Batasia Loop garden & war memorial", "Visit Padmaja Naidu Himalayan Zoological Park"],
      stay:     ["Windamere Hotel (Heritage luxury)", "Elgin Hotel Darjeeling (Mid heritage)", "Zostel Darjeeling (Budget)"],
      culture:  "Darjeeling was developed as a British hill sanatorium in the 1840s. The Gorkha community has a fierce martial tradition and a distinct Nepali-influenced culture, visible in festivals like Losar and Tihar.",
      mapSrc:   "https://maps.google.com/maps?q=Darjeeling,West+Bengal&t=&z=13&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Darjeeling Hills",   days: "3N/4D", price: "₹11,000", desc: "Tiger Hill + tea tour + Toy Train" },
        { name: "Northeast Gems",     days: "8N/9D", price: "₹34,000", desc: "Darjeeling + Gangtok + Pelling" },
        { name: "Heritage & Tea",     days: "4N/5D", price: "₹22,000", desc: "Heritage hotel + private tea guide" }
      ]
    }
  ],

  /* ── INTERNATIONAL ── */
  international: [
    {
      name:     "Paris",
      country:  "France",
      img:      "paris.jpg",
      desc:     "The City of Light — Eiffel Tower, the Louvre, romantic boulevards, and the world's finest patisseries.",
      best:     "Apr – Jun & Sep – Oct",
      how:      "Direct flights from Delhi & Mumbai (9-10 hrs). Air France, Air India, IndiGo operate routes.",
      food:     "Croissants & Pain au Chocolat, Crème Brûlée, French Onion Soup, Macarons",
      todo:     ["Eiffel Tower at golden sunset hour", "Louvre Museum — follow the Mona Lisa trail", "Seine River cruise at night", "Day trip to Palace of Versailles (40 min by RER)", "Walk Montmartre & Sacré-Cœur Basilica"],
      stay:     ["Le Bristol Paris (Ultra Luxury)", "Hotel du Petit Moulin (Mid boutique)", "Generator Hostel Paris (Budget)"],
      culture:  "French café culture is a UNESCO Intangible Heritage. Parisians linger over a single espresso for hours. Over 130 museums dot the city — Paris has more museums per km² than any other city.",
      mapSrc:   "https://maps.google.com/maps?q=Paris,France&t=&z=12&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Paris Weekend",      days: "4N/5D", price: "₹85,000",   desc: "City highlights + Seine cruise" },
        { name: "France Explorer",    days: "8N/9D", price: "₹1,50,000", desc: "Paris + Nice + Lyon + Versailles" },
        { name: "Paris Luxury",       days: "6N/7D", price: "₹2,80,000", desc: "5-star + Michelin dinners + guide" }
      ]
    },
    {
      name:     "Bali",
      country:  "Indonesia",
      img:      "bali1.jpg",
      desc:     "The Island of Gods — terraced rice fields, ancient temples, surf beaches, and deeply spiritual Balinese culture.",
      best:     "Apr – Oct",
      how:      "Direct flights from Delhi/Mumbai (7-8 hrs) to Ngurah Rai Airport (DPS), Denpasar.",
      food:     "Nasi Goreng (fried rice), Babi Guling (suckling pig), Satay Lilit, Jamu herbal drink",
      todo:     ["Sunrise hike on Mount Batur active volcano", "Ubud Monkey Forest & Tegallalang rice terraces", "Tanah Lot sea temple at sunset", "Surf lessons at Kuta or Canggu", "Traditional Balinese cooking class + spa"],
      stay:     ["COMO Uma Ubud (Luxury jungle)", "Alaya Resort Ubud (Mid)", "Puri Garden Hostel (Budget)"],
      culture:  "Over 10,000 Hindu temples make Bali unique in Muslim-majority Indonesia. Daily canang sari offerings are placed everywhere — on doorsteps, motorbikes, shop counters — as gratitude to the gods.",
      mapSrc:   "https://maps.google.com/maps?q=Bali,Indonesia&t=&z=10&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Bali Bliss",         days: "5N/6D", price: "₹60,000", desc: "Ubud + Kuta + Seminyak beach" },
        { name: "Bali Honeymoon",     days: "7N/8D", price: "₹95,000", desc: "Private villa + spa + tours" },
        { name: "Adventure Bali",     days: "6N/7D", price: "₹72,000", desc: "Volcano + diving + whitewater rafting" }
      ]
    },
    {
      name:     "Dubai",
      country:  "UAE",
      img:      "dubai1.jpg",
      desc:     "Futuristic skylines, desert safaris, glittering gold souks, and the world's tallest building in the Arabian desert.",
      best:     "Nov – Mar",
      how:      "Direct flights from all Indian cities (3-4 hrs). Visa on arrival or e-visa for Indians.",
      food:     "Shawarma, Al Harees (wheat & meat porridge), Luqaimat (honey dumplings), Camel Milk Ice Cream",
      todo:     ["Burj Khalifa 'At the Top' observation deck (124th floor)", "Evening desert safari with dune bashing & BBQ", "Gold Souk & Spice Souk walking tour", "Ski Dubai indoor skiing & snowboarding", "Dubai Frame & Museum of the Future"],
      stay:     ["Atlantis The Palm (Luxury icon)", "JW Marriott Marquis (Mid luxury)", "Rove City Centre (Budget smart)"],
      culture:  "Dubai transformed from a pearl fishing village to a global megacity in just 50 years. Despite its ultra-modern face, traditional dhow boat culture, falconry, and camel racing remain proudly celebrated.",
      mapSrc:   "https://maps.google.com/maps?q=Dubai,UAE&t=&z=11&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Dubai City Break",   days: "4N/5D", price: "₹65,000",   desc: "City + desert + Burj Khalifa" },
        { name: "Dubai Luxury",       days: "6N/7D", price: "₹1,40,000", desc: "Atlantis + yacht + desert safari" },
        { name: "Family Dubai",       days: "5N/6D", price: "₹88,000",   desc: "Theme parks + beach + city sights" }
      ]
    },
    {
      name:     "Kyoto",
      country:  "Japan",
      img:      "kyoto1.jpg",
      desc:     "Japan's ancient capital with 2,000 temples, geisha districts, bamboo groves, and seasonal cherry blossoms.",
      best:     "Mar – May (Cherry Blossom) & Oct – Nov (Autumn leaves)",
      how:      "Flight to Osaka KIX or Tokyo NRT (9-10 hrs), then Shinkansen bullet train to Kyoto Station.",
      food:     "Kaiseki (multi-course seasonal cuisine), Matcha sweets, Tofu Ryouri, Yudofu (hot pot tofu)",
      todo:     ["Arashiyama Bamboo Grove at 6 AM (before crowds)", "Fushimi Inari 10,000 Torii Gates at dusk", "Traditional tea ceremony in Gion district", "Kinkaku-ji Golden Pavilion temple", "Day trip to Nara deer park (45 min by train)"],
      stay:     ["Aman Kyoto (Ultra Luxury)", "Gion Hatanaka Ryokan (Traditional heritage)", "Guest House Waraku-an (Budget)"],
      culture:  "Kyoto was Japan's imperial capital for 1,074 years. Geisha (Maiko apprentice) culture still survives in Gion's preserved wooden machiya townhouses. The tea ceremony (chado) is a form of moving meditation.",
      mapSrc:   "https://maps.google.com/maps?q=Kyoto,Japan&t=&z=13&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Kyoto Highlights",   days: "4N/5D", price: "₹1,10,000", desc: "Temples + bamboo + tea ceremony" },
        { name: "Japan Classic",      days: "10N/11D", price: "₹2,40,000", desc: "Tokyo + Kyoto + Hiroshima + Nara" },
        { name: "Ryokan Luxury",      days: "6N/7D", price: "₹3,20,000", desc: "Traditional inn + private guide" }
      ]
    },
    {
      name:     "Maldives",
      country:  "Indian Ocean",
      img:      "maldives1.jpg",
      desc:     "Overwater bungalows, invisible turquoise lagoons, and coral reefs teeming with life — paradise on Earth.",
      best:     "Nov – Apr",
      how:      "Direct flights from India (2-3 hrs) to Velana Int'l Airport (MLE), then seaplane or speedboat to resorts.",
      food:     "Garudhiya (tuna broth), Mas Huni (tuna & coconut breakfast), Fihunu Mas (grilled fish), Hedhikaa (snacks)",
      todo:     ["Snorkel with manta rays & whale sharks", "Sleep in glass-floor overwater bungalow", "Sunset fishing trip with local fishermen", "Submarine dive & underwater restaurant dinner", "Island hop uninhabited sandbanks"],
      stay:     ["Soneva Jani (Ultra Luxury — water villas)", "Centara Ras Fushi (Mid-Luxury)", "Kuredu Island Resort (Mid-range)"],
      culture:  "The Maldives is the world's lowest-lying country (avg 1.5m above sea level). Dhivehi language and traditional Bodu Beru drumming define the warm, hospitable island culture.",
      mapSrc:   "https://maps.google.com/maps?q=Maldives&t=&z=8&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Maldives Escape",    days: "4N/5D", price: "₹95,000",   desc: "Overwater villa + snorkelling" },
        { name: "Maldives Honeymoon", days: "6N/7D", price: "₹1,60,000", desc: "Luxury villa + spa + diving" },
        { name: "Budget Maldives",    days: "4N/5D", price: "₹55,000",   desc: "Local island guesthouse + beach" }
      ]
    },
    {
      name:     "Switzerland",
      country:  "Europe",
      img:      "switzerland.jpg",
      desc:     "Interlaken, Jungfraujoch, Zurich — Europe's alpine paradise of chocolate, cheese, and endless panoramas.",
      best:     "Jun – Sep (summer) & Dec – Feb (snow/skiing)",
      how:      "Flights to Zurich (ZRH) or Geneva (GVA) (9-10 hrs from India). Swiss Rail Pass recommended on arrival.",
      food:     "Cheese Fondue, Raclette, Rösti (potato pancake), Swiss Chocolate, Zürcher Geschnetzeltes",
      todo:     ["Jungfraujoch 'Top of Europe' at 3,454m — take the cogwheel train", "Paragliding over Interlaken (tandem flights year-round)", "Scenic cruise on Lake Geneva or Lake Lucerne", "Explore Grindelwald & First Cliff Walk by Tissot", "Swiss chocolate & watch factory tours in Zurich"],
      stay:     ["Victoria-Jungfrau Grand Hotel (Luxury)", "Hotel Bellevue Interlaken (Mid)", "Youth Hostel Interlaken (Budget)"],
      culture:  "Switzerland has 4 national languages: German, French, Italian, and Romansh. Direct democracy allows citizens to vote on laws. Watchmaking and precision craftsmanship define Swiss national identity.",
      mapSrc:   "https://maps.google.com/maps?q=Interlaken,Switzerland&t=&z=12&ie=UTF8&iwloc=&output=embed",
      packages: [
        { name: "Swiss Highlights",   days: "6N/7D", price: "₹1,80,000", desc: "Interlaken + Zurich + Lucerne" },
        { name: "Alps Adventure",     days: "8N/9D", price: "₹2,40,000", desc: "Skiing + Jungfraujoch + paragliding" },
        { name: "Swiss Luxury Rail",  days: "10N/11D", price: "₹3,80,000", desc: "Glacier Express + luxury hotels" }
      ]
    }
  ]
};

/* Adventure section data */
const adventureDest = [
  {
    name: "Valley of Flowers",
    country: "Uttarakhand",
    pill: "🥾 Trekking",
    pillBg: "rgba(45,106,79,0.20)",
    pillColor: "#2D6A4F",
    img: "valley.jpg",
    desc: "A UNESCO World Heritage Site blooming with 300+ species of wildflowers in a Himalayan high-altitude meadow.",
    best: "Jul – Sep",
    alert: "🌺 Valley of Flowers, Uttarakhand\n\nBest Time: July – September\n\nA UNESCO World Heritage Site with 300+ wildflower species. The 6 km trek from Ghangaria is gentle and stunning.\n\n✅ Things to do:\n• Trek the Valley of Flowers (6 km each way)\n• Visit Hemkund Sahib Gurudwara (14,100 ft)\n• Spot Blue Poppies, Brahmakamal & Cobra Lilies\n• Birdwatch for Himalayan Monal Pheasant\n\n🏨 Stay at: Ghangaria base camp guesthouses\n🚆 Reach via: Joshimath → Govindghat → Ghangaria trek\n\n📦 Packages from ₹12,000 for 5N/6D\n\n📞 More info coming soon — contact our trekking desk!"
  },
  {
    name: "Andaman Islands",
    country: "Bay of Bengal",
    pill: "🤿 Scuba Diving",
    pillBg: "rgba(27,79,114,0.20)",
    pillColor: "#1B4F72",
    img: "andmaan.jpg",
    desc: "Pristine coral reefs, WWII Japanese shipwrecks, bioluminescent beaches, and Olive Ridley sea turtle nesting shores.",
    best: "Nov – May",
    alert: "🏝 Andaman Islands\n\nBest Time: November – May\n\nAsia's finest beaches + some of India's best scuba diving.\n\n✅ Things to do:\n• Scuba dive at Havelock Elephant Beach\n• Snorkel at Neil Island's natural bridge\n• Bioluminescent plankton beach walk (night)\n• Visit Cellular Jail Light & Sound Show\n• Sea kayaking through mangrove creeks\n\n🏨 Stay at: Symphony Palms Beach Resort (Luxury) | Munjoh Ocean Resort (Mid)\n✈️ Reach via: Flight to Port Blair (IXZ) from Chennai / Kolkata / Delhi\n\n📦 Packages from ₹22,000 for 5N/6D\n\n📞 More info coming soon — contact our island travel desk!"
  },
  {
    name: "Rishikesh",
    country: "Uttarakhand",
    pill: "🌊 White-Water Rafting",
    pillBg: "rgba(123,63,0,0.15)",
    pillColor: "#7B3F00",
    img: "rishikesh.jpg",
    desc: "White-water rafting on the Ganges, bungee jumping from India's highest platform, camping under stars, and world-class yoga.",
    best: "Sep – Jun",
    alert: "🌊 Rishikesh, Uttarakhand — Adventure Capital of India\n\nBest Time: September – June (avoid monsoon)\n\n✅ Things to do:\n• Raft Grade 3-4 rapids (Shivpuri to Rishikesh)\n• Bungee jump 83m (India's highest fixed platform)\n• Flying fox & Giant Swing at Jumping Heights\n• Camp on Ganges riverside (firepit + stars)\n• Morning yoga & meditation at an ashram\n\n🏨 Stay at: Camp Ganga Vatika (Luxury camp) | Zostel Rishikesh (Budget)\n🚆 Reach: Train to Haridwar (130+ cities connected), then 30 min taxi\n\n📦 Adventure packages from ₹5,500 for 2N/3D\n\n📞 More info coming soon — contact our adventure desk!"
  },
  {
    name: "Rann of Kutch",
    country: "Gujarat",
    pill: "🌅 Salt Desert",
    pillBg: "rgba(139,32,32,0.15)",
    pillColor: "#8B2020",
    img: "kutch.jpg",
    desc: "The world's largest salt desert transforms into a vast white mirror under the full moon during the Rann Utsav festival.",
    best: "Nov – Feb (Rann Utsav)",
    alert: "🌅 Rann of Kutch, Gujarat\n\nBest Time: November – February (Rann Utsav season)\n\nThe Great Rann stretches 7,500 sq km — one of Earth's most surreal landscapes.\n\n✅ Things to do:\n• Full moon walk on the white salt flats\n• Explore Dholavira — Harappan Civilisation site (UNESCO)\n• Flamingo safari in Little Rann\n• Visit Kutchi craftsmen (embroidery, bandhani, rogan art)\n• Kala Dungar (Black Hill) — highest point in Kutch\n\n🏨 Stay at: Rann Utsav Luxury Tents (Government) | Shaam-e-Sarhad Village Resort\n✈️ Reach: Flight to Bhuj (BHJ), then drive 85 km to Dhordo\n\n📦 Rann packages from ₹14,000 for 3N/4D\n\n📞 More info coming soon — contact our Gujarat travel desk!"
  }
];




/**
 * buildCards()
 * Takes an array of destination objects and a container ID,
 * then creates a card for each and appends to the DOM.
 */
function buildCards(arr, containerId) {
  const container = document.getElementById(containerId);

  arr.forEach(function (d) {
    
    const card = document.createElement('div');
    card.className = 'card';

    
    const howShort = d.how.split(' ').slice(0, 4).join(' ') + '…';

    card.innerHTML =
      '<div class="card-img" style="background-image:url(\'' + d.img + '\')">' +
        '<span class="badge">' + d.country + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<h3>' + d.name + '</h3>' +
        '<p>' + d.desc + '</p>' +
        '<div class="card-meta">' +
          '<span class="meta-tag tag-best">🌤 ' + d.best + '</span>' +
          '<span class="meta-tag tag-how">🚆 ' + howShort + '</span>' +
          '<span class="meta-tag tag-food">🍽 Local Food</span>' +
        '</div>' +
        '<button class="btn-card" onclick="openModal(\'' + d.name + '\')">View Full Guide</button>' +
      '</div>';

    container.appendChild(card);
  });
}


/* ──────────────────────────────────────────────
   3.  BUILD ADVENTURE CARDS
────────────────────────────────────────────── */

/**
 * buildAdventureCards()
 * Adventure cards are large image-overlay cards.
 * Clicking shows a detailed alert (beginner-level JS interaction).
 */
function buildAdventureCards() {
  const container = document.getElementById('adventure-grid');

  adventureDest.forEach(function (d) {
    const card = document.createElement('div');
    card.className = 'adv-card';
    card.style.backgroundImage = "url('" + d.img + "')";

   
    card.onclick = function () { showAdventureInfo(d); };

    card.innerHTML =
      '<div class="adv-text">' +
        '<span class="adv-pill" style="background:' + d.pillBg + ';color:' + d.pillColor + ';border:1px solid ' + d.pillColor + '40">' + d.pill + '</span>' +
        '<h3>' + d.name + '</h3>' +
        '<p>' + d.desc + '</p>' +
      '</div>';

    container.appendChild(card);
  });
}

/**
 * showAdventureInfo()
 * Shows a detailed alert for adventure destinations.
 * This is a beginner-friendly JS interaction as requested.
 */
function showAdventureInfo(d) {
  alert(d.alert);
}


/* ──────────────────────────────────────────────
   4.  MODAL LOGIC
────────────────────────────────────────────── */

/* Flat lookup table: destination name → data object */
const allDestinations = {};
destinations.religious.forEach(function (d)    { allDestinations[d.name] = d; });
destinations.domestic.forEach(function (d)     { allDestinations[d.name] = d; });
destinations.international.forEach(function (d){ allDestinations[d.name] = d; });

/**
 * openModal(name)
 * Called when a card's "View Full Guide" button is clicked.
 * Populates the modal with tabs and content for the chosen destination.
 */
function openModal(name) {
  var d = allDestinations[name];
  if (!d) return;

  // Set modal hero image and title
  document.getElementById('modal-name').textContent    = d.name;
  document.getElementById('modal-country').textContent = d.country;
  document.getElementById('modal-hero').style.backgroundImage = "url('" + d.img + "')";

  // Tab names
  var tabNames = ['Overview', 'Things To Do', 'How To Reach', 'Where To Stay', 'Food & Culture', 'Tour Packages', 'Map'];

  // Build HTML content for each tab
  var tabContents = [

    /* ── Tab 0: Overview ── */
    '<div class="info-grid">' +
      '<div class="info-box"><h4>📍 Destination</h4><p>' + d.name + ', ' + d.country + '</p></div>' +
      '<div class="info-box"><h4>🌤 Best Time to Visit</h4><p>' + d.best + '</p></div>' +
      '<div class="info-box full-col"><h4>📖 About ' + d.name + '</h4><p>' + d.desc + '</p></div>' +
      '<div class="info-box full-col"><h4>🎭 Local Culture & History</h4><p>' + d.culture + '</p></div>' +
    '</div>',

    /* ── Tab 1: Things To Do ── */
    '<h3 class="sub">Top Experiences in ' + d.name + '</h3>' +
    '<div class="info-grid">' +
      d.todo.map(function (item, i) {
        var icons = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
        return '<div class="info-box"><h4>' + (icons[i] || '✅') + ' Activity ' + (i + 1) + '</h4><p>' + item + '</p></div>';
      }).join('') +
    '</div>',

    /* ── Tab 2: How To Reach ── */
    '<div class="info-grid">' +
      '<div class="info-box full-col"><h4>✈️ Getting to ' + d.name + '</h4><p>' + d.how + '</p></div>' +
      '<div class="info-box"><h4>🚌 Local Transport</h4><p>Auto-rickshaws, taxis, and local buses are the best ways to explore once you arrive. Hire a guide for in-depth visits.</p></div>' +
      '<div class="info-box"><h4>💡 Travel Tip</h4><p>Book accommodation and transport well in advance during peak season and major festivals. Always keep a local SIM card handy.</p></div>' +
    '</div>',

    /* ── Tab 3: Where To Stay ── */
    '<h3 class="sub">Accommodation Options</h3>' +
    '<div class="info-grid">' +
      d.stay.map(function (s, i) {
        var labels = ['💎 Luxury Stay', '🏨 Mid-Range', '🎒 Budget Pick'];
        return '<div class="info-box"><h4>' + (labels[i] || '🏠 Option') + '</h4><p>' + s + '</p></div>';
      }).join('') +
    '</div>',

    /* ── Tab 4: Food & Culture ── */
    '<div class="info-grid">' +
      '<div class="info-box"><h4>🍽 Must-Try Food & Drinks</h4><p>' + d.food + '</p></div>' +
      '<div class="info-box full-col"><h4>🎭 Culture, Traditions & History</h4><p>' + d.culture + '</p></div>' +
      '<div class="info-box"><h4>🛍 Shopping Tips</h4><p>Look for local handicrafts, textiles, and regional food specialties at the main market areas. Always bargain politely!</p></div>' +
    '</div>',

    /* ── Tab 5: Tour Packages ── */
    '<h3 class="sub">Available Tour Packages</h3>' +
    '<div class="pkg-cards">' +
      d.packages.map(function (p) {
        return '<div class="pkg">' +
          '<div class="pkg-days">' + p.days + '</div>' +
          '<div class="pkg-price">' + p.price + '<small> /person</small></div>' +
          '<div class="pkg-name">' + p.name + '</div>' +
          '<div class="pkg-desc">' + p.desc + '</div>' +
          '<button class="btn-pkg" onclick="handleBooking(\'' + p.name + '\', \'' + p.price + '\')">Book Now</button>' +
        '</div>';
      }).join('') +
    '</div>',

    /* ── Tab 6: Map ── */
    '<h3 class="sub">📍 ' + d.name + ' on the Map</h3>' +
    '<p style="font-size:.84rem;color:var(--muted);margin-bottom:.8rem">Explore ' + d.name + ' and surrounding attractions using the interactive map below.</p>' +
    '<div class="map-wrap"><iframe src="' + d.mapSrc + '" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>'
  ];

  // Clear previous tab buttons and content
  var tabsEl    = document.getElementById('modal-tabs');
  var contentsEl = document.getElementById('modal-tab-contents');
  tabsEl.innerHTML    = '';
  contentsEl.innerHTML = '';

  // Build tab buttons and panels
  tabNames.forEach(function (tabName, i) {
    // Tab button
    var btn = document.createElement('button');
    btn.className = 'tab' + (i === 0 ? ' active' : '');
    btn.textContent = tabName;
    btn.onclick = function () { switchTab(i); };
    tabsEl.appendChild(btn);

    // Tab content panel
    var panel = document.createElement('div');
    panel.className = 'tab-content' + (i === 0 ? ' active' : '');
    panel.innerHTML = tabContents[i];
    contentsEl.appendChild(panel);
  });

  // Show overlay and prevent body scroll
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * switchTab(index)
 * Activates the clicked tab and shows its content panel.
 */
function switchTab(idx) {
  var tabs     = document.querySelectorAll('.tab');
  var contents = document.querySelectorAll('.tab-content');

  tabs.forEach(function (t, i)     { t.classList.toggle('active', i === idx); });
  contents.forEach(function (c, i) { c.classList.toggle('active', i === idx); });

  // Scroll modal to top when switching tabs
  document.getElementById('modal').scrollTop = 0;
}

/**
 * handleBooking(packageName, price)
 * Shows a booking confirmation alert — beginner JS interaction.
 */
function handleBooking(packageName, price) {
  alert(
    '🌏 Booking Request Received!\n\n' +
    'Package: ' + packageName + '\n' +
    'Price: ' + price + ' per person\n\n' +
    '✅ Our travel agents will contact you within 24 hours to confirm your booking.\n\n' +
    '📞 Helpline: 1800-TRAVEL (Mon–Sat, 9 AM – 6 PM)\n' +
    '📧 Email: bookings@discoverindia.com\n\n' +
    'Thank you for choosing Discover India & Beyond! 🙏'
  );
}

/**
 * closeModal()
 * Hides the modal overlay and re-enables body scrolling.
 */
function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * handleOverlayClick(event)
 * Closes modal when clicking outside the modal box.
 */
function handleOverlayClick(event) {
  if (event.target === document.getElementById('overlay')) {
    closeModal();
  }
}

/* Close modal with Escape key */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { closeModal(); }
});


/* ──────────────────────────────────────────────
   5.  STICKY NAV — SCROLL SPY
   Highlights the correct nav button as user scrolls
────────────────────────────────────────────── */

/**
 * goTo(sectionId)
 * Smoothly scrolls to a section, accounting for sticky nav height.
 */
function goTo(sectionId) {
  var section = document.getElementById(sectionId);
  var navHeight = document.getElementById('topnav').offsetHeight;
  if (section) {
    var top = section.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}

/* Listen for scroll and update active nav button */
window.addEventListener('scroll', function () {
  var sectionIds = ['religious', 'domestic', 'international', 'adventure'];
  var navHeight  = document.getElementById('topnav').offsetHeight;
  var current    = '';

  sectionIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= navHeight + 100) {
      current = id;
    }
  });

  var buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(function (btn, i) {
    btn.classList.toggle('active', sectionIds[i] === current);
  });
});


/* ──────────────────────────────────────────────
   6.  CARD ENTRANCE ANIMATIONS (Scroll-triggered)
   Cards fade and slide up as they enter the viewport
────────────────────────────────────────────── */

/**
 * initAnimations()
 * Hides all cards initially, then uses IntersectionObserver
 * to reveal them with a staggered animation as user scrolls.
 *
 * Beginner note: IntersectionObserver watches if an element
 * becomes visible on screen. When it does, we animate it in.
 */
function initAnimations() {
  var cards = document.querySelectorAll('.card, .adv-card');

  cards.forEach(function (card, index) {
    // Start hidden and shifted down
    card.style.opacity   = '0';
    card.style.transform = 'translateY(30px)';
    // Stagger delay based on position within row of 3
    var delay = (index % 3) * 0.10;
    card.style.transition =
      'opacity 0.50s ease ' + delay + 's, ' +
      'transform 0.50s ease ' + delay + 's, ' +
      'box-shadow 0.28s ease';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Animate card into view
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        // Stop watching once card is visible (no need to re-animate)
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

  cards.forEach(function (card) { observer.observe(card); });
}


/* ──────────────────────────────────────────────
   7.  INITIALISATION
   Run when the page has fully loaded.
────────────────────────────────────────────── */
window.addEventListener('load', function () {
  // Build all destination cards
  buildCards(destinations.religious,    'religious-grid');
  buildCards(destinations.domestic,     'domestic-grid');
  buildCards(destinations.international,'international-grid');
  buildAdventureCards();

  // Slight delay ensures cards are in the DOM before observing
  setTimeout(initAnimations, 60);

  console.log('✈️ Discover India & Beyond — Travel Guide Loaded!');
  console.log('💡 Click any "View Full Guide" button to explore destinations.');
});