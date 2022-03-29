window.addEventListener('DOMContentLoaded', event => {
  bindBtnSocialListener();
  bindPortfolioListener();


  function bindBtnSocialListener() {
    let elements = document.getElementsByClassName('btn-social');

    for(var z = 0; z < elements.length; z++) {
      var element = elements[z];
      element.addEventListener('click', function(e) {
        e.stopImmediatePropagation();
      });
    };
  };

  function bindPortfolioListener() {
    let elements = document.getElementsByClassName('portfolio-item-caption');

    for(var z = 0; z < elements.length; z++) {
      var element = elements[z];
      element.addEventListener('click', function(e) {
        var gameName = e.currentTarget.getAttribute('data-dir');
        var gameWidth = e.currentTarget.getAttribute('data-width');
        var gameHeight = e.currentTarget.getAttribute('data-height');
        loadGame(gameName, gameWidth, gameHeight);
      });
    };
  };


  function loadGame(gameName, gameWidth, gameHeight) {
    let gameFrame = document.getElementById('game-frame');
    let gameTitle = document.getElementById('game-title');

    gameTitle.innerHTML = gameName;

    gameFrame.src = gameName + "/index.html";
    gameFrame.style = "height:" + gameHeight + "px; width: " + gameWidth + "px;"
  }
});
