import fs from "fs";
import fetch from "node-fetch"; // skip if Node 18+ and using global fetch

const username = "saaqi"; // your GitHub username

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
  );
  const data = await res.json();
  return data;
}

function generateListHTML(repos) {
  return repos
    .map(
      (repo) =>
      `<div class="col-md-4 h-auto">`+
        `<div class="card h-100">`+
          `<div class="card-body">`+
            `<h5 class="card-title">`+
            `<a  href="${repo.html_url}" target="_blank">${repo.name}</a> • ⭐ ${repo.stargazers_count}`+
            `</h5>`+
            `<p class="card-text">${repo.description || "No description"}</p>`+
            `</div>`+
        `</div>`+
    ` </div>`,
    )
    .join("\n");
}

async function buildSite() {
  const repos = await fetchRepos();
  const template = fs.readFileSync("template.html", "utf-8");
  const listHTML = generateListHTML(repos);
  const finalHTML = template.replace("{{repos}}", listHTML);

  fs.mkdirSync("docs", { recursive: true });
  fs.writeFileSync("docs/index.html", finalHTML);

  console.log("Site generated at output/index.html");
}

buildSite();
