function getPlayerID() {
    return Math.floor(Math.random() * 493) + 1;
  }

const userID = getPlayerID();

let userPlayer;

function getPlayerName() {
    $.ajax({
        type: 'GET',
        url: 'https://www.balldontlie.io/api/v1/players/' + userID,
        success: function(data) {
        console.log(data)
        userPlayer = `${data.first_name} ${data.last_name}`
        console.log(userPlayer);
        }
    });
}

$(document).ready(function() {
    $('button').click(function() {
      $('.game-container').empty()
      getPlayerName()
      $('.game-container').text(`Your player is ... ${userPlayer}`);
    });
  });