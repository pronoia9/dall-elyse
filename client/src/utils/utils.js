import FileSaver from 'file-saver';

import { surpriseMePrompts } from './data';

export const getPosts = (setData) => {
  console.log('getting posts....');
  try {
    // Check if data exists in local storage
    const storedData = localStorage.getItem('dall-elyse-data');
    if (storedData) {
      console.log('we have data in local storage!');
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      console.log('returning with a true.');
      return true;
    } else {
      console.log('no data in local storage, will fetch posts from slow af backend...');
      fetchPosts(setData);
      console.log('returning with a false.');
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

// Fetches posts from the server and updates the data state
export const fetchPosts = async (setData) => {
  try {
    const response = await fetch(import.meta.env.VITE_POSTS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const result = await response.json();
      // Reverse the data array so the newest items are first and update the state
      const reversedData = result.data.reverse();
      // Set the store data with the data
      setData(reversedData);
      // Store the fetched data in local storage
      localStorage.setItem('dall-elyse-data', JSON.stringify(reversedData));
    }
  } catch (error) {
    console.error(error);
  }
};

// Returns a random prompt from the surpriseMePrompts array
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  // If the random prompt is the same as the given prompt, recursively get another random prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

// Downloads an image with a specified filename
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`); // Save the photo with the provided filename
}
