const technologiesFront = [
    'HTML5', 
    'CSS3',
    'JavaScript',
    'Angular'
];

const technologiesBack = [
    'PHP', 
    'Laravel',
    'MySQL',
    'PostgreSQL'
];

technologiesFront.forEach((item) => { 
    const content = document.querySelector('.column-left');
    const divide = document.querySelector('.divide-x');
    
    let html = 
    `<div class="content-row">
    <div class="circle"></div>
    <p>${item}</p>
    </div>
    <div class="divide-x"></div>`;
    
    content.innerHTML += html;
});


technologiesBack.forEach((item) => { 
    const content = document.querySelector('.column-right');
    
    let html = 
    `<div class="content-row">
        <div class="circle"></div>
        <p>${item}</p>
    </div>
    <div class="divide-x"></div>`;

    content.innerHTML += html;
});







