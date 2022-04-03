export function projects() {
    // index.js query selectors
    const libraryDiv = document.querySelector('.library-div');
    const mainDiv = document.querySelector('.main-div');

    // Factory Functions
    const projectFactory = (title) => {
        let toDoLibrary = [];
        return { title, toDoLibrary };
    }

    const toDoFactory = (title, description) => {
        return { title, description };
    }

    let projectLibrary = [];

    // Create New Project
    const inputArea = document.createElement('input');
    inputArea.setAttribute('id', 'project-name');
    libraryDiv.appendChild(inputArea);

    const createProject = document.createElement('button');
    createProject.innerHTML = 'Create New Project';
    libraryDiv.appendChild(createProject);

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('id', 'project-div');
    libraryDiv.appendChild(projectDiv);

    createProject.addEventListener('click', () => {
        addProjectToLibrary();
        publishLibrary();
    })

    function addProjectToLibrary() {
        const title = document.getElementById('project-name').value;
        const newProject = projectFactory(title);
        projectLibrary.push(newProject)
    }    

    function publishLibrary() {
        projectDiv.innerHTML = null;
        for (let i = 0; i < projectLibrary.length; i++) {
            const projectName = document.createElement('p');
            projectName.classList.add('project-link');
            projectName.setAttribute('id', i)
            projectName.innerHTML = projectLibrary[i].title;

            projectName.addEventListener('click', () => {
                let number = event.target.id

                mainDiv.innerHTML = null;

                const title = document.createElement('h1');
                title.innerHTML = projectLibrary[number].title


                const arrayDiv = document.createElement('div');
                arrayDiv.classList.add('array-div');
                const projectArray = projectLibrary[number].toDoLibrary
                const projectArrayP = document.createElement('div');
                projectArrayP.classList.add('projects-to-dos');
                arrayDiv.appendChild(projectArrayP);

                const toDoName = document.createElement('input');
                toDoName.setAttribute('id', 'to-do-name');

                const dueDate = document.createElement('input');
                dueDate.setAttribute('id', 'due-date');
            
                const createToDo = document.createElement('button');
                createToDo.innerHTML = 'Create New To Do';
                createToDo.addEventListener('click', () => {
                    const title = (document.getElementById('to-do-name').value);
                    const description = (document.getElementById('due-date').value);
                    const newToDo = toDoFactory(title, description);
                    projectArray.push(newToDo);
                    projectArrayP.innerHTML = null;
                    publishProjectArray();
                    arrayDiv.appendChild(projectArrayP);
                    console.log(projectArray);
                    mainDiv.appendChild(arrayDiv);
                })

                mainDiv.appendChild(title);
                mainDiv.appendChild(toDoName);
                mainDiv.appendChild(dueDate);
                mainDiv.appendChild(createToDo);
                mainDiv.appendChild(arrayDiv);
                publishProjectArray();
                
                function publishProjectArray() {
                    document.querySelector('.projects-to-dos').innerHTML = null;
                    for (let i = 0; i < projectArray.length; i++) {
                        const toDoDiv = document.createElement('div');
                        toDoDiv.classList.add('to-do-div');
                        const toDoTitle = document.createElement('p');
                        const toDoDescription = document.createElement('p');
                        toDoTitle.innerHTML = projectArray[i].title;
                        toDoDescription.innerHTML = projectArray[i].description;
                        const deleteButton = document.createElement('button');
                        deleteButton.setAttribute('id', i);
                        deleteButton.innerHTML = 'Delete';
            
                        deleteButton.addEventListener('click', () => {
                            const number = event.target.id;
                            if (number > -1) {
                                projectArray.splice(number, 1);
                            }
                            publishProjectArray();
                        })
            
                        toDoDiv.appendChild(toDoTitle);
                        toDoDiv.appendChild(toDoDescription);
                        toDoDiv.appendChild(deleteButton);
            
                        projectArrayP.appendChild(toDoDiv);
                    }
                }
            })
            projectDiv.appendChild(projectName);
        }
    }
}