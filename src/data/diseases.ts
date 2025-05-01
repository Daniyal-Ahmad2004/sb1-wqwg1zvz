import { Disease } from '../types';

export const diseases: Disease[] = [
  {
    id: 'blast',
    name: 'Rice Blast',
    description: 'Rice blast is one of the most destructive rice diseases worldwide. It is caused by the fungus Magnaporthe oryzae and can affect all above-ground parts of the rice plant.',
    symptoms: [
      'Diamond-shaped lesions with gray centers and brown borders on leaves',
      'Dark brown to black lesions on leaf collars, nodes, and panicles',
      'Withered and broken panicles',
      'Stunted growth in severely affected plants'
    ],
    treatment: [
      'Apply fungicides containing tricyclazole, propiconazole, or azoxystrobin',
      'Remove and destroy infected plant parts',
      'Ensure proper field drainage',
      'Balance nitrogen fertilizer application'
    ],
    prevention: [
      'Plant resistant rice varieties',
      'Practice crop rotation',
      'Maintain proper spacing between plants for good air circulation',
      'Avoid excessive nitrogen fertilization',
      'Clean tools and equipment between fields'
    ],
    severity: 'high',
    imageUrl: 'https://images.pexels.com/photos/3730936/pexels-photo-3730936.jpeg'
  },
  {
    id: 'brown-spot',
    name: 'Brown Spot',
    description: 'Brown spot disease is caused by the fungus Cochliobolus miyabeanus and typically affects rice plants growing in nutrient-deficient soils, particularly those lacking potassium.',
    symptoms: [
      'Oval or circular brown lesions with yellow halos on leaves',
      'Dark brown spots on grains',
      'Reduced grain quality and weight',
      'Premature leaf senescence'
    ],
    treatment: [
      'Apply fungicides containing mancozeb, propiconazole, or tebuconazole',
      'Correct soil nutrient deficiencies, especially potassium',
      'Remove and destroy infected plant debris'
    ],
    prevention: [
      'Use certified, disease-free seeds',
      'Maintain balanced soil fertility',
      'Treat seeds with hot water or fungicides before planting',
      'Practice proper crop rotation',
      'Avoid dense planting'
    ],
    severity: 'medium',
    imageUrl: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg'
  },
  {
    id: 'bacterial-blight',
    name: 'Bacterial Leaf Blight',
    description: 'Bacterial leaf blight is caused by Xanthomonas oryzae pv. oryzae and is one of the most serious diseases of rice, especially in irrigated and rainfed lowland areas.',
    symptoms: [
      'Water-soaked lesions that turn yellow-orange and eventually gray-white',
      'Lesions that follow leaf veins',
      'Wilting and drying of leaves',
      'Milky bacterial ooze when cut stems are pressed'
    ],
    treatment: [
      'No effective chemical control once infection occurs',
      'Drain the field temporarily',
      'Apply copper-based bactericides preventively',
      'Remove and destroy infected plants'
    ],
    prevention: [
      'Plant resistant varieties',
      'Use disease-free seeds',
      'Avoid excessive nitrogen fertilization',
      'Practice crop rotation',
      'Maintain clean field hygiene'
    ],
    severity: 'high',
    imageUrl: 'https://images.pexels.com/photos/1818135/pexels-photo-1818135.jpeg'
  },
  {
    id: 'sheath-blight',
    name: 'Sheath Blight',
    description: 'Sheath blight is caused by the fungus Rhizoctonia solani and affects rice plants in warm, humid environments with dense canopies.',
    symptoms: [
      'Oval or irregular greenish-gray lesions on leaf sheaths',
      'Lesions with gray centers and brown borders',
      'Infection progressing upward from lower to upper parts of the plant',
      'Formation of sclerotia (survival structures) on infected tissues'
    ],
    treatment: [
      'Apply fungicides containing azoxystrobin, validamycin, or hexaconazole',
      'Reduce field humidity by avoiding excessive irrigation',
      'Remove infected plant parts'
    ],
    prevention: [
      'Optimize plant spacing to reduce humidity in the canopy',
      'Moderate nitrogen application',
      'Plant less susceptible varieties',
      'Practice crop rotation',
      'Remove and destroy crop residues after harvest'
    ],
    severity: 'medium',
    imageUrl: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg'
  },
  {
    id: 'healthy',
    name: 'Healthy Rice Plant',
    description: 'This rice plant shows no signs of disease and appears to be growing normally with proper care and optimal environmental conditions.',
    symptoms: [
      'Vibrant green color throughout the plant',
      'Uniform growth and development',
      'No visible spots, lesions, or discoloration',
      'Robust and straight stems',
      'Well-formed panicles and grains (if in reproductive stage)'
    ],
    treatment: [
      'Continue regular monitoring for early disease detection',
      'Maintain current agricultural practices',
      'Follow recommended fertilization schedule'
    ],
    prevention: [
      'Regular crop monitoring',
      'Balanced nutrition',
      'Proper water management',
      'Integrated pest management',
      'Use of quality seeds and resistant varieties'
    ],
    severity: 'low',
    imageUrl: 'https://images.pexels.com/photos/130574/pexels-photo-130574.jpeg'
  }
];

export const getRandomDisease = (): Disease => {
  const randomIndex = Math.floor(Math.random() * diseases.length);
  return diseases[randomIndex];
};

export const getHealthyResult = (): Disease => {
  return diseases.find(disease => disease.id === 'healthy')!;
};

export const getDiseaseById = (id: string): Disease | undefined => {
  return diseases.find(disease => disease.id === id);
};