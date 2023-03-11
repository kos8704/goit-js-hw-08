import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then((seconds) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
  });
}, 1000));

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
