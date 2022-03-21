import React from "react";

const SlugFormatter = ({ String }) => {
    
  return String?.toString() || ''
  .toLowerCase()
  .replace(/\s+/g, "-")
};


/* const urlSlug = (title) => {
  return `${SlugFormatter(title)}`;
}
 */

export default SlugFormatter