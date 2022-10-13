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
  var SelectedAnswer=["0","0","0","0","0","0","0","0","0","0"];
  var QuestionAnswered=[false,false,false,false,false,false,false,false,false,false]
  var RightAnswers =["Q1A1", "Q2A2","Q3A2","Q4A1","Q5A5","Q6A1","Q7A2","Q8A1","Q9A2","Q10A5"]; 


//Q1------------------------------------------------------------Below
function SelectQ1A1()
{
  var a =document.getElementById("Q1A1");
  a.checked=true;
  SelectedAnswer[0]="Q1A1";
  QuestionAnswered[0]=true;
}
function SelectQ1A2()
{
  var a =document.getElementById("Q1A2");
  a.checked=true;
  SelectedAnswer[0]="Q1A2";
  QuestionAnswered[0]=true;
}
function SelectQ1A3()
{
  var a =document.getElementById("Q1A3");
  a.checked=true;
  SelectedAnswer[0]="Q1A3";
  QuestionAnswered[0]=true;
}
function SelectQ1A4()
{
  var a =document.getElementById("Q1A4");
  a.checked=true;
  SelectedAnswer[0]="Q1A4";
  QuestionAnswered[0]=true;
}


//Q2------------------------------------------------------------Below
function SelectQ2A1()
{
  var a =document.getElementById("Q2A1");
  a.checked=true;
  SelectedAnswer[1]="Q2A1";
}
function SelectQ2A2()
{
  var a =document.getElementById("Q2A2");
  a.checked=true;
  SelectedAnswer[1]="Q2A2";
}

//Q3------------------------------------------------------------Below
function SelectQ3A1()
{
  var a =document.getElementById("Q3A1");
  a.checked=true;
  SelectedAnswer[2]="Q3A1";
}
function SelectQ3A2()
{
  var a =document.getElementById("Q3A2");
  a.checked=true;
  SelectedAnswer[2]="Q3A2";
}
function SelectQ3A3()
{
  var a =document.getElementById("Q3A3");
  a.checked=true;
  SelectedAnswer[2]="Q3A3";
}

//Q4------------------------------------------------------------Below
function SelectQ4A1()
{
  var a =document.getElementById("Q4A1");
  a.checked=true;
  SelectedAnswer[3]="Q4A1";
}
function SelectQ4A2()
{
  var a =document.getElementById("Q4A2");
  a.checked=true;
  SelectedAnswer[3]="Q4A2";
}

//Q5------------------------------------------------------------Below
function SelectQ5A1()
{
  var a =document.getElementById("Q5A1");
  var b1 =document.getElementById("Q5A5");
  a.checked=true;
  b1.checked=false;
  SelectedAnswer[4]="Q5A1";
  CheckIfAllAnsSelected();
}
function SelectQ5A2()
{
  var a =document.getElementById("Q5A2");
  var b1 =document.getElementById("Q5A5");
  a.checked=true;
  b1.checked=false;
  SelectedAnswer[4]="Q5A2";
  CheckIfAllAnsSelected();
}
function SelectQ5A3()
{
  var a =document.getElementById("Q5A3");
  var b1 =document.getElementById("Q5A5");
  a.checked=true;
  b1.checked=false;
  SelectedAnswer[4]="Q5A3";
  CheckIfAllAnsSelected();
}
function SelectQ5A4()
{
  var a =document.getElementById("Q5A4");
  var b1 =document.getElementById("Q5A5");
  a.checked=true;
  b1.checked=false;
  SelectedAnswer[4]="Q5A4";
  CheckIfAllAnsSelected();
}
function SelectQ5A5()
{
  var a =document.getElementById("Q5A5");
  var b1 =document.getElementById("Q5A1");
  var b2 =document.getElementById("Q5A2");
  var b3 =document.getElementById("Q5A3");
  var b4 =document.getElementById("Q5A4");
  a.checked=true;
  b1.checked=false;
  b2.checked=false;
  b3.checked=false;
  b4.checked=false;
  SelectedAnswer[4]="Q5A5";
}
function CheckIfAllAnsSelected()
{
    var b1 =document.getElementById("Q5A1");
    var b2 =document.getElementById("Q5A2");
    var b3 =document.getElementById("Q5A3");
    var b4 =document.getElementById("Q5A4");
    if(b1.checked==true && b2.checked==true && b3.checked==true && b4.checked==true )
    {      
         var a =document.getElementById("Q5A5");
         a.checked=true;
         b1.checked=false;
         b2.checked=false;
         b3.checked=false;
         b4.checked=false;
         SelectedAnswer[4]="Q5A5";
    }
}

//Q6------------------------------------------------------------Below
function SelectQ6A1()
{
  var a =document.getElementById("Q6A1");
  a.checked=true;
  SelectedAnswer[5]="Q6A1";
}
function SelectQ6A2()
{
  var a =document.getElementById("Q6A2");
  a.checked=true;
  SelectedAnswer[5]="Q6A2";
}

//Q7------------------------------------------------------------Below
function SelectQ7A1()
{
  var a =document.getElementById("Q7A1");
  a.checked=true;
  SelectedAnswer[6]="Q7A1";
}
function SelectQ7A2()
{
  var a =document.getElementById("Q7A2");
  a.checked=true;
  SelectedAnswer[6]="Q7A2";
}

//Q8------------------------------------------------------------Below
function SelectQ8A1()
{
  var a =document.getElementById("Q8A1");
  a.checked=true;
  SelectedAnswer[7]="Q8A1";
}
function SelectQ8A2()
{
  var a =document.getElementById("Q8A2");
  a.checked=true;
  SelectedAnswer[7]="Q8A2";
}

//Q9------------------------------------------------------------Below
function SelectQ9A1()
{
  var a =document.getElementById("Q9A1");
  a.checked=true;
  SelectedAnswer[8]="Q9A1";
}
function SelectQ9A2()
{
  var a =document.getElementById("Q9A2");
  a.checked=true;
  SelectedAnswer[8]="Q9A2";
}

//Q10------------------------------------------------------------Below
function SelectQ10A1()
{
  var a =document.getElementById("Q10A1");
  a.checked=true;
  SelectedAnswer[9]="Q10A1";
}
function SelectQ10A2()
{
  var a =document.getElementById("Q10A2");
  a.checked=true;
  SelectedAnswer[9]="Q10A2";
}
function SelectQ10A3()
{
  var a =document.getElementById("Q10A3");
  a.checked=true;
  SelectedAnswer[9]="Q10A3";
}
function SelectQ10A4()
{
  var a =document.getElementById("Q10A4");
  a.checked=true;
  SelectedAnswer[9]="Q10A4";
}
function SelectQ10A5()
{
  var a =document.getElementById("Q10A5");
  a.checked=true;
  SelectedAnswer[9]="Q10A5";
}



//#endregion

var ThisQuestionNumber=0;
var TotalScore=0;

function NextQuestion()
{
  //for question 1-8
  if (ThisQuestionNumber<SelectedAnswer.length-2)
  {
    //Check if question answered
    if(SelectedAnswer[ThisQuestionNumber]=="0")
    {
    window.alert("Choose your Answer for Question "+ (ThisQuestionNumber+1) +" to proceed");
    }
    //check if selected answer is right
    else
    {
      //answer is right
    if(SelectedAnswer[ThisQuestionNumber]==RightAnswers[ThisQuestionNumber])
    {
      document.getElementById("Answer"+RightAnswers[ThisQuestionNumber]).style.backgroundColor="#7fff00";
      TotalScore++;
    }
    //answer is wrong
    else
    {
      document.getElementById("Answer"+SelectedAnswer[ThisQuestionNumber]).style.backgroundColor="#dc143c";
      document.getElementById("Answer"+RightAnswers[ThisQuestionNumber]).style.backgroundColor="#7fff00";
    }
    //display next question
    document.getElementsByClassName("ReasonBox")[ThisQuestionNumber].style.display="block";
    ThisQuestionNumber++;
    document.getElementsByClassName("QuestionBox")[ThisQuestionNumber].style.display="block";
    }
  }
  //for question 9
  else if(ThisQuestionNumber==SelectedAnswer.length-2)
  {
    //Check if question answered
    if(SelectedAnswer[ThisQuestionNumber]=="0")
    {
    window.alert("Choose your Answer for Question "+ (ThisQuestionNumber+1) +" to proceed");
    }
    //check if selected answer is right
    else
    {
      //answer is right
    if(SelectedAnswer[ThisQuestionNumber]==RightAnswers[ThisQuestionNumber])
    {
      document.getElementById("Answer"+RightAnswers[ThisQuestionNumber]).style.backgroundColor="#7fff00";
      TotalScore++;
    }
    //answer is wrong
    else
    {
      document.getElementById("Answer"+SelectedAnswer[ThisQuestionNumber]).style.backgroundColor="#dc143c";
      document.getElementById("Answer"+RightAnswers[ThisQuestionNumber]).style.backgroundColor="#7fff00";
    }
    //display next question
    document.getElementsByClassName("ReasonBox")[ThisQuestionNumber].style.display="block";
    ThisQuestionNumber++;
    document.getElementsByClassName("QuestionBox")[ThisQuestionNumber].style.display="block";
    document.getElementById("SubmitButton").innerHTML="Get Result";
    }
  }
  //for question 10
  else if(ThisQuestionNumber==SelectedAnswer.length-1)
  {
    //Check if question answered
    if(SelectedAnswer[ThisQuestionNumber]=="0")
    {
    window.alert("Choose your Answer for Question "+ (ThisQuestionNumber+1) +" to proceed");
    }
    //check if selected answer is right
    else
    {
      //answer is right
    if(SelectedAnswer[ThisQuestionNumber]==RightAnswers[ThisQuestionNumber])
    {
      document.getElementById("Answer"+RightAnswers[ThisQuestionNumber]).style.backgroundColor="#7fff00";
      TotalScore++;
    }
    //answer is wrong
    else
    {
      document.getElementById("Answer"+SelectedAnswer[ThisQuestionNumber]).style.backgroundColor="#dc143c";
      document.getElementById("Answer"+RightAnswers[ThisQuestionNumber]).style.backgroundColor="#7fff00";
    }
    //display next Options
    document.getElementsByClassName("ReasonBox")[ThisQuestionNumber].style.display="block";
    document.getElementById("SubmitButton").innerHTML="Re-Test";
    document.getElementById("FinalResult").style.display="block";
    document.getElementById("FinalResult").innerHTML="You got "+TotalScore+"/10 answers right.";
    ThisQuestionNumber++;
    }    
  }
  else
  {
    document.getElementById("SubmitButton").onclick=Refresh();
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