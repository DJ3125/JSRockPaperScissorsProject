const Items = ['Rock','Paper','Scissor'];
let UserSelected = null;
let BotSelected = null;
let GamesPlayed = 0;
let OpponentNames = ['Mom','Dad'];
let Opponent = null;
let Game = false;
function ItemSelect(Selected){
    UserSelected = Items.indexOf(Selected);
    BotSelected = Math.floor(Math.random()*3);
    document.getElementById('ThingSelected').innerHTML = Opponent + ' Selected ' + Items[BotSelected];
    document.getElementById('UserSelected').innerHTML = 'You Selected ' + Items[UserSelected];
    document.getElementById('ItemSelectedByOpponent').src = 'Pictures/' + Items[BotSelected] +'.jpg';
    document.getElementById('ItemSelectedByUser').src = 'Pictures/' + Items[UserSelected] +'.jpg';
    document.getElementById('SelectionArea').style.display = 'none';
    document.getElementById('Continue').style.display = 'inline';
    document.getElementById('Results').style.display = 'inline';
    document.getElementById('ItemSelectedByOpponent').style.display = 'inline';
    document.getElementById('ItemSelectedByUser').style.display = 'inline';
    GamesPlayed = GamesPlayed +1;
    if(BotSelected===UserSelected){
        document.getElementById('Results').innerHTML = 'Tie';
        document.getElementById('Ties').innerHTML = Number(document.getElementById('Ties').innerHTML)+1;
    } else {
        if(((UserSelected+1)%3)===BotSelected){
            document.getElementById('Results').innerHTML = 'You Lose';
            document.getElementById('Losses').innerHTML = Number(document.getElementById('Losses').innerHTML)+1;
        } else {
            document.getElementById('Results').innerHTML = 'You Win';
            document.getElementById('Wins').innerHTML = Number(document.getElementById('Wins').innerHTML)+1;
        }
    }
    document.getElementById('Percentage').innerHTML = Number(Math.round(100*Number(document.getElementById('Wins').innerHTML)/GamesPlayed)) + '%';
}

function Continue(){
    if(Game) {
        document.getElementById('ThingSelected').innerHTML = null;
        document.getElementById('UserSelected').innerHTML = null;
        document.getElementById('ItemSelectedByOpponent').src = null;
        document.getElementById('ItemSelectedByUser').src = null;
        document.getElementById('Results').style.display = 'none';
        document.getElementById('ItemSelectedByOpponent').style.display = 'none';
        document.getElementById('ItemSelectedByUser').style.display = 'none';
        document.getElementById('UserSelect').style.visibility = 'hidden';
        document.getElementById('AskWho').innerHTML = 'Please Enter In Your Opponents Name';
        document.getElementById('Box').style.visibility = 'visible';
        document.getElementById('Box').value = null;
        Game = false;
    } else {
        if((document.getElementById('Box').value === null)||(OpponentNames.indexOf(document.getElementById('Box').value)>=0)){
            document.getElementById('AskWho').innerHTML = 'Please Enter In A Name, Not Already Selected';
        } else {
            Game = true;
            Opponent = document.getElementById('Box').value;
            OpponentNames.push(Opponent);
            document.getElementById('AskWho').innerHTML = null;
            document.getElementById('SelectionArea').style.display = 'inline';
            document.getElementById('Continue').style.display = 'none';
            document.getElementById('UserSelect').style.visibility = 'visible';
            document.getElementById('Box').style.visibility = 'hidden';
        }
    }
}