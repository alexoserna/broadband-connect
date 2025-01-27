// src/utils/getIconPath.js

/**
 * Constructs the full path for an asset stored in the `src/assets/icons` folder.
 * @param {string} iconFileName - The name of the icon file (e.g., "example-icon.svg").
 * @returns {string} - The fully resolved URL for the icon.
 */
export const getIconPath = (iconFileName) => {
  return new URL(`../assets/icons/${iconFileName}`, import.meta.url).href;
};

export const getImagePath = (iconFileName) => {
  return new URL(`../assets/images/${iconFileName}`, import.meta.url).href;
};
