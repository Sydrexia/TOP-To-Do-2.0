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
    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', 'project-name');
    inputLabel.innerHTML = 'Project Name';

    const inputArea = document.createElement('input');
    inputArea.setAttribute('id', 'project-name');

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input-div');
    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputArea);

    libraryDiv.appendChild(inputDiv);

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
        inputArea.value = null;
    }    

    function publishLibrary() {
        projectDiv.innerHTML = null;
        for (let i = 0; i < projectLibrary.length; i++) {
            const projectName = document.createElement('p');
            projectName.classList.add('project-link');
            projectName.setAttribute('id', i)
            projectName.innerHTML = projectLibrary[i].title;

            projectName.addEventListener('click', (e) => {
                let number = e.target.id

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

                const toDoNameLabel = document.createElement('label');
                toDoNameLabel.setAttribute('for', 'to-do-name');
                toDoNameLabel.innerHTML = 'To Do Name';

                const dueDate = document.createElement('input');
                dueDate.setAttribute('type', 'date');
                dueDate.setAttribute('id', 'due-date');

                const dueDateLabel = document.createElement('label');
                dueDateLabel.setAttribute('for', 'due-date');
                dueDateLabel.innerHTML = 'Due Date';

                const todoInputDiv = document.createElement('div');
                todoInputDiv.classList.add('to-do-input-div');
            
                const createToDo = document.createElement('button');
                createToDo.innerHTML = 'Create New To Do';
                createToDo.setAttribute('id', 'create-to-do');
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
                    toDoName.value = null;
                    dueDate.value = null;
                })

                // This functionality is still in process.
                // const clearCompleted = document.createElement('button');
                // clearCompleted.innerHTML = 'Clear Completed Tasks';
                // clearCompleted.addEventListener('click', () => {
                //     let list = document.querySelectorAll('.checkbox');
                //     for (i = 0; i < list.length; i++) {
                //         if ()
                //     }
                // })

                todoInputDiv.appendChild(toDoNameLabel);
                todoInputDiv.appendChild(dueDateLabel);
                todoInputDiv.appendChild(toDoName);
                todoInputDiv.appendChild(dueDate);
                todoInputDiv.appendChild(createToDo);
                

                mainDiv.appendChild(title);
                mainDiv.appendChild(todoInputDiv);
                // mainDiv.appendChild(toDoName);
                // mainDiv.appendChild(dueDate);
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

                        // const completedBox = document.createElement('input');
                        // completedBox.setAttribute('id', i);
                        // completedBox.classList.add('checkbox');
                        // completedBox.setAttribute('type', 'checkbox')
                        // completedBox.innerHTML = 'Completed';

                        const deleteButton = document.createElement('button');
                        deleteButton.setAttribute('id', i);
                        deleteButton.innerHTML = 'Completed';
            
                        deleteButton.addEventListener('click', (e) => {
                            const number = e.target.id;
                            if (number > -1) {
                                projectArray.splice(number, 1);
                            }
                            publishProjectArray();
                        })
            
                        toDoDiv.appendChild(toDoTitle);
                        toDoDiv.appendChild(toDoDescription);
                        // toDoDiv.appendChild(completedBox);
                        toDoDiv.appendChild(deleteButton);
            
                        projectArrayP.appendChild(toDoDiv);
                    }
                }
            })
            projectDiv.appendChild(projectName);
        }
    }
}