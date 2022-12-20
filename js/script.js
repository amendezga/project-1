function getPlayerID() {
  return Math.floor(Math.random() * 493) + 1;
}

const userID = getPlayerID();

let userPlayer;
let compPlayers = [];
let compStats = [];
let compIDs = [];

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
    $.ajax({
      type: 'GET',
      url: `https://www.balldontlie.io/api/v1/players/${playerID}`,
      success: function (data) {
        comp = `${data.first_name} ${data.last_name}`;
        compPlayers.push(comp);
      },
    }).then(function() {
      let stats = 0;
        $.ajax({
          type: 'GET',
          url: `https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${compIDs[i]}`,
          success: function (dataS) {
            stats = dataS[0].fg3_pct;
            compStats.push(stats);
           }
        })
    } )
  }
}

getUserName();
getOpponents();

console.log(compPlayers)
console.log(compIDs)
console.log(compStats)

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

$('.next1').click(function () {

  $('.game-container').empty();
  $('.game-container').html(`You made ${userShots} shots. Your opponent made ${opponentShots} shots.`);
});

let userMakes = 0;


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