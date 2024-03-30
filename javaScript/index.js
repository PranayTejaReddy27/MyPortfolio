function about(){
    passage = document.getElementById("aboutP");
    let text = "As a final year student at Malla Reddy Institute of Technology and Science, specializing in Computer Science Engineering with a focus on Data Science, I bring expertise in Python, JavaScript, Java, React, Node.js, Flask, HTML, CSS, and machine learning. My portfolio showcases proficiency in web development and machine learning, demonstrating a strong work ethic and dedication to mastering new skills. With innovative web projects and impactful machine learning solutions, I am adaptable and hardworking, ready to contribute meaningfully to the field.";
    passage.textContent = text;
}
about();
function skills(){
    let skillIcons = [
        { skill: "Python", link: "https://img.icons8.com/color/78/000000/python.png" },
        { skill: "JavaScript", link: "https://img.icons8.com/color/78/000000/javascript.png" },
        { skill: "Java", link: "https://img.icons8.com/color/78/000000/java-coffee-cup-logo.png" },
        { skill: "React", link: "https://img.icons8.com/plasticine/78/000000/react.png" },
        { skill: "Node.js", link: "https://img.icons8.com/color/78/000000/nodejs.png" },
        { skill: "Flask", link: "https://img.icons8.com/?size=78&id=5mbMwDZ796xj&format=png" },
        { skill: "HTML", link: "https://img.icons8.com/color/78/000000/html-5.png" },
        { skill: "CSS", link: "https://img.icons8.com/color/78/000000/css3.png" },
        { skill: "MySQL", link: "https://img.icons8.com/?size=78&id=rgPSE6nAB766&format=png" },
        { skill: "Machine Learning", link: "https://img.icons8.com/?size=78&id=fTkqveCX0blI&format=png" }
      ];
      let skillDiv = document.getElementById("skill-div");
      for(let i=0;i<skillIcons.length;i++){
        let img = document.createElement("img");
        img.src = skillIcons[i].link;
        img.alt = skillIcons[i].skill;
        let label = document.createElement("span");
        label.textContent = skillIcons[i].skill;
        skillDiv.appendChild(img);
        skillDiv.appendChild(label);

      } 
}
skills();

// Function to fetch all projects from a GitHub user's repository
function getAllGitHubProjects(username) {
    // Construct the URL for the GitHub API endpoint to list repositories
    let url = `https://api.github.com/users/${username}/repos`;

    // Fetch data from the GitHub API
    fetch(url)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the retrieved project data
            let projectList = document.getElementById("projects-ul");
            data.forEach(repo => {
                let listItem = document.createElement("li");
                listItem.textContent = repo.name;
                projectList.appendChild(listItem);
            });
            
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Error fetching GitHub projects:', error);
        });
}

// Example usage: Retrieve all projects owned by 'MyUsername'
getAllGitHubProjects('PranayTejaReddy27');





