import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./Plugins/AutoPlay";
import AutoPause from "./Plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const ButtonPlay = document.getElementById("ButtonPlay");
ButtonPlay.onclick = () => player.togglePlay();

const ButtonMute = document.getElementById("ButtonMute");
ButtonMute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
