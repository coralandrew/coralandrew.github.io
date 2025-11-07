// Confirm page load
console.log("Portfolio loaded successfully!");

// === GitHub Repository Fetch ===
// Replace 'coralandrew' with your actual GitHub username
const githubUsername = "coralandrew";
const repoList = document.getElementById("repo-list");

async function loadGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repos = await response.json();

    repos.forEach(repo => {
      const col = document.createElement("div");
      col.classList.add("col-md-4");

      col.innerHTML = `
        <div class="card bg-dark border-warning text-center h-100">
          <div class="card-body">
            <h5 class="card-title text-warning">${repo.name}</h5>
            <p class="card-text">${repo.description || "No description provided."}</p>
            <a href="${repo.html_url}" target="_blank" class="btn btn-warning">View on GitHub</a>
          </div>
        </div>
      `;
      repoList.appendChild(col);
    });
  } catch (error) {
    console.error("Error fetching repos:", error);
  }
}

loadGitHubRepos();
