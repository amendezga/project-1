function getPlayerID() {
    return Math.floor(Math.random() * 493) + 1;
  }

let playerID = getPlayerID();

$(document).ready(function() {
    $('button').click(function() {
      $('.game-container').empty()
      
      getPlayerID();
    });
  });