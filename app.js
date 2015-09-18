$(document).ready(function () {
  var options = {
    "backdrop" : "static"
  }
  $('.modal').modal(options)
});

// youtube api
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '315', // player height
    width: '560', // player width
    videoId: 'j7s_z8h10lY', // video id
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// autoplay
function onPlayerReady(event) {
  event.target.playVideo()
}

// autoclose youtube video ends
function onPlayerStateChange(event) {
  if(event.data == 0) {
    $(document).ready(function () {
      setTimeout(function(){$('.modal').modal('hide');}, 3000)
    })
  }
}
