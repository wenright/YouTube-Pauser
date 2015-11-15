var blacklist = ['', 'masthead-search-term', 'movie_player'];

window.onkeydown = function (e) {
  var active = document.activeElement.id;
  if (e.keyCode === 32 && blacklist.indexOf(active) < 0) {
    var video = document.getElementsByTagName("video")[0];
    if (video.paused) {
      video.play();
    }
    else {
      video.pause();
    }

    return false;
  }
};
