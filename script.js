(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Правильных ответов ${numCorrect} из ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Сколько серий Кибер-Шавермы на данный момент?",
      answers: {
        a: "5",
        b: "8",
        c: "7"
      },
      correctAnswer: "c"
    },
    {
      question: "Кто такая Ляля-Колобок?",
      answers: {
        a: "Лесная жительница",
        b: "Фанатка Rammstein",
        c: "Ночная Бабочка"
      },
      correctAnswer: "c"
    },
    {
      question: "Как называется любимая песня Главного Героя из Рок-Группы Шаровары?",
      answers: {
        a: "Ромб",
        b: "Кисель",
        c: "Туманный Альбинос",
        d: "Валенки"
      },
      correctAnswer: "d"
    },
    {
      question: "Сколько раз Главный Герой Кибер-Шавермы бывал в Кибер-Мире?",
      answers: {
        a: "2",
        b: "1",
        c: "0"
      },
      correctAnswer: "a"
    },
    {
      question: "Как называлась ОПГ из Полицейского с Копейки?",
      answers: {
        a: "ОПГ ДАУНОВ",
        b: "ОПГ Ореховская",
        c: "ОПГ Квазимоды"
      },
      correctAnswer: "b"
    },
    {
      question: "Что делал Матео(полицеский из Полицейского с Копейки) в Мире-Без-Людей?",
      answers: {
        a: "Кидал камни на Каменоломне",
        b: "Пытался позвонить маме",
        c: "Плакал без остановки"
      },
      correctAnswer: "a"
    },
    {
      question: "Как называется фабрика по производству шоколада Алёха-Из-Подовортни?",
      answers: {
        a: "Нет такого шоколада!",
        b: "Шоколадный зайц",
        c: "Ты дебил, а я придурок"
      },
      correctAnswer: "c"
    },
    {
      question: "Как зовут Главного Героя из ПРОГУЛОК?",
      answers: {
        a: "Граф Монте-Карло",
        b: "Граф Цуцырицын",
        c: "Граф-ик Функций"
      },
      correctAnswer: "b"
    },
    {
      question: "Что празднует философ из Разговора-с-Философом?",
      answers: {
        a: "Рождество",
        b: "Новый год",
        c: "День Рождения"
      },
      correctAnswer: "c"
    },
    {
      question: "Как назывался фургончик из Полицеского-с-Копейки?",
      answers: {
        a: "Сишко-Воз",
        b: "Сишко-Груз",
        c: "Сишко-Бам"
      },
      correctAnswer: "a"
    },
    {
      question: "Как звали пеккаря из Начальника-Камчатки?",
      answers: {
        a: "Мини-пеккарь Эгдыр",
        b: "Карабас",
        c: "Мини-пеккарь Джамал"
      },
      correctAnswer: "c"
    },
    {
      question: "Какой номер у партии Яблоко на бюллетене?",
      answers: {
        a: "1",
        b: "228",
        c: "130308"
      },
      correctAnswer: "b"
    },
    {
      question: "Какую шутку рассказал в полицейском участке Матео?",
      answers: {
        a: "Про Шахида и Оскар",
        b: "Про двух клоунов, которые уже час как...",
        c: "Про Мегаладона и Мегаладонь"
      },
      correctAnswer: "a"
    },
    {
      question: "Сколько грамм порошка одуванчиков спрятал Квазимодо в Полицеском-с-Копейки??",
      answers: {
        a: "600",
        b: "2000",
        c: "271"
      },
      correctAnswer: "a"
    },
    {
      question: "Под какую песню танцевал Градоправитель и Главный Герой из Кибер-Шавермы?",
      answers: {
        a: "Надо поле притоптать",
        b: "Du hast",
        c: "Шоу Люсьена"
      },
      correctAnswer: "a"
    },
    {
      question: "Через что прошёл житель Камчатки из Начальника-Камчатки??",
      answers: {
        a: "Через трубу",
        b: "Через Афган",
        c: "Через развал Кибер-Шавермы"
      },
      correctAnswer: "b"
    },
    {
      question: "Что может делать посох Пингвина-Убийцы??",
      answers: {
        a: "Магию",
        b: "Дыры",
        c: "Порталы"
      },
      correctAnswer: "c"
    },
    {
      question: "Какие направления прозвучали в рекламе ООО Арабские-Ночи??",
      answers: {
        a: "Москва-Сургут-Крым",
        b: "Москва-Сургут-Камчатка",
        c: "Москва-Владивосток-Крым"
      },
      correctAnswer: "a"
    },
    {
      question: "Какая продолжительность полёта у ООО Арабские-Ночи??",
      answers: {
        a: "3 минуты",
        b: "3 секунды",
        c: "23 часа"
      },
      correctAnswer: "a"
    },
    {
      question: "Что пришёл дегустировать Влад Маслинкин??",
      answers: {
        a: "Имба-Энерджи Квас",
        b: "Кибер-шаверму",
        c: "Лимонад Живчик"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();