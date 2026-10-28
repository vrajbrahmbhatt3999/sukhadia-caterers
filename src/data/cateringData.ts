import type { ServiceItem, CuisineCategory, GalleryItem, ApproachStep, WhyChoosePillar } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-catering',
    title: 'Wedding Catering',
    shortDescription: 'Grand royal wedding feasts curated with timeless culinary tradition and gracious white-glove hospitality.',
    fullDescription: 'From intimate Sangeet soirees and sacred Pithi rituals to majestic wedding receptions accommodating thousands of guests, our wedding catering is orchestrating pure culinary magic. Every counter is styled to harmonize with your wedding aesthetics, featuring live interactive stations and authentic heritage flavors.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80'
    ],
    guestCapacity: '150 – 5,000+ Guests',
    idealFor: ['Destination Weddings', 'Sangeet & Mehendi Evenings', 'Grand Receptions', 'Traditional Pheras Lunch'],
    keyOfferings: [
      'Bespoke multi-course wedding thali and buffet designs',
      'Themed live theatrical culinary counters and street carts',
      'Trained uniformed hospitality stewards and captain service',
      'Coordinated cutlery, brassware, and handcrafted dinnerware styling',
      'Dedicated host manager for seamless ceremonial flow'
    ],
    menuHighlights: [
      'Shahi Kesar Pista Basundi & Warm Mohanthal',
      'Artisanal Undhiyu with Puri & Kadhi',
      'Live Chaat Bazaar with Handcrafted Crisps',
      'Smoked Paneer Tikka Live Skewers'
    ],
    isProposed: true
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events & Galas',
    shortDescription: 'Refined banqueting, executive lunches, and corporate galas executed with punctual precision.',
    fullDescription: 'We cater to leading business enterprises, annual leadership summits, VIP delegation lunches, and celebratory corporate galas. Our team understands business timelines, dietary requirements, and high-standard executive service protocols.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80'
    ],
    guestCapacity: '50 – 2,000+ Attendees',
    idealFor: ['Annual General Meetings', 'Leadership Summits & Conferences', 'Product Launches', 'Award Banquets'],
    keyOfferings: [
      'Express bento-style business lunches and gourmet grazing spreads',
      'Continuous premium beverage & artisan tea/coffee lounges',
      'Dietary labeling (Jain, Vegan, Gluten-Sensitive, Nut-Free)',
      'Subtle, non-intrusive floor management'
    ],
    menuHighlights: [
      'Gourmet Paneer Lababdar & Multigrain Rotis',
      'Steamed Dim Sum & Wok Station',
      'Fresh Berry Infused Mocktails & Artisanal Elixirs',
      'Single-Origin Filter Coffee & Cutting Chai Bar'
    ],
    isProposed: true
  },
  {
    id: 'social-celebrations',
    title: 'Social Celebrations',
    shortDescription: 'Joyous milestone birthdays, anniversary banquets, and auspicious family gatherings.',
    fullDescription: 'Every milestone in life deserves warmth, laughter, and heartwarming food. From silver jubilee anniversaries to baby showers (Shrimant) and family get-togethers, we design celebratory spreads that feel deeply personal and lavish.',
    heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80'
    ],
    guestCapacity: '80 – 800+ Guests',
    idealFor: ['Milestone Anniversaries', 'Shrimant & Baby Showers', 'Thread Ceremonies (Upanayan)', 'Retirement Soirees'],
    keyOfferings: [
      'Interactive food stations tailored to multi-generational guests',
      'Nostalgic regional delicacies paired with modern small bites',
      'Custom dessert bars featuring seasonal fruits and traditional sweets',
      'Flexible indoor or open-air lawn catering arrangements'
    ],
    menuHighlights: [
      'Traditional Gujarati Dal Dhokli & Handvo Live',
      'Piping Hot Malpua with Rabdi Live Counter',
      'Crispy Stuffed Dosa Bar',
      'Assorted Mini Tarts & Gulab Jamun Cheesecake'
    ],
    isProposed: true
  },
  {
    id: 'private-gatherings',
    title: 'Private Gatherings',
    shortDescription: 'Intimate dinner parties, terrace soirees, and curated villa feasts with dedicated culinary attention.',
    fullDescription: 'When hosting close family or discerning friends at your residence, bungalow lawn, or private clubhouse, our private dining service provides a Michelin-inspired personal chef experience with bespoke tableware and personalized hospitality.',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80'
    ],
    guestCapacity: '25 – 120 Guests',
    idealFor: ['Home Soirees', 'Intimate Engagement Dinners', 'Family Festive Brunches', 'Private Villa Gatherings'],
    keyOfferings: [
      'Custom pre-tasting sessions to fine-tune spices and presentation',
      'Dedicated executive chef and intimate floor staff',
      'Complete post-event cleanup and pristine kitchen handover',
      'Custom printed menu cards with personalized greetings'
    ],
    menuHighlights: [
      'Truffle Infused Paneer Tikka',
      'Slow-cooked Dal Makhani with Garlic Naan',
      'Signature Angoori Rasmalai in Clay Kulhads',
      'Bespoke Fruit Caviar & Mojito Bar'
    ],
    isProposed: true
  },
  {
    id: 'special-occasions',
    title: 'Special Occasions & Festivals',
    shortDescription: 'Auspicious festival feasts, Diwali banquets, and spiritual ceremonies designed with ritual purity.',
    fullDescription: 'We honor religious customs and cultural sanctity. Whether preparing pure Sattvic feasts, strict Jain banquets during Paryushan, or grand Diwali family gatherings, our culinary team maintains absolute ritual hygiene, dedicated vessels, and uncompromising quality ingredients.',
    heroImage: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80'
    ],
    guestCapacity: '50 – 1,500+ Guests',
    idealFor: ['Paryushan & Jain Festivities', 'Diwali Milan Gatherings', 'Navratri Celebrations', 'Spiritual Katha Banquets'],
    keyOfferings: [
      'Strict Jain cuisine standards without root vegetables or compromise on flavor',
      'Pure Ghee preparations for traditional Indian sweets',
      'Clean segregated kitchen operations ensuring ritual reverence',
      'Traditional brass thali presentation and gracious Gujarati hospitality'
    ],
    menuHighlights: [
      'Authentic Jain Undhiyu with Rajgira Rotis',
      'Pure Saffron Badam Halwa',
      'Khandvi with Fresh Coconut & Mustard Tempering',
      'Fresh Seasonal Mango Ras (Aamras in season)'
    ],
    isProposed: true
  }
];

export const CUISINES_DATA: CuisineCategory[] = [
  {
    id: 'gujarati',
    name: 'Authentic Gujarati Heritage',
    subtitle: 'The Heart of Gracious Hospitality',
    description: 'A celebration of balance — sweet, spicy, sour, and savory in perfect harmony. Handcrafted sweets in pure cow ghee, slow-cooked winter Undhiyu, fragrant Surati Dal, and delicate Farsan crafted using ancestral culinary techniques.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    accentNote: 'Available in Traditional & Strict Jain Variations',
    signatureDishes: [
      'Surati Undhiyu with Methi Muthiya',
      'Kesar Pista Basundi & Rich Mohanthal',
      'Khaman, Khandvi & Lilva Kachori Platter',
      'Sweet & Tangy Gujarati Dal with Ghee Rice'
    ],
    presentationStyle: 'Heritage Kansa (Bronze) or Polished Brass Thalis with gracious table-side service.'
  },
  {
    id: 'north-indian',
    name: 'North Indian & Awadhi Royalties',
    subtitle: 'Aromatic Gravies & Clay Oven Breads',
    description: 'Velvety makhani sauces, chargrilled paneer infused with royal spices, aromatic Awadhi biryanis layered with saffron, and warm artisanal breads straight from the live tandoor.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80',
    signatureDishes: [
      'Paneer Tikka Angara with Mint Chutney',
      'Slow-Simmered Dal Bukhara Style',
      'Subz Dum Biryani with Burani Raita',
      'Amritsari Kulcha & Stuffed Parathas Live'
    ],
    presentationStyle: 'Copper handis, hammered brass bowls, and sizzling live grill stations.'
  },
  {
    id: 'south-indian',
    name: 'South Indian Coastal Delights',
    subtitle: 'Fragrant Curry Leaves & Stone-Ground Chutneys',
    description: 'Crisp paper dosas served straight from expansive hot griddles, fluffy mallige idlis, tangy piping rasam, and rich coconut-infused curries that transport guests to the temple kitchens of the South.',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80',
    signatureDishes: [
      'Live Podi Masala & Cheese Dosa Counter',
      'Traditional Steamed Idli & Medu Vada',
      'Malabar Vegetable Stew with Appams',
      'Seven Chutney Tasting Bar with Gunpowder'
    ],
    presentationStyle: 'Fresh banana-leaf lined platters and aromatic filter coffee dispensers.'
  },
  {
    id: 'live-stations',
    name: 'Theatrical Live Food Stations',
    subtitle: 'Culinary Artistry in Motion',
    description: 'Transforming mealtime into an engaging spectacle. Guests interact directly with master chefs crafting bespoke dishes right before their eyes.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    accentNote: 'Most Popular for Weddings and Receptions',
    signatureDishes: [
      'Old Delhi & Ahmedabad Fusion Chaat Counter',
      'Live Stone-Baked Artisan Pizza Hearth',
      'Handmade Mexican Quesadilla & Taco Cart',
      'Liquid Nitrogen Smoked Ice Cream Experience'
    ],
    presentationStyle: 'Themed custom carts with ambient spotlighting and theatrical smoke.'
  },
  {
    id: 'continental',
    name: 'Continental & Mediterranean',
    subtitle: 'Sophisticated Global Flavors',
    description: 'Al dente handmade pastas tossed in herb-infused olive oils, creamy risottos, grilled Mediterranean vegetables, and rustic mezze platters with fresh pita and hummus.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
    signatureDishes: [
      'Truffle & Wild Mushroom Risotto Live',
      'Hand-Tossed Penne in Roasted Garlic Pomodoro',
      'Mediterranean Mezze with Falafel & Tzatziki',
      'Baked Vegetable Florentine with Garlic Toast'
    ],
    presentationStyle: 'White porcelain platters, olive wood boards, and fresh basil garnishes.'
  },
  {
    id: 'chinese',
    name: 'Pan-Asian & Oriental Wok',
    subtitle: 'Vibrant Aromas & Wok Charred Flavors',
    description: 'Steaming bamboo dim sum baskets, zesty Sichuan gravies, wok-tossed noodles, and crispy spring rolls prepared with fresh Asian greens and homemade dips.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
    signatureDishes: [
      'Crystal Vegetable & Truffle Dim Sums',
      'Hakka Chilli Paneer & Crispy Lotus Stem',
      'Wok Charred Shanghai Noodles',
      'Burnt Garlic & Spring Onion Fried Rice'
    ],
    presentationStyle: 'Natural bamboo steamers, black slate plates, and chopstick caddies.'
  },
  {
    id: 'desserts',
    name: 'Artisanal Confections & Mithai',
    subtitle: 'A Regal Finale to Every Celebration',
    description: 'From slow-churned seasonal fruit ice creams and golden jalebis made live to fusion confections that marry Indian sweetness with European patisserie finesse.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1000&q=80',
    signatureDishes: [
      'Live Jalebi Counter with Warm Creamy Rabdi',
      'Fresh Alphonso Mango Souffle (Seasonal)',
      'Baked Gulab Jamun Tartlet',
      'Artisanal Paan & Mukhwas Bar'
    ],
    presentationStyle: 'Tiered glass displays, warm simmering brass pans, and edible gold leafing.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Majestic Royal Reception Banquet',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'Grand royal banquet setup with candlelit floral tables and bespoke bronze tableware.',
    aspectRatio: 'wide'
  },
  {
    id: 'g-2',
    title: 'Heritage Gujarati Thali Spread',
    category: 'Cuisines',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    description: 'Traditional Gujarati feast showcasing seasonal Undhiyu, fragrant Dal, and artisanal Farsan.',
    aspectRatio: 'square'
  },
  {
    id: 'g-3',
    title: 'Theatrical Chaat & Street Food Counter',
    category: 'Live Stations',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    description: 'Interactive chaat bazaar with handcrafted puris, tangy chutneys, and live assembly.',
    aspectRatio: 'tall'
  },
  {
    id: 'g-4',
    title: 'Golden Hour Lawn Wedding Dining',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Lush outdoor catering arrangement with white linens and warm champagne gold ambient lighting.',
    aspectRatio: 'wide'
  },
  {
    id: 'g-5',
    title: 'Clay Oven Tandoor & Grill Station',
    category: 'Live Stations',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
    description: 'Freshly skewered paneer tikkas and stuffed kulchas baked live over glowing coals.',
    aspectRatio: 'square'
  },
  {
    id: 'g-6',
    title: 'Artisanal Dessert & Mithai Pavilion',
    category: 'Decor & Presentation',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1200&q=80',
    description: 'Luxury dessert display featuring warm rabdi, live jalebis, and seasonal fruit delights.',
    aspectRatio: 'wide'
  },
  {
    id: 'g-7',
    title: 'Executive Corporate Gala Spread',
    category: 'Decor & Presentation',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    description: 'Clean, modern plating and buffet line with clear dietary indicators and executive flair.',
    aspectRatio: 'tall'
  },
  {
    id: 'g-8',
    title: 'South Indian Coastal Counter',
    category: 'Cuisines',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=900&q=80',
    description: 'Crisp hot dosas served with an array of seven fresh stone-ground chutneys.',
    aspectRatio: 'square'
  },
  {
    id: 'g-9',
    title: 'Intimate Family Feast Setup',
    category: 'Decor & Presentation',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    description: 'Private villa gathering with personalized menu cards and dedicated steward attention.',
    aspectRatio: 'wide'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Share Your Occasion',
    subtitle: 'The Initial Vision',
    description: 'Connect with our team to share your celebration date, venue preference, anticipated guest count, and the atmosphere you wish to create.'
  },
  {
    step: '02',
    title: 'Discuss Your Requirements',
    subtitle: 'Tailored Dialogue',
    description: 'We hold an in-depth consultation discussing family culinary traditions, regional preferences, dietary restrictions (such as Jain or Sattvic), and aesthetic themes.'
  },
  {
    step: '03',
    title: 'Curate Your Menu',
    subtitle: 'Culinary Composition',
    description: 'Our executive culinary team crafts a bespoke multi-course menu blueprint, pairing timeless heritage dishes with theatrical live counters.'
  },
  {
    step: '04',
    title: 'Plan The Experience',
    subtitle: 'Orchestrating Details',
    description: 'From buffet flow and counter decor to steward uniforms and dinnerware styling, every operational nuance is rigorously planned.'
  },
  {
    step: '05',
    title: 'Celebrate with Confidence',
    subtitle: 'Gracious Hospitality',
    description: 'On your celebratory day, our dedicated floor captains and culinary brigade handle every detail flawlessly so you can host with complete peace of mind.'
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    title: 'Thoughtful Event Planning',
    description: 'We do not simply cook; we engineer a seamless guest journey. From arrival beverages to late-night bites, the timing and flow of service are calibrated to your event schedule.',
    highlight: 'Seamless Timeline Coordination'
  },
  {
    title: 'Quality-Focused Preparation',
    description: 'Fresh seasonal produce, pure cow ghee, cold-pressed oils, and hand-selected whole spices. We strictly adhere to high standards of kitchen cleanliness and ingredient provenance.',
    highlight: 'Pure Ingredients & Clean Kitchens'
  },
  {
    title: 'Authentic Gujarati Hospitality',
    description: 'Warm, gracious, and attentive service inspired by the traditional ethos of "Atithi Devo Bhava". Our uniformed stewards ensure every guest feels personally honored.',
    highlight: 'Gracious Steward Etiquette'
  },
  {
    title: 'Customized Menu Consultations',
    description: 'Every event has unique nuances. Whether you need strict Jain catering, contemporary fusion counters, or traditional wedding lunch thalis, menus are crafted around your desires.',
    highlight: 'Bespoke Menu Composition'
  },
  {
    title: 'Attention to Presentation',
    description: 'Food is tasted first with the eyes. We curate harmonious counter styling, elegant bronze and brass vessels, fresh floral accents, and pristine display tables.',
    highlight: 'Curated Table Aesthetics'
  }
];
