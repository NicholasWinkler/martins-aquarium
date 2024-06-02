import { database } from "./aquariumData.js";

export const multiplesOfThreeFish = () => {
    const threeFish = database.fish.filter(fish => parseInt(fish.length) % 3 === 0);
    let threeFishHtml = "";
    for (const fish of threeFish) {
        threeFishHtml += `
            <div class="card">
                <img src="${fish.image}" alt="${fish.name}" style="width:100%">
                <h2>${fish.name}</h2>
                <p><strong>Species:</strong> ${fish.species}</p>
                <p><strong>Length:</strong> ${fish.length}</p>
                <p><strong>Location:</strong> ${fish.location}</p>
                <p><strong>Diet:</strong> ${fish.diet}</p>
            </div>`;
    }
    return threeFishHtml;
}

export const multiplesOfFivesFish = () => {
    const fiveFish = database.fish.filter(fish => parseInt(fish.length) % 5 === 0);
    let fiveFishHtml = "";
    for (const fish of fiveFish) {
        fiveFishHtml += `
            <div class="card">
                <img src="${fish.image}" alt="${fish.name}" style="width:100%">
                <h2>${fish.name}</h2>
                <p><strong>Species:</strong> ${fish.species}</p>
                <p><strong>Length:</strong> ${fish.length}</p>
                <p><strong>Location:</strong> ${fish.location}</p>
                <p><strong>Diet:</strong> ${fish.diet}</p>
            </div>`;
    }
    return fiveFishHtml;
}

export const regularFish = () => {
    const regularFish = database.fish.filter(fish => parseInt(fish.length) % 3 !== 0 && parseInt(fish.length) % 5 !== 0);
    let regularFishHtml = "";
    for (const fish of regularFish) {
        regularFishHtml += `
            <div class="card">
                <img src="${fish.image}" alt="${fish.name}" style="width:100%">
                <h2>${fish.name}</h2>
                <p><strong>Species:</strong> ${fish.species}</p>
                <p><strong>Length:</strong> ${fish.length}</p>
                <p><strong>Location:</strong> ${fish.location}</p>
                <p><strong>Diet:</strong> ${fish.diet}</p>
            </div>`;
    }
    return regularFishHtml;
}
