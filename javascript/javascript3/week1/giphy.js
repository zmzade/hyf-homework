const apiKey = "kBxVzpkU6jDfdPzWItFmlZNSjDsyZ6Jy";
const button = document.getElementById("button");
const gifDiv = document.getElementById("gifDiv");
const input = document.getElementById("input-limit");

button.addEventListener("click", renderGifs);

function renderGifs() {
  let userWord = document.getElementById("input-text").value;
  let userLimit = input.value; //It doesnot work when user determine limit after userword.
  console.log(userLimit);

  if (!userWord) {
    alert("please insert the search word");
  }
  if (!userLimit) {
    userLimit = 10;
  }

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userWord}&limit=${userLimit}&offset=0&rating=g&lang=en`
  )
    .then((res) => res.json())
    .then((result) => {
      clearGifData();
      const gifs = result.data.map((entry) => {
        const image = document.createElement("img");
        image.setAttribute("src", entry.images.downsized.url);
        gifDiv.appendChild(image);
      });
    });
}
function clearGifData() {
  document.querySelectorAll("img").forEach((element) => {
    element.remove();
  });
}
