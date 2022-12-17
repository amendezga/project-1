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
        console.log('this is in the function ' + userPlayer);
        }
    });
}

getPlayerName();

$(document).ready(function() {
    $('.start-game').click(function() {
      $('.game-container').empty()
      console.log('this is after clicking the button ' + userPlayer)
      $('.game-container').text(`Your player is ... ${userPlayer}`);
    });
  });



  function simulateShots(threePct) {
    const shotResults = [];
  
    for (let i = 0; i < 5; i++) {
      const shotChance = Math.random();
      if (shotChance < threePct) {
       shotResults.push("Shot made!");
      } else {
        shotResults.push("Shot missed!");
      }
    }
  
  }