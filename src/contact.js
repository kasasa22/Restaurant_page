export function loadContact(){
    const content = document.getElementById('content');
    content.innerHTML ='';

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    contactDiv.innerHTML=`
    <h2>Contact us</h2>
    <p>Email: kasasatrevor25@gmail.com</p>
        <p>Phone: +256704967769</p>
        <p>Phone: +256770820875</p>

    `
    content.appendChild(contactDiv);


}