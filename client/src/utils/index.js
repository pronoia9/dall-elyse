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
  about: [
    { title: 'Learn More', url: 'https://openai.com/about' },
    { title: 'Terms & Policies', url: 'https://openai.com/policies' },
    { title: 'Privacy Policy', url: 'https://openai.com/policies/privacy-policy' },
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
