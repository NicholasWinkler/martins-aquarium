import { database } from "./aquariumData.js";

// create an export function 
export const LocationList = () => {
  // recall location data
  const locationData = database.locations;
  // create an empty string for the HTML location data
  let locationHTML = "";
  // use a for loop to build HTML: Define each location as a <section> element with the class location inside an <article> element with the class locations.
  for (const location of locationData) {
    locationHTML += `
      <section class="location card">
        <h2>${location.name}</h2>
        <p><strong>Country:</strong> ${location.country}</p>
        <p><strong>Description:</strong> ${location.description}</p>
      </section>
    `;
  }
  // return HTML for locations
  return locationHTML;
}

