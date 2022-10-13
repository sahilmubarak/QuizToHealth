/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function NavigationFunction() {
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
  //#region Seperate function for every quiz link
  
  //#region Seperate function for every quiz link

  function DisplayTopic1Links()
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
  
  function DisplayTopic2Links()
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
  function DisplayTopic3Links()
  {
    var QuizMoreLink = document.getElementById("PilesQuizLinks");
    if(QuizMoreLink.style.display==="block")
    {
      QuizMoreLink.style.display = "none";
    }
    else
    {
      QuizMoreLink.style.display = "block";
    }
  }  
  //#endregion
  