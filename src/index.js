import './styles/main.scss';

import { loadHomePage } from './pageLoad';
import { loadContact } from './contact';
import { loadMenuTab } from './menu';

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
});

document.getElementById('about-tab').addEventListener('click', loadContact);
document.getElementById('menu-tab').addEventListener('click', loadMenuTab);
document.getElementById('home-tab').addEventListener('click', loadHomePage); 