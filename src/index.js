import './style.css';

import { projects } from './projects.js';

// This sets up a div for my library of projects.
const libraryDiv = document.createElement('div');
libraryDiv.classList.add('library-div');
const libraryDivHeader = document.createElement('h1');
libraryDivHeader.innerHTML = 'Projects'
libraryDiv.appendChild(libraryDivHeader);
document.body.appendChild(libraryDiv);

// This sets up the main area of the screen, where a projects to dos will display.
const mainDiv = document.createElement('div');
mainDiv.classList.add('main-div');
const mainDivHeader = document.createElement('h1');
mainDivHeader.innerHTML = 'To Dos';
mainDiv.appendChild(mainDivHeader);
document.body.appendChild(mainDiv);

projects();