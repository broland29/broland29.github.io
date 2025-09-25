
const container = document.getElementById("cv-container");

fetch("cv.md")
  .then(response => response.text())
  .then(markdown => container.innerHTML = marked.parse(markdown))  // marked.parse from marked.js library
  .catch(err => {
    container.innerHTML = "<p style='color:red'>Failed to load CV file.</p>";
    console.error(err);
  });


