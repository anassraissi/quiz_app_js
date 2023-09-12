const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];
  const gameScreen=document.querySelector('.game');
  const resultScreen=document.querySelector('.result');
  const question=document.querySelector('.question');
  const answersContainer=document.querySelector('.answers');
  const submit=document.querySelector('.submit');
  const play=document.querySelector('.play');

  let qIndex=0;
  let correctCount=0;
  let wrongCount=0;
  let selectedanswer;

  const playAgain=()=>{
     qIndex=0;
     correctCount=0;
     wrongCount=0;
    resultScreen.style.display="none";
    gameScreen.style.display="block";
    showQuestion(qIndex);
  }
  play.addEventListener('click',()=>{
    
     playAgain();
  })

  const showQuestion=(qNumber)=>{
    if(qNumber==data.length){
          showResult();

    }
    else{
      selectedanswer=null;
      question.textContent = data[qNumber].question;
      answersContainer.innerHTML = data[qNumber].answers
        .map(
          (item, index) =>
            `
      <div class="answer">
          <input type="radio" id="radio" name="answer" value=${item.isCorrect} />
          <label for="1">${item.answer}</label>
      </div>
      `
        ).join("");
        SelectedAnswer();
    }

  }
  const showResult=()=>{
    resultScreen.style.display="block";
    gameScreen.style.display="none";
    document.querySelector('.correct').textContent=`Correct answers : ${correctCount}`;
    document.querySelector('.wrong').textContent=`Wrong answers : ${wrongCount}`;
    document.querySelector('.score').textContent=`your score is : ${(correctCount-wrongCount)*10}`;

  }

  const SelectedAnswer=()=>{
    answersContainer.querySelectorAll('input').forEach(el=>{
        el.addEventListener('click',(e)=>{
            selectedanswer=e.target.value;
        })
    })
  }
  const submitAnswer=()=>{
      submit.addEventListener('click',()=>{

        if(selectedanswer !==null){
          selectedanswer==='true'? correctCount++ : wrongCount++;
          qIndex++;
          showQuestion(qIndex);  
        }
        else{
          alert('you should chose an answer');
            }
        })
    }
    
    showQuestion(qIndex);
    submitAnswer();