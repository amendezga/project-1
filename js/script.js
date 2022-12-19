function getPlayerID() {
  return Math.floor(Math.random() * 493) + 1;
}

const userID = getPlayerID();

let userPlayer;
let compPlayers = [];
let compIDs = []

function getUserName() {
  $.ajax({
    type: 'GET',
    url: 'https://www.balldontlie.io/api/v1/players/' + userID,
    success: function (data) {
      userPlayer = `${data.first_name} ${data.last_name}`;
    }
  });
}

function getOpponents() {
  for (let i = 0; i < 3; i++) {
    let playerID = getPlayerID()
    compIDs.push(playerID)
    let comp = ''
    let id = $.ajax({
      type: 'GET',
      url: `https://www.balldontlie.io/api/v1/players/${playerID}`,
      success: function (data) {
        comp = `${data.first_name} ${data.last_name}`;
        compPlayers.push(comp)
      }
    })
  }
}

getUserName();
getOpponents();

console.log(compPlayers)
console.log(compIDs)

$(document).ready(function () {
  $('.start-game').click(function () {
    $('.game-container').html(
      `Your player is ... ${userPlayer}
      <br><br>
      And your opponent is ... ${compPlayers[0]} 
      <br<br><br><br><br><br><br><br><br><br>
      <button class="next1">Next</button></div>`);
  });
});



function simulateShots(threePct) {
  const shotResults = [];

  for (let i = 0; i < 5; i++) {
    const shotChance = Math.random();
    if (shotChance < threePct) {
      shotResults.push(`Shot ${i} made!`);
    } else {
      shotResults.push(`Shot ${i} missed!`);
    }
  }

}