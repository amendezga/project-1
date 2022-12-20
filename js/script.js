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
      And your opponent is ... ${compPlayers[0]}`,
      );
    $('.start-game').addClass('next1');
    $('.start-game').removeClass('start-game');
    $('.next1').text('Next');
  });
});


let userMakes = 0;

// THIS BELOW IS NOT WORKING, FIGURE THIS OUT FIRST

// $('.next1').click(function () {
//     $('.game-container').html(
//       `You made ${userMakes} shots!
//       <br><br>
//       And your opponent made ${opponentMakes} shots. 
//       <br<br><br><br><br><br><br><br><br><br>
//       <button class="next2">Next</button></div>`);
//   });



function simulateShots(threePct) {
  for (let i = 0; i < 5; i++) {
    const shotChance = Math.random();
    if (shotChance < threePct) {
      userMakes = (userMakes + 1);
    } else {
      userMakes = userMakes;
    }
  }

}