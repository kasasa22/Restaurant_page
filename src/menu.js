export function loadMenuTab() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
        <h2>Menu</h2>
        <div class="grid-container" id="menu">
            <div class="grid-item" id="burger">Burger</div>
            <div class="grid-item" id="pizza">Pizza</div>
            <div class="grid-item" id="pasta">Pasta</div>
            <div class="grid-item" id="rice">Rice</div>
  
        </div>
    `;
    content.appendChild(menuDiv);
}