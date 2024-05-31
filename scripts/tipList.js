import { database } from "./aquariumData.js";

// create an exported function tipList that returns HTML for the list of tips to be rendered in the DOM
// Use a loop to generate the HTML for each tip. Render each tip as an <li class="tip"> element inside a <ul class="tips"> element.

export const TipList = () => {
// recall the tip array from database
const tipArray = database.tips
// create an empty array
let tipHTML = ""
// create a for loop to generate HTML
for (const tips of tipArray) { 
tipHTML += `
<ul class="tips">
<li class="tip"><strong>${tips.topic}:</strong> ${tips.text}</li>
</ul>`
}
// return loop in the empty array
return tipHTML
}


// `<ul><li> Topic: ${tips.topic}</li><li> Text: ${tips.text}</li></ul>`