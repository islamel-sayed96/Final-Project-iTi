// error: not define .... not un define => this is data type.

var buttonsView1 = document.querySelector('.view1');
var buttonsView2 = document.querySelector('.view2');
var buttonsView3 = document.querySelector('.view3');
var buttonsView4 = document.querySelector('.view4');
var questions= document.querySelectorAll('.question');

  buttonsView1.addEventListener("click", function () {
    document.querySelector(".question1").style.border = "1px solid #aaa";
    document.querySelector(".answer1").innerText =
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quklcjnhsdlkcnasklcnalcjnalcjasnlcjnascljasncjlascnasjlcnasjlcnasljcnasjlcbasjlcbasodjhwdo";
  });
  buttonsView2.addEventListener("click", function () {
    document.querySelector(".question2").style.border = "1px solid #aaa";
    document.querySelector(".answer2").innerText =
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quklcjnhsdlkcnasklcnalcjnalcjasnlcjnascljasncjlascnasjlcnasjlcnasljcnasjlcbasjlcbasodjhwdo";
  });
  buttonsView3.addEventListener("click", function () {
    document.querySelector(".question3").style.border = "1px solid #aaa";
    document.querySelector(".answer3").innerText =
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quklcjnhsdlkcnasklcnalcjnalcjasnlcjnascljasncjlascnasjlcnasjlcnasljcnasjlcbasjlcbasodjhwdo";
  });
  buttonsView4.addEventListener("click", function () {
    document.querySelector(".question4").style.border = "1px solid #aaa";
    document.querySelector(".answer4").innerText =
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quklcjnhsdlkcnasklcnalcjnalcjasnlcjnascljasncjlascnasjlcnasjlcnasljcnasjlcbasjlcbasodjhwdo";
  });


