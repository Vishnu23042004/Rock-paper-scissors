let score=JSON.parse(localStorage.getItem('score')) ||
{
    wins : 0,
    losses : 0,
    tie : 0
};

let isautoplay=false;
let intervalid;
function autoplay(){

    if(!isautoplay){
        document.querySelector('.autoplay').innerHTML='Stop Playing';
        intervalid=setInterval(function(){
            let x=getRandom();
            result(getRandom(), x);
        }, 1000);
        isautoplay=true;
    }else{
        document.querySelector('.autoplay').innerHTML='Auto Play';
        clearInterval(intervalid);
        isautoplay=false;
    }

}

document.querySelector('.js-score').innerHTML=`Wins :${score.wins} <br> Losses :${score.losses}<br> Tie :${score.tie} `;

function getRandom(){
    let randomNumber=Math.random();
    let compResult='';
    if(randomNumber>=0 && randomNumber<1/3){
        compResult='Rock';
    }else if(randomNumber>=1/3 && randomNumber<2/3){
        compResult='Paper';
    }else{
        compResult='Scissor';
    }
    return compResult;
}

function result(compResult, b){
    let res='';
    if(b==='Rock'){
        if(compResult=='Rock'){
            res='Tie';
        }else if(compResult=='Paper'){
            res='Lose';
        }else{
            res='Win';
        }
    }else if(b==='Paper'){
        if(compResult==='Rock'){
            res='Win';
        }else if(compResult==='Paper'){
            res='Tie';
        }else{
            res='Lose';
        }
    }else{
        if(compResult=='Rock'){
            res='Lose';
        }else if(compResult=='Paper'){
            res='Win';
        }else{
            res='Tie';
        }
    }
    if(res==='Win'){
        score.wins++;
    }else if(res==='Lose'){
        score.losses++;
    }else{
        score.tie++;
    }
    document.querySelector('.result').innerHTML=`You ${res}`;
    document.querySelector('.selected-options').innerHTML=`You chose <img src="${b}.png"> - Computer chose <img src="${compResult}.png">`;
    document.querySelector('.js-score').innerHTML=`Wins :${score.wins} <br> Losses :${score.losses}<br> Tie :${score.tie} `;
    localStorage.setItem('score',JSON.stringify(score));
}