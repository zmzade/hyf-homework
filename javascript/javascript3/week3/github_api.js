const user = ["Jul-S", "semih1239", "GreeshmaRahool"];

function fetchGithubApi(user) {
  fetch(`https://api.github.com/search/repositories?q=user:${user}`)
    .then((res) => res.json())
    .then((data) => {
      renderRepos(data.items);
    });
}

function getPromises() {
  Promise.all([
    fetchGithubApi(user[0]),
    fetchGithubApi(user[1]),
    fetchGithubApi(user[2]),
  ]);
}
getPromises();

const header = document.createElement("h2");
document.body.appendChild(header);
header.innerHTML = "Repo's Info";

function renderRepos(items) {
  const repoDiv = document.createElement("div");
  document.body.appendChild(repoDiv);
  const owner = document.createElement("h5");
  repoDiv.appendChild(owner);
  owner.innerHTML = `Repo owner: ${items[0].owner.login}`;
  owner.style.fontFamily = "Arial";
  const ul = document.createElement("ul");
  repoDiv.appendChild(ul);
  items.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name}: ${element.html_url}`;
    ul.appendChild(li);
    li.style.fontFamily = "sans-serif";
    li.style.lineHeight = "2";
  });
}
