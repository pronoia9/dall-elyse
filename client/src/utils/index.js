import FileSaver from 'file-saver';
import { artist, ideate, creative, learn1, learn2, learn3 } from '../assets';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export const navLinks = [
  { title: 'Vite', url: 'https://vitejs.dev' },
  { title: 'Vercel', url: 'https://vercel.com' },
  { title: 'Render', url: 'https://render.com' },
];

export const aboutCols = [
  {
    title: 'Artist Tooling',
    description:
      'We’re building market-leading features that will give you greater control over your generations.',
    image: artist,
    id: ['vqkelr', 'zwhzqp', 'ifjbmw', 'hmevve'],
  },
  {
    title: 'Rapidly Ideate',
    description: 'Create unique production-ready assets from pre-trained AI models or train your own.',
    image: ideate,
    id: ['xhfnjy', 'kvpuuw', 'bzrwgl', 'xnmkig'],
  },
  {
    title: 'Creative Studio',
    description:
      'We’re building an entire generative content production platform, visual assets are just the start.',
    image: creative,
    id: ['idwbik', 'edoidc', 'kjrbjn', 'zancjk'],
  },
];

export const learnMore = [
  {
    title: 'Use an Existing Model',
    description: 'Use a general or fine-tuned model to generate all sorts of production-ready art assets.',
    id: ['tqbtwq', 'xmewoc', 'pkkonv', 'wwscio', 'icsnit', 'hujvwo', 'ckxiqj', 'iffjce'],
    image: learn1,
  },
  {
    title: 'Train Your Own AI Models',
    description:
      "In just a few clicks, you can train your own AI model and generate thousands of variations and deviations from your training data. Iterate to your heart's content.",
    id: ['kuozju', 'qnuneh', 'oajiol', 'smylyn', 'gpeteu', 'qakwbg', 'kuvfqz', 'xlxnrj'],
    image: learn2,
  },
  {
    title: 'Discover Unlimited Potential',
    description:
      'Create a universe with infinite possibilities in minutes. Rapidly iterate with ease while keeping a consistent look or style. This is a real Game Changer.',
    id: ['kuozju', 'qnuneh', 'oajiol', 'smylyn', 'gpeteu', 'qakwbg', 'kuvfqz', 'xlxnrj'],
    // id: ['hdalft', 'zbugrd', 'ehezic', 'joxxwz', 'zjehaq', 'dmldij', 'ukegzg', 'anaaee'],
    image: learn3,
  },
];

export const footerLinks = {
  company: [
    { title: 'About', url: 'https://openai.com/about' },
    { title: 'Blog', url: 'https://openai.com/blog' },
    { title: 'Careers', url: 'https://openai.com/careers' },
    { title: 'Charter', url: 'https://openai.com/charter' },
    { title: 'Security', url: 'https://openai.com/security' },
  ],
  products: [
    { title: 'Overview', url: 'https://openai.com/product' },
    { title: 'GPT-4', url: 'https://openai.com/product/gpt-4' },
    { title: 'DALL·E 2', url: 'https://openai.com/product/dall-e-2' },
    { title: 'Customer stories', url: 'https://openai.com/customer-stories' },
    { title: 'Safety standards', url: 'https://openai.com/safety-standards' },
    { title: 'Pricing', url: 'https://openai.com/pricing' },
  ],
  tuned: [
    { title: 'Twitter', url: 'https://twitter.com/OpenAI' },
    { title: 'YouTube', url: 'https://youtube.com/OpenAI' },
    { title: 'GitHub', url: 'https://github.com/openai' },
    { title: 'SoundCloud', url: 'https://soundcloud.com/openai_audio' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/company/openai' },
    { title: 'Discord', url: 'https://discord.com/invite/openai' },
  ],
};
