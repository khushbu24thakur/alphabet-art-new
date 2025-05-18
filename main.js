const container = document.getElementById("alphabetContainer");


const imageUrls = [
  "images/A.png", "images/B.png", "images/C.png", "images/D.png", "images/E.png", "images/F.png",
  "images/G.png", "images/H.png", "images/I.png", "images/J.png", "images/K.png", "images/L.png",
  "images/M.png", "images/N.png", "images/O.png", "images/P.png", "images/Q.png", "images/R.png",
  "images/S.png", "images/T.png", "images/U.png", "images/V.png", "images/W.png", "images/X.png",
  "images/Y.png", "images/Z.png"
];


const words = [
  "Alien", "Butterfly", "Cat", "Dinosaur", "Eagle", "Flower", "Giraffe", "Hammer", "Ice", "Jellyfish",
  "Keys", "Lamp", "Mountains", "Ninja", "Omelette", "Pirate", "Queen", "Rabbit", "Snowman", "Tree",
  "Unicorn", "Volcano", "Watermelon", "X-Ray", "Yak", "Zebra"
];


const audioUrls = [
  "audio/A-for-alien.mp3", "audio/B-for-butterfly.mp3", "audio/C-for-cat.mp3", "audio/D-for-Dinosaur.mp3",
  "audio/E-for-eagle.mp3", "audio/F-for-flower.mp3",
  "audio/G-for-giraffe.mp3", "audio/H-for-hammer.mp3", "audio/I-for-ice.mp3", "audio/J-for-jellyfish.mp3", "audio/K-for-keys.mp3",
  "audio/L-for-lamp.mp3", "audio/M-for-mountains.mp3", "audio/N-for-ninja.mp3", "audio/O-for-omelette.mp3", "audio/P-for-pirate.mp3", "audio/Q-for-queen.mp3",
  "audio/R-for-rabbit.mp3", "audio/S-for-snowman.mp3", "audio/T-for-tree.mp3", "audio/U-for-unicorn.mp3", "audio/V-for-volcano.mp3", "audio/W-for-watermelon.mp3",
  "audio/X-for-x-ray.mp3", "audio/Y-for-yak.mp3","audio/Z-for-zebra.mp3"
];


const colors = {
  A: '#FFB800', B: '#8030D4', C: '#1375E4',
  D: '#DA2D65', E: '#BF6800', F: '#1BB486',
  G: '#FFB800', H: '#8030D4', I: '#1375E4',
  J: '#DA2D65', K: '#BF6800', L: '#1BB486',
  M: '#FFB800', N: '#8030D4', O: '#1375E4',
  P: '#DA2D65', Q: '#BF6800', R: '#1BB486',
  S: '#FFB800', T: '#8030D4', U: '#1375E4',
  V: '#DA2D65', W: '#BF6800', X: '#1BB486',
  Y: '#FFB800', Z: '#8030D4'
};


let currentAudio = null;


for (let i = 65; i <= 90; i++) {
  const index = i - 65;
  const letter = String.fromCharCode(i);


  const cardWrapper = document.createElement("div");
  cardWrapper.className = "flip-card";


  const cardInner = document.createElement("div");
  cardInner.className = "flip-card-inner";


  const front = document.createElement("div");
  front.className = "flip-card-front";


  front.style.backgroundColor = colors[letter]


  front.textContent = letter;


  const back = document.createElement("div");
  back.className = "flip-card-back";


  const backImg = document.createElement("img");
  backImg.src = imageUrls[index];
  backImg.alt = `${letter} image`;


  const wordDiv = document.createElement("div");
  wordDiv.textContent = words[index];


  back.appendChild(backImg);
  back.appendChild(wordDiv);


  cardInner.appendChild(front);
  cardInner.appendChild(back);
  cardWrapper.appendChild(cardInner);
  container.appendChild(cardWrapper);


  cardWrapper.addEventListener("click", () => {
    cardInner.classList.toggle("flip");


    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }


    currentAudio = new Audio(audioUrls[index]);
    currentAudio.play();
  });
}
