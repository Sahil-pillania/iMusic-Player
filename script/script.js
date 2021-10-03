console.log("Music Player");

const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector('img');

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "music-1",
        title: "Music-1",
        artist: "Various",
        img: "1"
    },
    {
        name: "music-2",
        title: "Music-2",
        artist: "Unknown",
        img: "2"
    },
    {
        name: "music-3",
        title: "Music-3",
        artist: "Single track",
        img: "3"
    }
]



let isPlaying = false;
play.addEventListener('click', ()=>{
    if (!isPlaying){
        playMusic();
    }
    else{
        pauseMusic();
    }
});


 const playMusic = () => {
    
        isPlaying = true;
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        img.classList.add("animate");
    };
const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
        img.classList.remove("animate");
    };


    //    changing the music data 

const loadSong = (songs)=>{
    // console.log("hello");
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    // music.src = `music${songs.name}.mp3`;
    img.src = "images/" + songs.img + ".PNG";
};

songIndex = 0;
// loadSong(songs[2]);

const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}

loadSong(songs[0]);

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);