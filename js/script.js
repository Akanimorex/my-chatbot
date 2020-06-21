var questions = [
    'What\'s your name ?',
    'Where are you from?',
    'What\'s your age?',
    'What project are you working on?',
    'How may I help you?',
    'It was nice talking you :)'
  ];
  var num = 0;
  
  var inputBox = document.querySelector("#ans");
  var output = document.querySelector("#result");
  output.innerHTML = questions[num];
  
  function showResponse() {
  var input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hello ${input} : )`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = `Nice, ${input} must be a great place!`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    output.innerHTML = `So you are were born in ${2020 - input} ... Cool!`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 3) {
    output.innerHTML = `Interesting Project @ ${input}!`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 4) {
    output.innerHTML = `Sorry, I was not made to do this... : ( `;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  }
  }
  }
  
  function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 5 ) {
    inputBox.style.display = "none";
  }
  }
  
  $(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
  })
  
  $( "#ans" ).focus();