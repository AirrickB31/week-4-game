

var playerNum = 0;
$(document).ready(function(){
var wins = 0;
var losses = 0;
function startGame(){

 computerNum = Math.floor(Math.random() * 120 + 19);
$(".computerNum").html(computerNum);

$(".score").html("Wins: " + wins + "<br>" + "Losses: " + losses);
playerNum = 0;
};

startGame();

function assignNumbers(){
    KFed = Math.floor(Math.random() * 10 + 1);
    pump = Math.floor(Math.random() * 10 + 1);
    sixnine = Math.floor(Math.random() * 10 + 1);
    limpBizkit = Math.floor(Math.random() * 10 + 1);

return [KFed , pump, sixnine, limpBizkit];
};
 var wackNums = assignNumbers();

console.log(wackNums);
$('.limpBizkit').on('click', function() {
    playerNum = (playerNum + wackNums[0]);
    console.log(playerNum);
    console.log(wackNums[0])
})
$('.KFed').on('click', function() {
    playerNum = (playerNum + wackNums[1]);
})
$('.pump').on('click', function() {
    playerNum = (playerNum + wackNums[2]);
})
$('.sixnine').on('click', function() {
    playerNum = (playerNum + wackNums[3]);
})
$('.pic').on('click', function(){
$('.yourNumber').text(playerNum);
});
$('.wack').on('click', function(){
    
if (playerNum == computerNum){
    wins++
    startGame();
    assignNumbers();
    wackNums = assignNumbers();
    console.log(wackNums);
}
else if (playerNum > computerNum){
    losses++
    startGame();
    assignNumbers();
    wackNums = assignNumbers();
    console.log(wackNums);
}
});

});


