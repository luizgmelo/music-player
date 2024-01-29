const musics = [
  {
    id: "1",
    logoSrc: "../images/logo.jpeg",
    name: "505",
    musicSrc: "../musics/505.mp3"
  },
  {
    id: "2",
    logoSrc: "../images/logo.jpeg",
    name: "I Wanna Be Yours",
    musicSrc: "../musics/I Wanna Be Yours.mp3"
  },
  {
    id: "3",
    logoSrc: "../images/logo.jpeg",
    name: "Do I Wanna Know",
    musicSrc: "../musics/Do I Wanna Know.mp3"
  }
];

const body = document.querySelector('body');
const popular = document.getElementById('divPopular');
const btPrevious = document.getElementById('previous');
const btPlay = document.getElementById('play');
const btPause = document.getElementById('pause');
const btNext = document.getElementById('next');

body.onload = drawMusics = () => {
  musics.forEach(music => {
    const button = document.createElement('button');
    button.className = "music";
    button.onclick = () => playSong(music.id);
    const pId = document.createElement('p');
    pId.textContent = music.id;
    const img = document.createElement('img');
    img.className = "music-logo";
    img.setAttribute("src", music.logoSrc);
    const pName = document.createElement('p');
    pName.className = "music-name"
    pName.textContent = music.name;

    button.appendChild(pId);
    button.appendChild(img);
    button.appendChild(pName);
    popular.appendChild(button);
  });
}

const playSong = (musicId) => {

}
