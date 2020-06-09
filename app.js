const h1 = document.querySelector("h1");
const generateBtn = document.querySelector("#generate-btn");
const previewDiv = document.querySelector("#preview-div");
const imageInput = document.querySelector("#image-input");
const topTextInput = document.querySelector("#top-text-input");
const bottomTextInput = document.querySelector("#bottom-text-input");

h1.style.color = "red";

// Max number of Meme require
let maxClick = 2;
//  current meme
let currentClick = 0;

generateBtn.addEventListener("click", memeGenerator);

function memeGenerator(e) {
  e.preventDefault();

  if (currentClick >= maxClick) {
    return;
  }

  if (imageInput.value === "" || topTextInput.value === "") {
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add("new-div");
  previewDiv.appendChild(newDiv);
  console.log("click");

  const image = document.createElement("img");
  image.classList.add("image-div");
  image.setAttribute("src", imageInput.value);
  imageInput.value = "";
  newDiv.appendChild(image);

  const topTextDiv = document.createElement("div");
  topTextDiv.innerText = topTextInput.value;
  topTextInput.value = "";
  topTextDiv.setAttribute("id", "top-text");
  newDiv.append(topTextDiv);

  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.innerText = bottomTextInput.value;
  bottomTextInput.value = "";
  bottomTextDiv.setAttribute("id", "bottomTextDiv");
  newDiv.append(bottomTextDiv);

  newDiv.addEventListener("click", function () {
    newDiv.remove();
  });

  currentClick++;
}
