//Call function on Load
window.onload=LatestQuizes;

//#region Latest Links Latest
var LatestLinkTexts= ["What is Black Fungus?", "What is White Fungus?", "What are hemorrhoids?"];
var LatestLinkHrefs= ["https://quiztohealth.com/Health/Fungus/Black_Fungus.html", "https://quiztohealth.com/Health/Fungus/Info_WhiteFungus.html", ""];

var LinkTexts= ["Am I an Introvert?", "Am I Bisexual?"];
var LinkHrefs= ["https://quiztohealth.com/Life/Personality/Are_You_An_Introvert.html", "https://quiztohealth.com/Life/Personality/Are_You_An_Introvert.html"];


function LatestQuizes()
{
    var LatestElement=document.getElementsByClassName("LatestLink_a");
    var LinkElement=document.getElementsByClassName("ShortLink_a");

    for(i=0; i<LatestElement.length; i++)
    {
        LatestElement[i].innerHTML=LatestLinkTexts[i];
        LatestElement[i].setAttribute("href",LatestLinkHrefs[i]);
    }
        

    for(j=0; j<LinkElement.length; j++)
    {
        LinkElement[j].innerHTML=LinkTexts[j];
        LinkElement[j].setAttribute("href",LinkHrefs[j]);
    }
}
//#endregion


//#region Life Links Latest

function LatestHealthQuizes()
{
    var LinkElement=document.getElementsByClassName("ShortLink_a");

    for(lh=0; lh<LinkElement.length; lh++)
    {
        LinkElement[lh].innerHTML=LinkTexts[lh];
        LinkElement[lh].href=LinkHrefs[lh];
    }
        
}
//#endregion