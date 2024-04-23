import FileSaver from 'file-saver';

import { surpriseMePrompts } from './data';

export const getPosts = (setData) => {
  try {
    // Check if data exists in local storage
    const storedData = localStorage.getItem('dall-elyse-data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      return true;
    } else {
      fetchPosts(setData);
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

// Fetches posts from the server and updates the data state
export const fetchPosts = async (setData) => {
  // TODO
  // try {
  //   const response = await fetch(process.env.POSTS_URL, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (response.ok) {
  //     const result = await response.json();
  //     // Reverse the data array so the newest items are first and update the state
  //     const reversedData = result.data.reverse();
  //     // Set the store data with the data
  //     setData(reversedData);
  //     // Store the fetched data in local storage
  //     localStorage.setItem('dall-elyse-data', JSON.stringify(reversedData));
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
};

// Returns a random prompt from the surpriseMePrompts array
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  // If the random prompt is the same as the given prompt, recursively get another random prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

// Copy input to clipboard
export const copyToClipboard = (text) => void navigator.clipboard.writeText(text);

// Downloads an image with a specified filename
export const downloadImage = async (_id, photo) => void FileSaver.saveAs(photo, `download-${_id}.jpg`); // Save the photo with the provided filename

// Returns the smaller number
export const smaller = (a, b) => (parseInt(a) < parseInt(b) ? a : b);
