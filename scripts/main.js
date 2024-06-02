import { multiplesOfThreeFish, multiplesOfFivesFish, regularFish } from './fishList.js';
import { TipList } from './tipList.js';
import { LocationList } from './locationList.js';

// Generate the fish lists
const threeFishHTML = multiplesOfThreeFish();
const fiveFishHTML = multiplesOfFivesFish();
const regularFishHTML = regularFish();

// Generate the care tips and location lists
const tipHTML = TipList();
const locationHTML = LocationList();

// Render the fish HTML strings to the correct DOM element
document.getElementById("fishList").innerHTML = `${threeFishHTML}${fiveFishHTML}${regularFishHTML}`;
document.getElementById("tipList").innerHTML = tipHTML;
document.getElementById("locationList").innerHTML = locationHTML;
