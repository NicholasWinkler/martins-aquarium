import { FishList } from './fishList.js'
import { TipList } from './tipList.js'
import { LocationList } from './locationList.js'

// Generate the fish list
const fishHTML = FishList()

// // Generate the care tips
const tipHTML = TipList()

// // Generate the location list
const locationHTML = LocationList()

// Render each HTML string to the correct DOM element
document.getElementById("fishList").innerHTML = fishHTML;
document.getElementById("tipList").innerHTML = tipHTML;
document.getElementById("locationList").innerHTML = locationHTML;

