$(document).ready(function() {
  var player_1 = 0;
  var player_2 = 0;

  $(document).on('keyup', function(event) {
    if (event.keyCode == 87 && (player_1 < 6) && (player_2 < 6)){
      update_player_position("#player1_strip");
      player_1++ 
      determine_winner(player_1)}
    
    if (event.keyCode == 38 && (player_1 < 6) && (player_2 < 6)){
      update_player_position("#player2_strip");
      player_2++
      determine_winner(player_1)
    }
  });
});


function determine_winner(player) {
  if (player == 6)
    alert("You win!");}


function update_player_position(player) {
  $(player).find('td.active').removeClass('active').next().addClass('active');
}

