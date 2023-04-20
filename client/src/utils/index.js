import FileSaver from 'file-saver';

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
  // about: [
  //   { title: 'Learn More', url: 'https://openai.com/about' },
  //   { title: 'Terms & Policies', url: 'https://openai.com/policies' },
  //   { title: 'Privacy Policy', url: 'https://openai.com/policies/privacy-policy' },
  // ],
};
