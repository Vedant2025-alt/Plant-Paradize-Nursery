// Generates a simple leaf thumbnail so every plant has an image without
// relying on external hosting. Replace `image` with real photo URLs any time.
const thumb = (bg, leaf) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240" viewBox="0 0 300 240">
      <rect width="300" height="240" fill="${bg}"/>
      <rect x="105" y="160" width="90" height="60" rx="8" fill="#b5651d"/>
      <path d="M150 165 C150 110 150 90 150 55" stroke="${leaf}" stroke-width="6" fill="none"/>
      <path d="M150 140 C110 135 90 110 85 85 C120 85 145 105 150 140Z" fill="${leaf}"/>
      <path d="M150 110 C190 105 212 80 215 55 C180 55 155 75 150 110Z" fill="${leaf}"/>
      <path d="M150 80 C130 70 125 50 128 35 C145 40 152 60 150 80Z" fill="${leaf}"/>
    </svg>`
  );

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', description: 'Produces oxygen at night and removes toxins.', cost: 15, image: thumb('#e3f1e3', '#2f7d4a') },
      { name: 'Spider Plant', description: 'Filters formaldehyde and xylene from the air.', cost: 12, image: thumb('#e8f4dc', '#5a9e3a') },
      { name: 'Peace Lily', description: 'Elegant white blooms that clean the air.', cost: 18, image: thumb('#e1efe8', '#2a6f55') },
      { name: 'Boston Fern', description: 'Humidifies the air and removes pollutants.', cost: 20, image: thumb('#e6f2df', '#3e8e41') },
      { name: 'Rubber Plant', description: 'Large glossy leaves that absorb airborne toxins.', cost: 17, image: thumb('#e2eee6', '#24543a') },
      { name: 'Aloe Vera', description: 'Cleans the air and soothes minor burns.', cost: 14, image: thumb('#e9f3e0', '#6aa84f') },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', description: 'Calming scent that promotes relaxation.', cost: 20, image: thumb('#efe8f5', '#7a5fa3') },
      { name: 'Jasmine', description: 'Sweet-smelling flowers that lift the mood.', cost: 18, image: thumb('#f6f2e4', '#4f8a4a') },
      { name: 'Rosemary', description: 'Fragrant herb for cooking and aromatherapy.', cost: 15, image: thumb('#e4efe9', '#3f7a5c') },
      { name: 'Mint', description: 'Refreshing aroma, great for teas and drinks.', cost: 12, image: thumb('#e0f3e6', '#35a05a') },
      { name: 'Lemon Balm', description: 'Lemon-scented leaves that reduce stress.', cost: 14, image: thumb('#f1f5dc', '#7da832') },
      { name: 'Hyacinth', description: 'Strongly scented spring blooms.', cost: 22, image: thumb('#e8eaf6', '#5c6bc0') },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', description: 'Thrives on neglect and tolerates low light.', cost: 25, image: thumb('#e2efe5', '#1f6b45') },
      { name: 'Pothos', description: 'Fast-growing trailing vine, very forgiving.', cost: 10, image: thumb('#e7f3dd', '#4fa03a') },
      { name: 'Cast Iron Plant', description: 'Nearly indestructible, loves shade.', cost: 22, image: thumb('#dfece3', '#22573a') },
      { name: 'Jade Plant', description: 'Succulent that stores water in thick leaves.', cost: 16, image: thumb('#e5f2e2', '#3c8a52') },
      { name: 'Chinese Evergreen', description: 'Patterned leaves, adapts to indoor conditions.', cost: 19, image: thumb('#e6efe0', '#4b8f4b') },
      { name: 'Haworthia', description: 'Compact succulent that needs little water.', cost: 13, image: thumb('#e4f0e8', '#2e8068') },
    ],
  },
];

export default plantsArray;
