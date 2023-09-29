console.log("Week 9 Project!"); 

const players = [
    {
        name: "Tom",
        img: 'https://i0.wp.com/pondblog2011.com/wp-content/uploads/2015/06/old-man-digging.jpg?ssl=1',
        team: "Uncle Gpa Goal Diggers",
        rank: "02"
    },
    {
        name: "Benson",
        img: 'https://ih1.redbubble.net/image.591231984.0495/raf,750x1000,075,t,FFFFFF:97ab1c12de.u1.jpg',
        team: "Kicken Chickens",
        rank: "03"
    },
    {
        name: "Troy",
        img: 'https://i.etsystatic.com/20111789/r/il/da35df/4399424883/il_fullxfull.4399424883_4jj3.jpg',
        team: "Soccer Ates",
        rank: "04"
    },
    {
        name: "Jimbo",
        img: 'https://i.pinimg.com/originals/22/16/a9/2216a90fa7c23125cf79441b40fa154b.png', 
        team: "Net Busters",
        rank: "01"
    },
    {
        name: "Bob",
        img: 'https://www.rookieroad.com/img/soccer/soccer-nutmeg.png',
        team: "Nutmeg Ninjas",
        rank: "05"
    },
];




let show = document.getElementById('showCard');

show.addEventListener("click", () => {
    loadPlayers();
});

function loadPlayers() {
    let field = document.querySelector('.field');

    for (let player of players) {
        const card = document.createElement('div');
        const pic = document.createElement('img');
        const name = document.createElement('div');

        pic.classList.add('player-image');
        name.innerText = player.name;
        pic.src = player.img;
        pic.setAttribute('field', 'playerImage')
        card.setAttribute('field', 'card');

        card.append(pic,name);
        field.append(card);
    }
}