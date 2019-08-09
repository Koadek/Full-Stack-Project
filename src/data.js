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
    rentPrice: 30000,
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
    rentPrice: 28000,
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
  {
    id: 'king',
    title: 'Hong Kong',
    price: 2600000,
    rentPrice: 26000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hong_Kong_at_night.jpg/2880px-Hong_Kong_at_night.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/HK_Chater_Road_LegCo_view.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kwai_Tsing_Container_Terminals.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/0c/HK_Tung_Chung_Line_Train.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/55/Hong_kong_bruce_lee_statue.jpg',
    ],
    sellerId: 'china',
    reviews: [],
    bio:
      'Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive.',
  },
  {
    id: 'bjkn',
    title: 'Beijing',
    price: 2600000,
    rentPrice: 26000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/11_Temple_of_Heaven.jpg/2560px-11_Temple_of_Heaven.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Beijing_CBD_Skyline_%2820190104160952%29.jpg/600px-Beijing_CBD_Skyline_%2820190104160952%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Great_Wall_of_China_-_Badaling.jpg/1024px-The_Great_Wall_of_China_-_Badaling.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/09/National_Grand_Theatre.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/Beijing_national_stadium.jpg',
    ],
    sellerId: 'china',
    reviews: [],
    bio:
      'Constantly reimagining itself as it races towards the future, yet inextricably linked to its glorious, notorious past, Běijīng is as compelling as it is complex.',
  },
  {
    id: 'harry',
    title: 'London',
    price: 2400000,
    rentPrice: 24000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/2560px-London-Eye-2009.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Cityoflondon2019june.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/2880px-Tower_Bridge_London_Feb_2006.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg/480px-Trafalgar_Square%2C_London_2_-_Jun_2009.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/800px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg',
    ],
    sellerId: 'england',
    reviews: [],
    bio:
      "It's little wonder London is one of the world's top tourist destinations, attracting upward of 15 million visitors each year. Britain's capital city is a vibrant arts and entertainment center (its theaters are always busy), and 50 years after the Beatles, the country's music scene still rocks. London also offers one of the planet's greatest concentrations of cultural attractions. From royal palaces to the people's parliament, from museums and churches to riding a giant Ferris wheel for breathtaking views, you could spend endless days exploring London's sites without ever running out of unique things to see and do. An added bonus is that many of the most popular places to visit are free.",
  },
  {
    id: 'wall',
    title: 'New York',
    price: 2200000,
    rentPrice: 22000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Unisphere-2_%2827835155267%29.jpg/600px-Unisphere-2_%2827835155267%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/ChryslerBuildingMidtownManhattanNewYorkCity.jpg/600px-ChryslerBuildingMidtownManhattanNewYorkCity.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/2560px-New_york_times_square-terabass.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_Postdlf.jpg/1920px-Brooklyn_Bridge_Postdlf.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Brooklyn_Bridge%2C_Downtown_Manhattan%2C_and_One_World_Trade_Center%2C_blue_hour_%2820222411585%29.jpg/2560px-Brooklyn_Bridge%2C_Downtown_Manhattan%2C_and_One_World_Trade_Center%2C_blue_hour_%2820222411585%29.jpg',
    ],
    sellerId: 'usa',
    reviews: [],
    bio:
      "New York City is one of the most popular tourist destinations in the world, and with good reason. NYC is the mecca of business in the United States, and as a melting pot of American culture, there is something for every style, taste and budget in New York City. With so much to see and do in NYC, it's important for NYC tourists to do their research ahead of time before their vacation in New York City. NYC has something for every style, taste and budget, and with so many hidden gems around every corner, every tourist planning travel to NYC could use some inside information when it comes to New York City and Manhattan.",
  },
  {
    id: 'death',
    title: 'Sydney',
    price: 22000000,
    rentPrice: 22000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sydney_skyline_from_the_north_August_2016_%2829009142591%29.jpg/2880px-Sydney_skyline_from_the_north_August_2016_%2829009142591%29.jpg',
    ],
    sellerId: 'australia',
    reviews: [],
    bio:
      'Enjoy Sydney’s natural beauty, from unspoilt beaches to public gardens and, of course, the sparkling harbour, before discovering its thriving restaurants, markets and ancient culture. Top it off with a trip to the Blue Mountains, a popular excursion among locals.',
  },
  {
    id: 'vanbc',
    title: 'Vancouver',
    price: 2000000,
    rentPrice: 20000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lions_Gate_bridge.JPG/440px-Lions_Gate_bridge.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Yaletown_Condominium_2018.jpg/400px-Yaletown_Condominium_2018.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Millennium_Gate%2C_Vancouver%27s_Chinatown_National_Historic_Site_of_Canada%2C_WLM2012.jpg/2560px-Millennium_Gate%2C_Vancouver%27s_Chinatown_National_Historic_Site_of_Canada%2C_WLM2012.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vancouverdowntown2019.jpg/500px-Vancouverdowntown2019.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Totem_RMBC_1.jpg/1280px-Totem_RMBC_1.jpg',
    ],
    sellerId: 'canada',
    reviews: [],
    bio:
      'With its mountain backdrop and urban beaches, Vancouver has the rightly earned reputation of being one of the most beautiful cities in the world. Downtown Vancouver is superbly situated on a peninsula in the Strait of Georgia, bounded to the south by the delta of the Fraser River and to the north by a deep fiord reaching far inland (Burrard Inlet). Also to the north, gleam the often snow-covered ranges of the Coast Mountains. With its extensive parks and relatively equable climate keeping temperatures mild throughout the year, Vancouver is a paradise for leisure activities. But it also boasts a busy cultural life, and the modern Downtown is easily explored on foot. The scenic city was showcased to the world when it hosted the 2010 Winter Olympics, in conjunction with nearby Whistler.',
  },
  {
    id: 'kngfu',
    title: 'Shangai',
    price: 1800000,
    rentPrice: 18000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pond_in_Yuyuan_Garden%2C_Shanghai_Old_City.jpg/440px-Pond_in_Yuyuan_Garden%2C_Shanghai_Old_City.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/2880px-Pudong_Shanghai_November_2017_panorama.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Expo_2010_China_Pavilion_%28Nighttime%29_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nanjing_Road.jpg/600px-Nanjing_Road.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Crowded_Bund_on_summer_evening.jpg/2560px-Crowded_Bund_on_summer_evening.jpg',
    ],
    sellerId: 'china',
    reviews: [],
    bio:
      'Shànghǎi: few cities in the world evoke so much history, excess, glamour, mystique and exotic promise in name alone.',
  },
  {
    id: 'ceasar',
    title: 'Rome',
    price: 1800000,
    rentPrice: 18000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/2560px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/2880px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Castel_Sant%27Angelo_%28_Mausoleo_di_Andriano%29.jpg/2560px-Castel_Sant%27Angelo_%28_Mausoleo_di_Andriano%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sant_Angelo_bridge.jpg/2560px-Sant_Angelo_bridge.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Panorama_of_Trevi_fountain_2015.jpg/2560px-Panorama_of_Trevi_fountain_2015.jpg',
    ],
    sellerId: 'italy',
    reviews: [],
    bio:
      'A heady mix of haunting ruins, awe-inspiring art and vibrant street life, Italy’s hot-blooded capital is one of the world’s most romantic and charismatic cities.',
  },
  {
    id: 'maple',
    title: 'Toronto',
    price: 1600000,
    rentPrice: 16000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg/2880px-Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Toronto_August_2017.jpg/550px-Toronto_August_2017.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/City_Hall%2C_Toronto%2C_Ontario.jpg/2560px-City_Hall%2C_Toronto%2C_Ontario.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Exterior_of_Casa_Loma%2C_June_2012.jpg/480px-Exterior_of_Casa_Loma%2C_June_2012.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e2/Prince_Edward_Viaduct.jpg',
    ],
    sellerId: 'canada',
    reviews: [],
    bio:
      "Toronto, the capital of Ontario, is the largest city in Canada and also one of the most diverse. It's home to a dynamic mix of tourist attractions, from museums and galleries to the world famous CN Tower and, just offshore, Toronto Islands. And just a short drive away is Niagara Falls.Visitors will find no shortage of things to do, from the vibrant Entertainment District, featuring the latest musicals and fine dining, to the historic Distillery District, home to unique shops and restaurants with al fresco dining, all set in incredibly restored buildings.The city center is relatively easy to navigate, with many of the top attractions within walking distance of each other and a subway system to cover longer distances. If you are visiting Toronto in winter, head indoors to explore the extensive network of underground walkways that connect shopping, entertainment, and attractions. In summer, wander along the beautiful waterfront and enjoy the beaches and parks.",
  },
  {
    id: 'prus',
    title: 'Kyiv',
    price: 1400000,
    rentPrice: 14000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Лавра.jpg/440px-Лавра.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Universidad_Roja_de_Kiev.jpg/2560px-Universidad_Roja_de_Kiev.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Будинок_із_химерами_4.jpg/2560px-Будинок_із_химерами_4.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/MaidanNezalezhnosti2.jpg',
    ],
    sellerId: 'ukraine',
    reviews: [],
    bio:
      "In the beginning there was Kyiv. Long before Ukraine and Russia existed, the city's inhabitants were already striding up and down the green hills, idling hot afternoons away on the Dnipro River and promenading along Khreshchatyk – then a stream, now the main avenue. From here, East Slavic civilisation spread all the way to Alaska.",
  },
  {
    id: 'byzan',
    title: 'Istanbul',
    price: 1400000,
    rentPrice: 14000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Büyük_Mecidiye_Camii_-_Ortaköy_Mosque.jpg/1024px-Büyük_Mecidiye_Camii_-_Ortaköy_Mosque.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Karaköy.jpg/2560px-Karaköy.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Istanbul2010.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/Maidens_Tower.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Istanbul_Istiklal_cad._tram_-_Galatasaray_Lisesi.JPGs',
    ],
    sellerId: 'turkey',
    reviews: [],
    bio:
      "This magical meeting place of East and West has more top-drawer attractions than it has minarets (and that's a lot).",
  },
  {
    id: 'thanos',
    title: 'Athens',
    price: 1200000,
    rentPrice: 12000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg/440px-The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Athens_Academy_of_the_Arts%2C_Athens%2C_Greece.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Monastiraki_square.jpg/2560px-Monastiraki_square.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Athens%2C_Greece_-_panoramio_%28202%29.jpg/500px-Athens%2C_Greece_-_panoramio_%28202%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Aerial_view_of_Olympic_complex_in_Athens_2004_DSC06793.jpg',
    ],
    sellerId: 'greece',
    reviews: [],
    bio:
      'Athens is the historical capital of Europe, with a long history, dating from the first settlement in the Neolithic age. In the 5th Century BC (the “Golden Age of Pericles”) – the culmination of Athens’ long, fascinating history – the city’s values and civilization acquired a universal significance. Over the years, a multitude of conquerors occupied Athens, and erected unique, splendid monuments - a rare historical palimpsest. In 1834, it became the capital of the modern Greek state and in two centuries since it has become an attractive modern metropolis with unrivalled charm. A large part of the town’s historic centre has been converted into a 3-kilometre pedestrian zone (the largest in Europe), leading to the major archaeological sites (“archaeological park”), reconstructing – to a large degree – the ancient landscape.',
  },
  {
    id: 'spagh',
    title: 'Barcelona',
    price: 1000000,
    rentPrice: 10000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_Sagrada_Fam%C3%ADlia3.jpg/2560px-Exterior_Sagrada_Fam%C3%ADlia3.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/46/Poblenou-Contrasts.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Camp_Nou_aerial_%28cropped%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Barcelona_-_Castell_dels_Tres_Dragons_%282%29.JPG/2560px-Barcelona_-_Castell_dels_Tres_Dragons_%282%29.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Palau_Nacional%2C_Barcelona.jpg/520px-Palau_Nacional%2C_Barcelona.jpg',
    ],
    sellerId: 'spain',
    reviews: [],
    bio:
      'Barcelona is an enchanting seaside city with boundless culture, fabled architecture and a world-class drinking and dining scene.',
  },
  {
    id: 'alig',
    title: 'Tokyo',
    price: 1000000,
    rentPrice: 10000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Rainbow_colored_Rainbow_Bridge_at_night.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Diet_of_Japan_Kokkai_2009.jpg/2560px-Diet_of_Japan_Kokkai_2009.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/2018_Shibuya_Crossing.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_Ⅲ.jpg/1024px-Tokyo_Skytree_2014_Ⅲ.jpg',
    ],
    sellerId: 'japan',
    reviews: [],
    bio:
      'Tokyo is famous for Anime, electronics, manga, and video games. Akihabara is the epicenter if it all. It becomes a jungle of electric lights and colors at night, providing a sensory overload for visitors. Getting lost, window shopping, and photography are top activities here.',
  },
  {
    id: 'tapet',
    title: 'Taipei',
    price: 600000,
    rentPrice: 6000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/The_Grand_Hotel_Taipei_%28Main_Building%29.JPG/480px-The_Grand_Hotel_Taipei_%28Main_Building%29.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Taipei_101_and_Taipei_Nan_Shan_Plaza.jpg/480px-Taipei_101_and_Taipei_Nan_Shan_Plaza.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Taipei%2C_Taiwan_CBD_Skyline.jpg/560px-Taipei%2C_Taiwan_CBD_Skyline.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/NationalPalace_MuseumFrontView.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Chiang_Kai-shek_memorial_amk.jpg/2560px-Chiang_Kai-shek_memorial_amk.jpg',
    ],
    sellerId: 'taiwan',
    reviews: [],
    bio:
      'Taipei is a friendly city whose allure lies in its blend of Chinese culture with a curious fusion of Japanese, Southeast Asian and American influences.',
  },
  {
    id: 'gdny',
    title: 'Gdynia',
    price: 600000,
    rentPrice: 6000,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Gdynia_%28DerHexer%29_2010-07-16_193.jpg/1024px-Gdynia_%28DerHexer%29_2010-07-16_193.jpg',
    ],
    sellerId: 'poland',
    bio:
      "Gdynia is a relatively new city, located north of Gdańsk and Sopot. Until 1926 it was a small and quiet fisher's town. But when after the first world war the map of Europe was reshaped, the area around Gdynia became the only gateway to the sea for the reborn state of Poland. Therefore many efforts were made to develop the port of Gdynia, as a result of which the town grew within a few decades to a large and vibrant city, with a surprisingly vivid nightlife. The main attractions in Gdynia are the museum ships Dar Pomorza and Błyskawica, which are located along the pier, the Gdynia Aquarium and the recently built magnificent Sea Towers.",
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
  {
    id: 'china',
    name: 'Carrie Lam',
    rating: '12 stars',
  },
  {
    id: 'england',
    name: 'Elizabeth II',
    rating: '10 stars',
  },
  {
    id: 'usa',
    name: 'Donald Trump',
    rating: '50 stars',
  },
  {
    id: 'australia',
    name: 'Scott Morrison',
    rating: '3 stars',
  },
  {
    id: 'italy',
    name: 'Giuseppe Conte',
    rating: '3 stars',
  },
  {
    id: 'ukraine',
    name: 'Volodymyr Groysman',
    rating: '2 stars',
  },
  {
    id: 'turkey',
    name: 'Recep Tayyip Erdoğan',
    rating: '4 stars',
  },
  {
    id: 'greece',
    name: 'Kyriakos Mitsotakis',
    rating: '3.5 stars',
  },
  {
    id: 'japan',
    name: 'Shinzō Abe',
    rating: '5 stars',
  },
  {
    id: 'taiwan',
    name: 'Su Tseng-chang',
    rating: '10 stars',
  },
  {
    id: 'poland',
    name: 'Mateusz Morawiecki',
    rating: '4 stars',
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
