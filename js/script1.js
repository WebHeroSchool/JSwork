/*Урок 1
let hello;
hello='Привет';
alert('Hello world!')*/

//Урок 2
let num = '0';
let score;

/*const question1 = {
  question:'Кто и когда создал JS?',
  a: 'Брендан Эйх в 1995г',
  b: 'Гарри Поттер в 2003г',
  c: 'Дональд Трамп в 2019г'
};
const question2 = {
  question:'В лесу родилась она, кто?',
  a: 'Елочка',
  b: 'Пихта',
  c: 'Гладиолус'
}
const question3 = {
  question:'Кто сейчас изучает JS тут?',
  a: 'Катя Матвеева',
  b: 'Ментор',
  c: 'Кто-то'
}
const question4 = {
  question:'Кто проживает на дне океана?',
  a: 'Спанч Боб Сквепенс',
  b: 'Моя самооценка',
  c: 'Демократия'
}*/

const question1 = {
  question:'q1',
  correctAnswer: 'c',
};
const question2 = {
  question:'q2',
  correctAnswer: 'a',
}
const question3 = {
  question:'q3',
  correctAnswer: 'b',
}
const question4 = {
  question:'q4',
  correctAnswer: 'd',
}

//Урок 4
  //1
let array = [question1, question2];
array.forEach((array) => {
  console.log(question1.correctAnswer);
  console.log(question2.correctAnswer);
})

//2
array.unshift(question3);
const result = array.filter((array) => array.correctAnswer === 'c')
console.log(result);

  //3
array.shift();
array.push(question3, question4);

//Урок 5 из видео
function buildQuiz(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  num++;
  let question = document.getElementById('question');
  if(num <= array.length){
    num=0;
  }
  //question.innerHTML = array;
}
buildQuiz(array);

//Урок 6
const showResults = () => {
  const answerConteiners = quizcontainer.querySelectorAll('.answers');
  let numCorrect = 0;

  array.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerConteiners[questionNumber];
    const selector = `input [name=question${questionNumber}]:checked`;
    const userAnswer = (answerConteiner.querySelector(selector) || {}).value

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
    }
  });
};

//Урок 7
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

nextButton.addEventListener('click',(event) => {
console.log('next');
});

previousButton.addEventListener('click',(event) => {
console.log('previous');
});

var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myQuestions");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
       slideIndex = 1
 }
    if (n < 1) {
       slideIndex = slides.length
}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
