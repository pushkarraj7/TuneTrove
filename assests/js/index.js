const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//change the music
const songs = [
    {
        name: "track-1",
        title: "Maan Meri Jaan",
        artist: "King",
    },
    {
        name: "track-2",
        title: "Haan Tu Hain",
        artist: "KK",
    },
    {
        name: "track-3",
        title: "Bholenath",
        artist: "Kaka",
    },
    {
        name: "track-4",
        title: "Jai Shri Ram",
        artist: "Ajay Atul",
    },
    {
        name: "track-5",
        title: "Har Har Shambhu",
        artist: "Abhilipsa Panda",
    },
    // {
    //     name: "track-6",
    //     title: "Mann Bharrya",
    //     artist: "B Praak",
    // },
    // {
    //     name: "track-7",
    //     title: "Mann Bharrya",
    //     artist: "B Praak",
    // },
];

let isPlaying = false;

//for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

//for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

//changing the music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "/assests/music/" + songs.name + ".mp3";
    img.src = "/assests/img/" + songs.name + ".jpg";
};
// loadSong(songs[0]);

//for changing the music
let songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);


// Play or pause the music when Spacebar is pressed
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    }
  });
  
  // Play the next or previous song when ArrowRight or ArrowLeft is pressed
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
      nextSong();
    } else if (event.code === "ArrowLeft") {
      prevSong();
    }
  });  


/*
// Keyboard event listener
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  } else if (event.code === "ArrowRight") {
    nextSong();
  } else if (event.code === "ArrowLeft") {
    prevSong();
  }
});
 */