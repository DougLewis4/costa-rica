// ============================================================
// COSTA RICA 2026 — Trip Data
// Aug 22–31, 2026 · Doug + Maya
// Confirmed reservations pulled from email (Jun 2026):
//   United O2J9NZ (SAN→SJO, Aug 22) · Southwest B5WGG4 (SJO→SAN, Aug 31)
//   Budget car #73484292517472 · Noah's Hideaway #73485182264837
//   Travel Guard insurance #1003891888
// ============================================================
const CATEGORIES = [
  {
    id: 'booked',
    label: 'Already Booked',
    locked: false,
    tasks: [
      {
        id: 'flight-in',
        title: 'Flights down: San Diego → Houston → San José (Aug 22)',
        dueDate: null,
        estimatedCost: 25,
        defaultStatus: 'done',
        hint: 'United UA1980 SAN 10:13am → IAH 3:34pm | UA1280 IAH 4:58pm → SJO 7:37pm\nUnited confirmation: O2J9NZ (Maya: OQSHQQ) · Booked via Capital One Travel (21,800 miles + $24.68)'
      },
      {
        id: 'flight-out',
        title: 'Flights home: San José → Houston → San Diego (Aug 31)',
        dueDate: null,
        estimatedCost: 528,
        defaultStatus: 'done',
        hint: 'Southwest WN1203 SJO 1:40pm → HOU 6:20pm | WN2004 HOU 8:50pm → SAN 10:05pm\nSouthwest confirmation: B5WGG4 · $527.91'
      },
      {
        id: 'car-rental',
        title: 'Rental car: Budget SUV (Aug 22–26)',
        dueDate: null,
        estimatedCost: 61,
        defaultStatus: 'booked',
        hint: 'Toyota RAV4 or similar (fullsize SUV, 5 passengers, unlimited miles).\nPick up: Sat Aug 22, 8:00pm at SJO airport | Drop off: Wed Aug 26, 5:00pm at Av. Escazú (near Torre Lexus).\nExpedia itinerary #73484292517472 · $61.36 due at counter · Bring a credit card in the driver’s name for the deposit.'
      },
      {
        id: 'hotel-fortuna',
        title: 'Hotel: Noah’s Hideaway by Tifakara — La Fortuna (Aug 23–26)',
        dueDate: null,
        estimatedCost: 921,
        defaultStatus: 'booked',
        hint: 'Check in Sun Aug 23, 3:00pm · Check out Wed Aug 26, 12:00pm · 3 nights, Garden Hideaway Villa.\n1.3 km north of La Fortuna park, Alajuela Province.\nHotels.com itinerary #73485182264837 · $921.39 · Non-refundable.'
      },
      {
        id: 'insurance',
        title: 'Travel insurance (Travel Guard)',
        dueDate: null,
        estimatedCost: 120,
        defaultStatus: 'done',
        hint: 'Travel Guard policy #1003891888 (purchased with the Expedia/Hotels.com booking). Covers trip cancellation, medical, and lost luggage.'
      },
      {
        id: 'hotel-arrival-fairfield',
        title: 'Hotel: Fairfield by Marriott San José Airport — Alajuela (Aug 22)',
        dueDate: null,
        estimatedCost: 125,
        defaultStatus: 'booked',
        hint: 'Arrival night, 1 night. Radial Francisco J. Orlich, Plaza Los Mangos, Alajuela · ~3 min from SJO airport.\nFree breakfast, onsite parking, airport shuttle & gym.\n$125 (AAA rate) · free cancellation until Aug 20.\nDon’t drive to Arenal tonight — stay here and drive up fresh on the 23rd.'
      },
      {
        id: 'hotel-hyatt-escazu',
        title: 'Hotel: Hyatt Centric San José Escazú (Aug 26–31)',
        dueDate: null,
        estimatedCost: 350,
        defaultStatus: 'booked',
        hint: 'Work-half base, 5 nights. Plaza Tempo, Autopista Próspero Fernández, Escazú · +506 7053 0605.\n$350 · steps from the Av. Escazú car drop-off and walking distance to the worksite (Magna Médica, San Rafael de Escazú).'
      }
    ]
  },
  {
    id: 'activities',
    label: 'Activities & Tours',
    locked: false,
    tasks: [
      { id: 'act-hotsprings', title: 'Book Arenal hot springs (Tabacón or EcoTermales)', dueDate: '2026-08-10', estimatedCost: 70, defaultStatus: 'not-started', hint: 'The most popular springs (Tabacón, EcoTermales) require advance reservations, especially at sunset. EcoTermales limits guests, so it’s quieter.' },
      { id: 'act-bridges', title: 'Mistico Arenal Hanging Bridges', dueDate: '2026-08-10', estimatedCost: 60, defaultStatus: 'not-started', hint: 'A gentle rainforest canopy walk on suspension bridges — great for spotting sloths, toucans, and monkeys. Guided tours find more wildlife.' },
      { id: 'act-waterfall', title: 'La Fortuna Waterfall entry', dueDate: '2026-08-15', estimatedCost: 20, defaultStatus: 'not-started', hint: 'A 500-step descent to a jungle swimming hole. Pay at the gate; bring water shoes and a towel.' },
      { id: 'act-adventure', title: 'Pick a big adventure (zipline / Río Celeste / rafting)', dueDate: '2026-08-15', estimatedCost: 100, defaultStatus: 'not-started', hint: 'Options: Sky Adventures ziplines + aerial tram; Río Celeste turquoise-river hike (~2 hr drive); or whitewater rafting on the Balsa River.' }
    ]
  },
  {
    id: 'admin',
    label: 'Trip Admin',
    locked: false,
    tasks: [
      { id: 'adm-passport', title: 'Check passport expiry', dueDate: '2026-07-20', estimatedCost: 0, defaultStatus: 'not-started', hint: 'Costa Rica requires your passport to be valid for your whole stay (ideally 6 months out). Make sure it’s valid well past Aug 31, 2026.' },
      { id: 'adm-onward', title: 'Have proof of onward travel ready', dueDate: '2026-08-15', estimatedCost: 0, defaultStatus: 'not-started', hint: 'Costa Rica immigration can ask for proof you’re leaving — your Southwest return (B5WGG4) covers this. Keep it handy on your phone.' },
      { id: 'adm-phone', title: 'International phone plan / eSIM', dueDate: '2026-08-18', estimatedCost: 50, defaultStatus: 'not-started', hint: 'For the work half you’ll want reliable data. T-Mobile includes international data; otherwise an eSIM (Airalo) or a local Kolbi SIM works well.' },
      { id: 'adm-bank', title: 'Notify bank + get some colones', dueDate: '2026-08-18', estimatedCost: 200, defaultStatus: 'not-started', hint: 'Tell your bank you’ll be in Costa Rica Aug 22–31. USD is widely accepted, but small sodas and rural spots prefer colones. Withdraw from a bank ATM for the best rate.' },
      { id: 'adm-maps', title: 'Download offline maps (La Fortuna + San José)', dueDate: '2026-08-20', estimatedCost: 0, defaultStatus: 'not-started', hint: 'In Google Maps, download offline areas for the Arenal region and the Central Valley — mountain roads lose signal.' },
      { id: 'adm-work', title: 'Confirm work setup for Escazú (wifi/desk)', dueDate: '2026-08-20', estimatedCost: 0, defaultStatus: 'not-started', hint: 'Check your Aug 26–31 stay has fast, reliable wifi and a workspace. Have a phone-hotspot backup for important calls.' },
      { id: 'adm-pack', title: 'Pack for rainy season', dueDate: '2026-08-20', estimatedCost: 0, defaultStatus: 'not-started', hint: 'Late August is green (rainy) season — afternoon showers. Bring a light rain jacket, quick-dry clothes, water shoes, swimsuit, bug spray, and reef-safe sunscreen.' }
    ]
  }
];

const ITINERARY = [
  { date: '2026-08-22', dow: 'Saturday',  title: 'Travel Day: San Diego → San José', stop: 'SAN → SJO', photo: 'images/travel.jpg', activities: [
    { time: '10:13 AM', detail: 'Depart San Diego (United UA1980 → Houston)' },
    { time: '3:34 PM',  detail: 'Arrive Houston (IAH) — 1h 24m layover' },
    { time: '4:58 PM',  detail: 'Depart Houston (United UA1280 → San José)' },
    { time: '7:37 PM',  detail: 'Land in San José (SJO) 🌴 — welcome to Costa Rica!' },
    { time: '8:00 PM',  detail: 'Pick up the Budget rental SUV at the airport' },
    { time: 'Evening',  detail: 'Check in at the Fairfield by Marriott (Alajuela, ~3 min from airport) — rest up; don’t drive to Arenal tonight' }
  ]},
  { date: '2026-08-23', dow: 'Sunday',    title: 'Drive to La Fortuna & Arenal', stop: 'La Fortuna', photo: 'images/la-fortuna.jpg', activities: [
    { time: 'Morning',   detail: 'Easy breakfast, then hit the road north' },
    { time: 'Late morn.',detail: 'Scenic drive to La Fortuna (~2.5–3 hrs) past coffee country and Lake Arenal' },
    { time: '3:00 PM',   detail: 'Check in at Noah’s Hideaway by Tifakara' },
    { time: 'Afternoon', detail: 'Settle in — first views of the perfectly cone-shaped Arenal Volcano' },
    { time: 'Evening',   detail: 'Dinner in La Fortuna town; ease into the volcanic thermal waters' }
  ]},
  { date: '2026-08-24', dow: 'Monday',    title: 'Arenal Volcano Day', stop: 'La Fortuna', photo: 'images/arenal.jpg', activities: [
    { time: 'Morning',   detail: 'Arenal Volcano National Park — old lava trails and the lookout at the volcano’s base' },
    { time: 'Midday',    detail: 'Mistico Arenal Hanging Bridges — a rainforest canopy walk (watch for sloths & toucans)' },
    { time: 'Afternoon', detail: 'La Fortuna Waterfall — 500 steps down to a jungle swimming pool' },
    { time: 'Evening',   detail: 'Hot springs at Tabacón or EcoTermales — natural volcanic thermal rivers' }
  ]},
  { date: '2026-08-25', dow: 'Tuesday',   title: 'Adventure Day', stop: 'La Fortuna', photo: 'images/rio-celeste.jpg', activities: [
    { time: 'Morning',   detail: 'Big-adventure pick: Sky Adventures ziplines & aerial tram, or the Río Celeste turquoise-river hike (~2 hr drive)' },
    { time: 'Afternoon', detail: 'Lake Arenal viewpoints, a coffee/chocolate tour, or simply relax by the pool' },
    { time: 'Evening',   detail: 'Last La Fortuna dinner — sunset over the volcano' }
  ]},
  { date: '2026-08-26', dow: 'Wednesday', title: 'La Fortuna → San José (Escazú)', stop: 'Escazú', photo: 'images/escazu.jpg', activities: [
    { time: '12:00 PM',  detail: 'Check out of Noah’s Hideaway' },
    { time: 'Afternoon', detail: 'Drive back toward the Central Valley (~3 hrs); stop for a late lunch on the way' },
    { time: '5:00 PM',   detail: 'Return the rental car in Escazú (Av. Escazú, near Torre Lexus)' },
    { time: 'Evening',   detail: 'Check in to the Hyatt Centric San José Escazú — the work half begins. Walking distance to the worksite (Magna Médica); Escazú is San José’s modern, walkable district: cafés, malls, restaurants' }
  ]},
  { date: '2026-08-27', dow: 'Thursday',  title: 'Work Day · Escazú', stop: 'Escazú', photo: 'images/escazu.jpg', activities: [
    { time: 'Morning',   detail: 'Work — grab a great local coffee to start' },
    { time: 'Lunch',     detail: 'A traditional "soda" (family-run Costa Rican diner) or an Escazú café' },
    { time: 'Evening',   detail: 'Wrap up, explore Escazú, dinner out' }
  ]},
  { date: '2026-08-28', dow: 'Friday',    title: 'Work Day · Escazú', stop: 'Escazú', photo: 'images/escazu.jpg', activities: [
    { time: 'Daytime',   detail: 'Focused work blocks' },
    { time: 'Evening',   detail: 'Dinner in San José — the Barrio Escalante food scene is worth the short trip' }
  ]},
  { date: '2026-08-29', dow: 'Saturday',  title: 'Weekend · Explore', stop: 'Central Valley', photo: 'images/poas.jpg', activities: [
    { time: 'Option',    detail: 'Poás Volcano crater + La Paz Waterfall Gardens (classic day trip)' },
    { time: 'Option',    detail: 'Coffee plantation tour (Doka Estate) — see how Costa Rican coffee is grown' },
    { time: 'Option',    detail: 'Downtown San José — Central Market, National Theater, Jade & Gold museums' },
    { time: 'Evening',   detail: 'Back to Escazú for dinner' }
  ]},
  { date: '2026-08-30', dow: 'Sunday',    title: 'Weekend · Relax', stop: 'San José', photo: 'images/sanjose.jpg', activities: [
    { time: 'Morning',   detail: 'Slow start — a local feria (farmers market) or a spa/yoga morning' },
    { time: 'Afternoon', detail: 'Souvenir run: Costa Rican coffee, chocolate, crafts. Start packing' },
    { time: 'Evening',   detail: 'Final dinner in Costa Rica' }
  ]},
  { date: '2026-08-31', dow: 'Monday',    title: 'Fly Home', stop: 'San José → San Diego', photo: 'images/travel.jpg', activities: [
    { time: 'Morning',   detail: 'Last breakfast; head to SJO airport (arrive ~11am — 2.5 hrs before an international flight)' },
    { time: '1:40 PM',   detail: 'Depart San José (Southwest WN1203 → Houston Hobby)' },
    { time: '6:20 PM',   detail: 'Arrive Houston Hobby (HOU) — change planes' },
    { time: '8:50 PM',   detail: 'Depart Houston (Southwest WN2004 → San Diego)' },
    { time: '10:05 PM',  detail: 'Land San Diego — pura vida, home again 💚' }
  ]}
];

// ============================================================
// RESTAURANT STOPS  (skip Aug 22 & 31 — travel days)
// ============================================================
const RESTAURANT_STOPS = [
  { id: 'fortuna', label: 'La Fortuna & Arenal', dates: ['2026-08-23','2026-08-24','2026-08-25'] },
  { id: 'sanjose', label: 'San José & Escazú',   dates: ['2026-08-26','2026-08-27','2026-08-28','2026-08-29','2026-08-30'] },
];

const MEAL_SKIP_DAYS = new Set(['2026-08-22','2026-08-31']);

// ============================================================
// MAP STOPS  (in route order)
// ============================================================
const MAP_STOPS = [
  { label: 'San José (SJO)',    sub: 'Aug 22 · Arrival',        lat: 9.9981,  lng: -84.2041 },
  { label: 'La Fortuna / Arenal', sub: 'Aug 23–26 · Adventure', lat: 10.4678, lng: -84.6427 },
  { label: 'Escazú',            sub: 'Aug 26–31 · Work base',   lat: 9.9189,  lng: -84.1396 },
];

// ============================================================
// HOUSING STOPS
// ============================================================
const HOUSING_STOPS = [
  { id: 'arrival', label: 'Arrival Night · Near SJO Airport', checkIn: '2026-08-22', checkOut: '2026-08-23', nights: 1, taskId: 'hotel-arrival-fairfield',
    recommendations: [
      { name: 'Fairfield by Marriott San José Airport  ✓ BOOKED', tier: 'Mid-range', note: 'Your confirmed arrival night · Plaza Los Mangos, Alajuela · ~3 min from SJO · free breakfast, shuttle & parking · $125', url: 'https://www.google.com/search?q=Fairfield+by+Marriott+San+Jose+Airport+Alajuela+Costa+Rica' },
      { name: 'Costa Rica Marriott Hacienda Belén', tier: 'Luxury', note: 'Alternative · colonial-style resort ~10 min from airport · pool', url: 'https://www.google.com/search?q=Costa+Rica+Marriott+Hotel+Hacienda+Belen' },
      { name: 'Hampton by Hilton San Jose Airport', tier: 'Mid-range', note: 'Alternative · free airport shuttle · breakfast included', url: 'https://www.google.com/search?q=Hampton+by+Hilton+San+Jose+Airport+Costa+Rica' },
    ]
  },
  { id: 'fortuna', label: 'La Fortuna / Arenal', checkIn: '2026-08-23', checkOut: '2026-08-26', nights: 3, taskId: 'hotel-fortuna',
    recommendations: [
      { name: 'Noah’s Hideaway by Tifakara  ✓ BOOKED', tier: 'Luxury', note: 'Your confirmed stay · Garden Hideaway Villa · 1.3 km north of La Fortuna park', url: 'https://www.google.com/search?q=Noah%27s+Hideaway+by+Tifakara+La+Fortuna' },
      { name: 'Arenal Volcano Lodge', tier: 'Mid-range', note: 'Volcano views · thermal pools (alt. Maya compared, ~$525/3 nights)', url: 'https://www.google.com/search?q=Arenal+Volcano+Lodge+La+Fortuna' },
      { name: 'La Fortuna Lodge', tier: 'Mid-range', note: 'In town · volcano view · budget-friendly (alt. Maya compared)', url: 'https://www.google.com/search?q=La+Fortuna+Lodge+Costa+Rica' },
    ]
  },
  { id: 'sanjose', label: 'Escazú · Work Base', checkIn: '2026-08-26', checkOut: '2026-08-31', nights: 5, taskId: 'hotel-hyatt-escazu',
    recommendations: [
      { name: 'Hyatt Centric San José Escazú  ✓ BOOKED', tier: 'Luxury', note: 'Your confirmed 5-night stay · Plaza Tempo, Autopista Próspero Fernández · +506 7053 0605 · walking distance to the worksite · $350', url: 'https://www.google.com/search?q=Hyatt+Centric+San+Jose+Escazu' },
      { name: 'Residence Inn San Jose Escazú', tier: 'Mid-range', note: 'Alternative · in-room kitchen + desk · walkable to Avenida Escazú', url: 'https://www.google.com/search?q=Residence+Inn+San+Jose+Escazu' },
      { name: 'AC Hotel San Jose Escazú', tier: 'Luxury', note: 'Alternative · modern · rooftop views · steps from Escazú malls', url: 'https://www.google.com/search?q=AC+Hotel+San+Jose+Escazu' },
    ]
  },
];
