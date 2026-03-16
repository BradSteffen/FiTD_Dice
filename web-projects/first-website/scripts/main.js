const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/stormtrooper_office_worker.jpg") {
    myImage.setAttribute("src", "images/stormtroopers_in_a_line.jpg");
  } else {
    myImage.setAttribute("src", "images/stormtrooper_office_worker.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Stormtroopers in office, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Stormtroopers in office, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});