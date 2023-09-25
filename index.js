closebtn.addEventListener("click", () => {
    winner.style.display = "none"
  })
  let count = 100;
  let guess = 0;
  let randomn = Math.random() * 100;
  randomn = Math.floor(randomn);

  let num;


  console.log(guessnumber1)
  bttn.addEventListener("click", gen)


  function gen() {

    num = guessnumber1.value

    if (num < randomn) {
      result.innerHTML = "you entered wrong number "
      hint.innerHTML = "Hint:you should enter more than  " + num;
      console.log("you entered wrong number ");
      console.log("Hint:you should enter more than  ", num);

      count--;
      guess++;
    

    }
    else if (num > randomn) {
      result.innerHTML = "you entered wrong number "
      hint.innerHTML = "Hint:you should enter less than  " + num;
      console.log("you entered wrong number ");
      console.log("Hint:you should enter less than  ", num);

      count--;
      guess++;
      
    }

    else if (num == randomn) {
   
      winner.style.display = "block"
      console.log("Hurray! you win");
      console.log("you guess the correct number : ", randomn);

      document.getElementById('score').innerHTML = "Score:"+guess;
      
      
     
      console.log("Your number of guesses are ", guess);
    }
  }