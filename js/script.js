let questions = [
    'Hey i\'m J.A.R.V.I.S What\'s your name ?',
    'Where are you from?',
    'What\'s your age?',
    'What HNG project are you working on?',
    'Can I help you?',
    'It was nice talking you :)'
  ];
  let num = 0;
  
  let inputBox = document.querySelector("#ans");
  let output = document.querySelector("#result");
  output.innerHTML = questions[num];
  
  const showResponse =() => {
  let input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hello ${input} `;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Jarvis is typing...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = `Nice, ${input} must be a great place!`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Jarvis is typing...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    output.innerHTML = `So you are were born in ${2020 - input} ... you're in your peak!`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "jarvis is typing...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 3) {
    output.innerHTML = `Sounds awesome, i totally believe you can finish  Project  ${input}!`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Jarvis is typing...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 4) {
    output.innerHTML = `Ouch,this is beyond me, maybe you could ask my cousin Siri!... : ( `;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  }
  }
  }
  
  const changeQuestion=()=>{
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