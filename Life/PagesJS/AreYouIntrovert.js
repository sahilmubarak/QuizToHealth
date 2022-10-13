/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function NavigationFunction() 
{
    var x = document.getElementById("myLinks");
    if (x.style.display === "block")
    {
      x.style.display = "none";
    }
    else
    {
      x.style.display = "block";
    }
  }
  

  //#region to select and store values of each quiestion by selecting and ticking
  var QuestionAnswered=[false,false,false,false,false,false,false,false,false,false]
  var QuestionAnswerValue =[0,0,0,0,0,0,0,0,0,0]; 


//Q1------------------------------------------------------------Below
function SelectQ1A1()
{
  var a =document.getElementById("Q1A1");
  a.checked=true;
  QuestionAnswered[0]=true;
  QuestionAnswerValue[0]=5;//points of answer
}
function SelectQ1A2()
{
  var a =document.getElementById("Q1A2");
  a.checked=true;
  QuestionAnswered[0]=true;
  QuestionAnswerValue[0]=0;//points of answer
}
function SelectQ1A3()
{
  var a =document.getElementById("Q1A3");
  a.checked=true;
  QuestionAnswered[0]=true;
  QuestionAnswerValue[0]=3;//points of answer
}
function SelectQ1A4()
{
  var a =document.getElementById("Q1A4");
  a.checked=true;
  QuestionAnswered[0]=true;
  QuestionAnswerValue[0]=1;//points of answer
}


//Q2------------------------------------------------------------Below
function SelectQ2A1()
{
  var a =document.getElementById("Q2A1");
  a.checked=true;
  QuestionAnswered[1]=true;
  QuestionAnswerValue[0]=5;
}
function SelectQ2A2()
{
  var a =document.getElementById("Q2A2");
  a.checked=true;
  QuestionAnswered[1]=true;
  QuestionAnswerValue[1]=3;
}
function SelectQ2A3()
{
  var a =document.getElementById("Q2A3");
  a.checked=true;
  QuestionAnswered[1]=true;
  QuestionAnswerValue[1]=0;
}
function SelectQ2A4()
{
  var a =document.getElementById("Q2A4");
  a.checked=true;
  QuestionAnswered[1]=true;
  QuestionAnswerValue[1]=0;
}

//Q3------------------------------------------------------------Below
function SelectQ3A1()
{
  var a =document.getElementById("Q3A1");
  a.checked=true;
  QuestionAnswered[2]=true;
  QuestionAnswerValue[2]=5;
}
function SelectQ3A2()
{
  var a =document.getElementById("Q3A2");
  a.checked=true;
  QuestionAnswered[2]=true;
  QuestionAnswerValue[2]=3;
}
function SelectQ3A3()
{
  var a =document.getElementById("Q3A3");
  a.checked=true;
  QuestionAnswered[2]=true;
  QuestionAnswerValue[2]=1;
}
function SelectQ3A4()
{
  var a =document.getElementById("Q3A4");
  a.checked=true;
  QuestionAnswered[2]=true;
  QuestionAnswerValue[2]=3;
}

//Q4------------------------------------------------------------Below
function SelectQ4A1()
{
  var a =document.getElementById("Q4A1");
  a.checked=true;
  QuestionAnswered[3]=true;
  QuestionAnswerValue[3]=5;
}
function SelectQ4A2()
{
  var a =document.getElementById("Q4A2");
  a.checked=true;
  QuestionAnswered[3]=true;
  QuestionAnswerValue[3]=3;
}
function SelectQ4A3()
{
  var a =document.getElementById("Q4A3");
  a.checked=true;
  QuestionAnswered[3]=true;
  QuestionAnswerValue[3]=0;
}
function SelectQ4A4()
{
  var a =document.getElementById("Q4A4");
  a.checked=true;
  QuestionAnswered[3]=true;
  QuestionAnswerValue[3]=4;
}

//Q5------------------------------------------------------------Below
function SelectQ5A1()
{
  var a =document.getElementById("Q5A1");
  a.checked=true;
  QuestionAnswered[4]=true;
  QuestionAnswerValue[4]=0;
}
function SelectQ5A2()
{
  var a =document.getElementById("Q5A2");
  a.checked=true;
  QuestionAnswered[4]=true;
  QuestionAnswerValue[4]=1;
}
function SelectQ5A3()
{
  var a =document.getElementById("Q5A3");
  a.checked=true;
  QuestionAnswered[4]=true;
  QuestionAnswerValue[4]=3;
}
function SelectQ5A4()
{
  var a =document.getElementById("Q5A4");
  a.checked=true;
  QuestionAnswered[4]=true;
  QuestionAnswerValue[4]=5;
}

//Q6------------------------------------------------------------Below
function SelectQ6A1()
{
  var a =document.getElementById("Q6A1");
  a.checked=true;
  QuestionAnswered[5]=true;
  QuestionAnswerValue[5]=5;
}
function SelectQ6A2()
{
  var a =document.getElementById("Q6A2");
  a.checked=true;
  QuestionAnswered[5]=true;
  QuestionAnswerValue[5]=2;
}
function SelectQ6A3()
{
  var a =document.getElementById("Q6A3");
  a.checked=true;
  QuestionAnswered[5]=true;
  QuestionAnswerValue[5]=0;
}

//Q7------------------------------------------------------------Below
function SelectQ7A1()
{
  var a =document.getElementById("Q7A1");
  a.checked=true;
  QuestionAnswered[6]=true;
  QuestionAnswerValue[6]=5;
}
function SelectQ7A2()
{
  var a =document.getElementById("Q7A2");
  a.checked=true;
  QuestionAnswered[6]=true;
  QuestionAnswerValue[6]=3;
}
function SelectQ7A3()
{
  var a =document.getElementById("Q7A3");
  a.checked=true;
  QuestionAnswered[6]=true;
  QuestionAnswerValue[6]=1;
}

//Q8------------------------------------------------------------Below
function SelectQ8A1()
{
  var a =document.getElementById("Q8A1");
  a.checked=true;
  QuestionAnswered[7]=true;
  QuestionAnswerValue[7]=0;
}
function SelectQ8A2()
{
  var a =document.getElementById("Q8A2");
  a.checked=true;
  QuestionAnswered[7]=true;
  QuestionAnswerValue[7]=2;
}
function SelectQ8A3()
{
  var a =document.getElementById("Q8A3");
  a.checked=true;
  QuestionAnswered[7]=true;
  QuestionAnswerValue[7]=5;
}

//Q9------------------------------------------------------------Below
function SelectQ9A1()
{
  var a =document.getElementById("Q9A1");
  a.checked=true;
  QuestionAnswered[8]=true;
  QuestionAnswerValue[8]=0;
}
function SelectQ9A2()
{
  var a =document.getElementById("Q9A2");
  a.checked=true;
  QuestionAnswered[8]=true;
  QuestionAnswerValue[8]=3;
}
function SelectQ9A3()
{
  var a =document.getElementById("Q9A3");
  a.checked=true;
  QuestionAnswered[8]=true;
  QuestionAnswerValue[8]=5;
}

//Q10------------------------------------------------------------Below
function SelectQ10A1()
{
  var a =document.getElementById("Q10A1");
  a.checked=true;
  QuestionAnswered[9]=true;
  QuestionAnswerValue[9]=0;
}
function SelectQ10A2()
{
  var a =document.getElementById("Q10A2");
  a.checked=true;
  QuestionAnswered[9]=true;
  QuestionAnswerValue[9]=1;
}
function SelectQ10A3()
{
  var a =document.getElementById("Q10A3");
  a.checked=true;
  QuestionAnswered[9]=true;
  QuestionAnswerValue[9]=3;
}
function SelectQ10A4()
{
  var a =document.getElementById("Q10A4");
  a.checked=true;
  QuestionAnswered[9]=true;
  QuestionAnswerValue[9]=4;
}
function SelectQ10A5()
{
  var a =document.getElementById("Q10A5");
  a.checked=true;
  QuestionAnswered[9]=true;
  QuestionAnswerValue[9]=5;
}
//#endregion

var TotalScore=0;

function GetResult()
{
  var State=true;
  for(i=0; i<QuestionAnswered.length; i++)
  {
    if(QuestionAnswered[i]===false)
    {
      State=false;
    }
    else
    {
      TotalScore+=QuestionAnswerValue[i];
    }
  }
  var ResultText="";
  if(State)
  {
    document.getElementsByClassName("FinalResult")[0].style.display="block";
    ResultText="Your answers say that you are "+ Math.round((TotalScore/50*100))+"% Introvert.";
    document.getElementById("SubmitButton").style.display="none";
    document.getElementById("UserResult").innerHTML=ResultText;
  }
  else
  {
    window.alert("Answer all questions to get your Result");
  }
    
}


function DisplayTopic1Links()
{
  var QuizMoreLink = document.getElementById("CardiovascularQuizLinks");
  if(QuizMoreLink.style.display==="block")
  {
    QuizMoreLink.style.display = "none";
  }
  else
  {
    QuizMoreLink.style.display = "block";
  }
}
function DisplayTopic2Links()
{
  var QuizMoreLink = document.getElementById("Covid19QuizLinks");
  if(QuizMoreLink.style.display==="block")
  {
    QuizMoreLink.style.display = "none";
  }
  else
  {
    QuizMoreLink.style.display = "block";
  }
}  

function Refresh()
{
  window.scrollTo(0, 480);
  location.reload(0);
}