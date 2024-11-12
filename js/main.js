//Array of projects
const projects =[
    {
        title:'Kuda portfolio',
        description : 'A showcase of Kuda personal portfolio',
        url: "https://www.figma.com/proto/xImleEQgpW4X9hwlNGwKGY/Real-Estate-Website-Landing-Page-(Community)?page-id=0%3A1&node-id=204-2&node-type=frame&viewport=213%2C-964%2C0.22&t=N3cK0muHCE62Cda2-1&scaling=min-zoom&content-scaling=fixed"
    },
    {
        title:'Kuda portfolio',
        description : 'A showcase of Kuda personal portfolio',
        url: 'https://www.figma.com/proto/xImleEQgpW4X9hwlNGwKGY/Real-Estate-Website-Landing-Page-(Community)?page-id=0%3A1&node-id=204-2&node-type=frame&viewport=213%2C-964%2C0.22&t=RTbAUG61C8Y4qvsz-1&scaling=min-zoom&content-scaling=fixed'
    },
    {
        title:'Kuda portfolio',
        description : 'A showcase of Kuda personal portfolio',
        url: 'https://www.figma.com/proto/xImleEQgpW4X9hwlNGwKGY/Real-Estate-Website-Landing-Page-(Community)?page-id=0%3A1&node-id=204-2&node-type=frame&viewport=213%2C-964%2C0.22&t=RTbAUG61C8Y4qvsz-1&scaling=min-zoom&content-scaling=fixed'
    },
    {
        title:'Kuda portfolio',
        description : 'A showcase of Kuda personal portfolio',
        url: 'https://www.figma.com/proto/xImleEQgpW4X9hwlNGwKGY/Real-Estate-Website-Landing-Page-(Community)?page-id=0%3A1&node-id=204-2&node-type=frame&viewport=213%2C-964%2C0.22&t=RTbAUG61C8Y4qvsz-1&scaling=min-zoom&content-scaling=fixed'
    },
    {
        title:'Kuda portfolio',
        description : 'A showcase of Kuda personal portfolio',
        url: 'https://www.figma.com/proto/xImleEQgpW4X9hwlNGwKGY/Real-Estate-Website-Landing-Page-(Community)?page-id=0%3A1&node-id=204-2&node-type=frame&viewport=213%2C-964%2C0.22&t=RTbAUG61C8Y4qvsz-1&scaling=min-zoom&content-scaling=fixed'
    },
    {
        title:'Kuda portfolio',
        description : 'A showcase of Kuda personal portfolio',
        url: 'https://www.figma.com/proto/xImleEQgpW4X9hwlNGwKGY/Real-Estate-Website-Landing-Page-(Community)?page-id=0%3A1&node-id=204-2&node-type=frame&viewport=213%2C-964%2C0.22&t=RTbAUG61C8Y4qvsz-1&scaling=min-zoom&content-scaling=fixed'
    },

  
];
//to load projects
function loadprojects() {
    const projectsList = document.getElementById('project-list')

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}<p/>
        <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
        `;
        projectsList.appendChild(projectCard)
    }); 
}

//load projects when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadprojects);