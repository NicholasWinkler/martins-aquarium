import { database } from "./aquariumData.js";

// Generate an HTML representation of each fish
export const FishList = () => {
  //need the fish data
  const fishList = database.fish;
  //start with empty string
  let fishListHtml = "";
  // for every fish object make a <li> with the name, species, length,location, and diet of the fish and add that to the base string
  for (const fish of fishList) {
    fishListHtml += `
    <div class="card">
        <img src="${fish.image}" alt="${fish.name}" style="width:100%">
        <h2>${fish.name}</h2>
        <p><strong>Species:</strong> ${fish.species}</p>
        <p><strong>Length:</strong> ${fish.length}</p>
        <p><strong>Location:</strong> ${fish.location}</p>
        <p><strong>Diet:</strong> ${fish.diet}</p>
    </div>`
  }
  // return base string
  return fishListHtml;
};
