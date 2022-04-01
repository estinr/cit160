// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS
const insertX = ['Willy', 'the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

const storyText = `It was 94 fahrenheit outside, so: :insertX: went
for a walk. When they got to: :insertY: , they stared in horror
for a few moments, then: ${insertZ}. Bob saw the whole thing, but was not surprised—: ${insertX}: weighs 300 pounds, and it was a hot day.`;



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result(customName) {
    const newStory = storyText;
    const xItem = newStory.replace(/:insertX:/g, insertX);
    const yItem = newStory.replace(/:insertY:/g, insertY);
    const zItem = newStory.replace(/:insertZ:/g, insertZ);


    if (customName.value !== '') {
        const name = customName.value;
        let newName = storyText.replace("Bob", name);

    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300) / 14 + ' stone.';
        const temperature = Math.round(94);
        const stone = newStory.replace(/94 fahrenheit/|/fahrenheit/g, weight)

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}