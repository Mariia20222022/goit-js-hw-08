import '../css/common.css';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
  const time = data.seconds;
  localStorage.setItem(`videoplayer-current-time`, time);
};
player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = localStorage.getItem(`videoplayer-current-time`);
console.log(currentTime);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
