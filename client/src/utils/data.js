import logo from '../assets/logo.png';

export const navbarData = {
  logo,
  homeLinks: [
    { title: 'Vite', url: 'https://vitejs.dev' },
    { title: 'Vercel', url: 'https://vercel.com' },
    { title: 'Render', url: 'https://render.com' },
  ],
  navLinks: [
    { title: 'Home', url: '/' },
    { title: 'Gallery', url: '/gallery' },
    { title: 'Create', url: '/create' },
  ],
};

const navigationLinks = {
  gallery: { link: 'gallery', title: 'Gallery', subtitle: 'Explore From DALL-E', path: '/gallery' },
  create: { link: 'create', title: 'Create', subtitle: 'Make Your Own AI Image', path: '/create', subtitleOffset: 100 },
  back: { link: 'return', title: 'Back', subtitle: 'return', path: '/', subtitleOffset: 25 },
};

export const navigationPositions = {
  left: `left: 40px;`,
  leftMiddle: `left: calc(33.33% - 21px);`,
  right: `left: calc(100% - 116px);`,
  rightMiddle: `left: calc(66.66% + 21px);`,
};

export const navigationData = {
  '/': {
    gallery: { ...navigationLinks.gallery, position: navigationPositions.leftMiddle, center: true },
    create: { ...navigationLinks.create, position: navigationPositions.rightMiddle },
  },
  '/create': {
    create: { ...navigationLinks.create, position: navigationPositions.left, center: true, mobileTitle: true },
    back: { ...navigationLinks.back, position: navigationPositions.right, mobileTitle: false },
  },
  '/gallery': {
    gallery: { ...navigationLinks.gallery, position: navigationPositions.left, center: true, mobileTitle: true },
    back: { ...navigationLinks.back, position: navigationPositions.right, mobileTitle: false },
  },
};

export const surpriseMePrompts = [
  'an armchair in the shape of an avocado',
  'a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers',
  'teddy bears shopping for groceries in Japan, ukiyo-e',
  'an oil painting by Matisse of a humanoid robot playing chess',
  'panda mad scientist mixing sparkling chemicals, digital art',
  "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
  '3D render of a cute tropical fish in an aquarium on a dark blue background, digital art',
  'an astronaut lounging in a tropical resort in space, vaporwave',
  'an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background',
  'a stained glass window depicting a hamburger and french fries',
  'a pencil and watercolor drawing of a bright city in the future with flying cars',
  'a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art',
  'a fortune-telling shiba inu reading your fate in a giant hamburger, digital art',
  '"a sea otter with a pearl earring" by Johannes Vermeer',
  'an oil pastel drawing of an annoyed cat in a spaceship',
  'a painting of a fox in the style of Starry Night',
  'a bowl of soup that looks like a monster, knitted out of wool',
  'A plush toy robot sitting against a yellow wall',
  'A synthwave style sunset above the reflecting water of the sea, digital art',
  'Two futuristic towers with a skybridge covered in lush foliage, digital art',
  'A 3D render of a rainbow colored hot air balloon flying above a reflective lake',
  'A comic book cover of a superhero wearing headphones',
  'A centered explosion of colorful powder on a black background',
  'A photo of a Samoyed dog with its tongue out hugging a white Siamese cat',
  'A photo of a white fur monster standing in a purple room',
  "A photo of Michelangelo's sculpture of David wearing headphones djing",
  'A Samurai riding a Horse on Mars, lomography.',
  'A modern, sleek Cadillac drives along the Gardiner expressway with downtown Toronto in the background, with a lens flare, 50mm photography',
  'A realistic photograph of a young woman with blue eyes and blonde hair',
  'A man standing in front of a stargate to another dimension',
  'Spongebob Squarepants in the Blair Witch Project',
  'A velociraptor working at a hotdog stand, lomography',
  'A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens',
  'A BBQ that is alive, in the style of a Pixar animated movie',
  'A futuristic cyborg dance club, neon lights',
  'The long-lost Star Wars 1990 Japanese Anime',
  'A hamburger in the shape of a Rubik’s cube, professional food photography',
  'A Synthwave Hedgehog, Blade Runner Cyberpunk',
  'An astronaut encountering an alien life form on a distant planet, photography',
  'A Dinosaur exploring Cape Town, photography',
  'A Man falling in Love with his Computer, digital art',
  'A photograph of a cyborg exploring Tokyo at night, lomography',
  'Dracula walking down the street of New York City in the 1920s, black and white photography',
  'Synthwave aeroplane',
  'A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm',
  'A Space Shuttle flying above Cape Town, digital art',
];
