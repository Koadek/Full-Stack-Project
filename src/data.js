const initialItems = [
  {
    title: 'Montreal',
    price: 4000000,
    rentPrice: 40000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Olympiastadion_Montreal.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Montreal_-_QC_-_Skyline.jpg/2560px-Montreal_-_QC_-_Skyline.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bas%C3%ADlica_de_Notre-Dame%2C_Montreal%2C_Canadá%2C_2017-08-11%2C_DD_19.jpg/1024px-Bas%C3%ADlica_de_Notre-Dame%2C_Montreal%2C_Canadá%2C_2017-08-11%2C_DD_19.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Old_Port_of_Montreal_%28French-_Vieux-Port_de_Montréal%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Oratoire_Saint-Joseph_du_Mont-Royal_-_Montreal.jpg/1280px-Oratoire_Saint-Joseph_du_Mont-Royal_-_Montreal.jpg',
    ],
    id: 'asewq',
    sellerId: 'canada',
    reviews: ['450', '10987'],
    bio:
      'Walk the streets of this city to admire the vestiges of its founding as a mission in 1642, and be charmed by the harmonious juxtaposition of its architecture, both old and new. In this French-speaking city of more than 4 million inhabitants and no fewer than 120 nationalities, French and English coexist alongside a myriad of other languages, and this mix of influences gives rise to a creative exuberance that’s all its own. Montrealers, who are warm and very often multilingual, are quick to strike up a conversation in the hope of getting to know you better. This innate sense of hospitality makes this city a natural hub for exciting international festivals that take place one after the other at a feverish pace.',
  },
  {
    id: 'wqwasq',
    title: 'Riga',
    price: 3500000,
    rentPrice: 35000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Monumento_a_la_Libertad%2C_Riga%2C_Letonia%2C_2012-08-07%2C_DD_10.JPG/600px-Monumento_a_la_Libertad%2C_Riga%2C_Letonia%2C_2012-08-07%2C_DD_10.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/0/03/House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Opera_Nacional%2C_Riga%2C_Letonia%2C_2012-08-07%2C_DD_04.JPG/2880px-Opera_Nacional%2C_Riga%2C_Letonia%2C_2012-08-07%2C_DD_04.JPG',
    ],
    sellerId: 'latvia',
    reviews: [],
    bio:
      'The capital city of Riga is well known for its Art Nouveau architecture. Its old town is filled with such buildings, and has been designated as a UNESCO World Heritage Site for its architecture, much of which dates back to the late 1800s and early 1900s. The most popular sport is ice hockey.',
  },
  {
    id: 'sdfghj',
    title: 'Cape Town',
    price: 3200000,
    rentPrice: 32000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Port_of_Cape_Town.jpg/2880px-Port_of_Cape_Town.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Strand_Western_Cape_and_Golf_Club.jpg/2880px-Strand_Western_Cape_and_Golf_Club.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Clifton_Beachs.jpg/2880px-Clifton_Beachs.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/dc/Table_Mountain_DanieVDM.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ayuntamiento%2C_Ciudad_del_Cabo%2C_Sudáfrica%2C_2018-07-19%2C_DD_08.jpg/2880px-Ayuntamiento%2C_Ciudad_del_Cabo%2C_Sudáfrica%2C_2018-07-19%2C_DD_08.jpg',
    ],
    sellerId: 'safrica',
    reviews: ['999'],
    bio:
      "The city is known for its harbour, for its natural setting in the Cape Floristic Region, and for landmarks such as Table Mountain and Cape Point. Cape Town is home to 64% of the Western Cape's population.",
  },
  {
    id: 'cvbn',
    title: 'Belgrade',
    price: 3000000,
    rentPrice: 300000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Avala_Tower.jpg/480px-Avala_Tower.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Дом_Народне_Скупштине_Србије.jpg/2880px-Дом_Народне_Скупштине_Србије.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Novi_Dvor_%281%29.JPG/2560px-Novi_Dvor_%281%29.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ušće.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Belgrad_%28Zemun%29_-_Kula_Sibinjanin_Janka.jpg/1024px-Belgrad_%28Zemun%29_-_Kula_Sibinjanin_Janka.jpg',
    ],
    sellerId: 'serbia',
    reviews: ['3456'],
    bio:
      "Outspoken, adventurous, proud and audacious: Belgrade ('White City') is by no means a 'pretty' capital, but its gritty exuberance makes it one of Europe's most happening cities. While it hurtles towards a brighter future, its chaotic past unfolds before your eyes: socialist blocks are squeezed between art nouveau masterpieces, and remnants of the Habsburg legacy contrast with Ottoman relics and socialist modernist monoliths. This is where the Sava and Danube Rivers kiss, an old-world culture that at once evokes time-capsuled communist-era Yugoslavia and new-world, EU-contending cradle of cool.",
  },
  {
    id: 'poikm',
    title: 'Paris',
    price: 3000000,
    rentPrice: 30000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1024px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bercy%2C_Paris_01.jpg/2560px-Bercy%2C_Paris_01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Notre_Dame_de_Paris_2013-07-24.jpg/1280px-Notre_Dame_de_Paris_2013-07-24.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Louvre_2007_02_24_c.jpg/2880px-Louvre_2007_02_24_c.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/ADRI_arc_de_triomphe.jpg/2560px-ADRI_arc_de_triomphe.jpg',
    ],
    sellerId: 'france',
    reviews: ['777'],
    bio:
      "Paris' monument-lined boulevards, museums, classical bistros and boutiques are enhanced by a new wave of multimedia galleries, creative wine bars, design shops and tech start-ups.",
  },
  {
    id: 'jerus',
    title: 'Jerusalem',
    price: 2800000,
    rentPrice: 280000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/82/Mar-elias22.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/PS-Amman_6501.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Old_city_walls_and_mamilla_ave._at_night_-_as_seen_from_%22Rooftop%22_restauran_-_Jerusalem%2C_Israel.jpg/1024px-Old_city_walls_and_mamilla_ave._at_night_-_as_seen_from_%22Rooftop%22_restauran_-_Jerusalem%2C_Israel.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg/2560px-Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Westernwall2.jpg/2560px-Westernwall2.jpg',
    ],
    sellerId: 'israel',
    reviews: [],
    bio:
      'Jerusalem is totally unique – there is no other place like it. A city of tradition, religion, and history, but also, increasingly, of modern culture and heritage, it is a city with so much to offer that you could spend years here and still not see everything.',
  },
];

const initialSellers = [
  {
    id: 'canada',
    name: 'Justin Trudeau',
    rating: '5 stars',
  },
  {
    id: 'latvia',
    name: 'Egils Levits',
    rating: '2 stars',
  },
  {
    id: 'safrica',
    name: 'Cyril Ramaphosa',
    rating: '2 stars',
  },
  {
    id: 'serbia',
    name: 'Aleksandar Vučić',
    rating: '2 stars',
  },
  {
    id: 'france',
    name: 'Emmanuel Macron',
    rating: '4 stars',
  },
  {
    id: 'israel',
    name: 'Reuven Rivlin',
    rating: '1 star',
  },
];

const initialReviews = [
  {
    id: '450',
    content: 'Great',
    reviewer: 'Jack',
  },
  {
    id: '10987',
    content: 'Bad',
    reviewer: 'Nima',
  },
  {
    id: '999',
    content: 'AMAZING',
    reviewer: 'Jack',
  },
  {
    id: '3456',
    content: 'SO BAD',
    reviewer: 'Nima',
  },
  {
    id: '777',
    content: 'YES',
    reviewer: 'Nima',
  },
];

module.exports = { initialItems, initialSellers, initialReviews };
