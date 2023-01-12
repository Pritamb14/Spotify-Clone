let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Peaches", filePath: 'songs/1.mp3', coverPath: "peaches coverpng.png" },
    { songName: "Intentions", filePath: "songs/2.mp3", coverPath: "Justin-Bieber-Intentions-Official-Video-Short-Version-ft.-Quavo.jpeg" },
    { songName: "Let me love you", filePath: "songs/3.mp3", coverPath: "let me love u.jpg" },
    { songName: "Stay", filePath: "songs/4.mp3", coverPath: "stay.jpg" },
    { songName: "Stuck with you", filePath: "songs/5.mp3", coverPath: "Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png" },
    { songName: "Sorry", filePath: "songs/6.mp3", coverPath: "Justin-Bieber-Sorry-PURPOSE-The-Movement.jpeg" },
    { songName: "Somebody to love", filePath: "songs/7.mp3", coverPath: "Justin-Bieber-Somebody-To-Love-Remix-ft.-Usher.jpeg" },
    { songName: "Shake it off", filePath: "songs/8.mp3", coverPath: "singer-taylor-swift-denies-allegations-of-copyright-infringement-on-shake-it-off.jpg" },
    { songName: "Love Story", filePath: "songs/9.mp3", coverPath: "lovestory.jpg" },
    { songName: "I don't wanna live forever", filePath: "songs/10.mp3", coverPath: "i dont wanna.jpg" },
    { songName: "Blank Space", filePath: "songs/11.mp3", coverPath: "blank space.jpg" },
    { songName: "I knew you were trouble", filePath: "songs/12.mp3", coverPath: "i knew you were trouble.jpg" }
]
// audioElement.play();
console.log("songItems", songItems)
// Handle play/ause click
songItems.forEach((element, i) => {
    console.log(element.getElementsByClassName("songName"))
    element.getElementsByTagName("img").src = songs[i].coverPath;
    element.getElementsByClassName("songName").innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

console.log("1")
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 11) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})