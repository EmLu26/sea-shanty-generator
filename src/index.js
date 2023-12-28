function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6798e9t4f3cb9ef4o430784a938ec3f3";
  let context =
    "You are a sea shanty expert who loves to create short sea shanties. Your mission is to generate a sea shanty of one four-line verse, after the style of 'Soon may the Wellerman come...', in basic HTML. You MUST have a <br /> separating each line. The first, third and fourth line of the verse should have a maximum of six syllables, and the second line should have a maximum of eight syllables. The first, second and third lines should rhyme, the fourth line should not. Make sure to follow the user instructions. Sign the poem with 'By SheCodes AI' - this MUST be inside a <strong></strong> element and MUST come after the sea shanty.";
  let prompt = `User instructions: Generate a sea shanty in English about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Arrgh me hearties! Generating a sea shanty for you about ${instructionsInput.value}.</div`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
