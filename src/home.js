export function homePage() {
    const contentDiv = document.getElementById('content');

    const homepageDiv = document.createElement('div');
    homepageDiv.classList.add('homepage');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Fast Foods Restaurant';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best dining in town!';

    const image = document.createElement('img');
    image.src = require('../src/assets/chef.jpg');
    image.classList.add('image');

    homepageDiv.appendChild(heading);
    homepageDiv.appendChild(paragraph);
    homepageDiv.appendChild(image);

    contentDiv.appendChild(homepageDiv);
    

}
