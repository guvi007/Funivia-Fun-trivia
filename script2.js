var data = [
  {
    title: "Family",
    ques: "In a family there are several brothers and sisters. Every 2 boys have brothers as many as sisters and each girl has 2 brothers less than twice as many brothers as sisters. Now find the number of boys and girls.",
    option1: "8, 6",
    option2: "6, 4",
    option3: "6, 8",
    option4: "12, 10",
    answer: "8, 6"
  },
  {
    title: "Airlines",
    ques: "Which was the India’s first scheduled airline ?",
    option1: "Air India",
    option2: "Tata Airlines",
    option3: "Air Birla",
    option4: "Indian Airlines",
    answer: "Tata Airlines"
  },
  {
    title: "Color",
    ques: "Which is a primary color?",
    option1: "Green",
    option2: "Yellow",
    option3: "Orange",
    option4: "Pink",
    answer:  "Green"
  },
  {
    title: "Sports",
    ques: "If Football is called Cricket, Cricket is called Basketball, Basketball is called Badminton, Badminton is called Volleyball, Volleyball is called Hockey and Hockey is called Golf, then which of the following games is not played using a ball?",
    option1: "Volleyball",
    option2: "Basketball",
    option3: "Hockey",
    option4: "Cricket",
    answer:  "Volleyball"
  },
  {
    title: "Exams",
    ques: "M scores more run than N but less than P. Q scores more than N but less than M. Who is the lowest scorer?",
    option1: "M",
    option2: "N",
    option3: "P",
    option4: "Q",
    answer:  "N"
  },
  {
    title: "Classroom",
    ques: "Harish sits on the right of Satish. Satish sits between Manish and Girish. Who sits farthest to the right?",
    option1: "Satish",
    option2: "Girish",
    option3: "Harish",
    option4: "Manish",
    answer:  "Girish"
  },
  {
    title: "Answer this..",
    ques: "There is only one correct answer to this question. Which answer is this?",
    option1: "Answer A",
    option2: "Answer A or B",
    option3: "Answer B or C",
    option4: "None of the above",
    answer:  "Answer B or C"
  },
  {
    title: "Family",
    ques: "In a family there are husband wife, two sons and two daughters. All the ladies were invited to a dinner. Both sons went out to play. Husband did not return from office. Who was at home? ",
    option1: "Only wife was at home",
    option2: "All ladies were at home",
    option3: "Only sons were at home",
    option4: "No body was at home",
    answer:  "No body was at home"
  },
  {
    title: "Different",
    ques: "Find the odd one out",
    option1: "Vapour",
    option2: "Mist",
    option3: "Hailstone",
    option4: "Fog",
    answer:  "Vapour"
  },
  {
    title: "Spelling test",
    ques: "Which is the correct spelling of the following word",
    option1: "accommodate",
    option2: "accomodate",
    option3: "acommodate",
    option4: "acomodate",
    answer:  "accommodate"
  }
];

var ques_title = document.getElementById("ques_title");
var ques = document.getElementById("ques");
var op1 = document.getElementById("opt1");
var op2 = document.getElementById("opt2");
var op3 = document.getElementById("opt3");
var op4 = document.getElementById("opt4");
var option1 = document.getElementById("one");
var option2 = document.getElementById("two");
var option3 = document.getElementById("three");
var option4 = document.getElementById("four");
var submit = document.getElementById("submit");
var count = 0;
var len = data.length;
var cur_answer;
var array = new Array()
var points = new Array()
var ques_list = new Array()
for(var i=0;i<len;++i) {
	array.push(i);
}


function set_ques(number) {
  ques_title.innerText = data[number]['title']
  ques.innerText = data[number]['ques'];
  op1.innerText = data[number]['option1'];
  op2.innerText = data[number]['option2'];
  op3.innerText = data[number]['option3'];
  op4.innerText = data[number]['option4'];
  option1.value = data[number]['option1'];
  option2.value = data[number]['option2'];
  option3.value = data[number]['option3'];
  option4.value = data[number]['option4'];
  cur_answer = data[number]['answer'];
}

function get_ques() {
  var ran_value = Math.floor(Math.random() * len);
  len-=1;
  count+=1
  document.getElementById('que').innerText = "Question: " + count + "/10";
  ques_list.push(array[ran_value]);
  set_ques(array[ran_value]);
  array.splice(ran_value,1);
}

function abc() {
  //alert(array);
   url = 'index3.html' + encodeURIComponent(array);
   document.location.href = url;
}

get_ques();

var ans = "";
var ele = document.querySelectorAll(".btn-group-vertical > .btn");
for(var i=0; i<ele.length; i++){
    ele[i].addEventListener("click", function(){
        ans = this.value;
    });
}

submit.addEventListener("click",function(){
  if(ans == "") {
    alert("Please select an answer");
  }
  else {
    if(ans == cur_answer) {
      points.push(5);
    }
    else {
      points.push(-5);
    }
    // count = 10;
    if(count==10) {
      document.getElementById('random1').style.display = 'none';
      document.getElementById('random2').style.display = 'none';
      document.getElementById('random3').style.display = 'none';
      document.getElementById('random4').style.display = 'none';
      document.getElementById('random5').style.display = 'block';
      if( !window.localStorage)
        alert("Sorry, you're using an ancient browser");
      else {
          localStorage.myArray = JSON.stringify(points);
          localStorage.myArray2 = JSON.stringify(ques_list);
          localStorage.myArray3 = JSON.stringify(data);
      }
    }
    else {
      setTimeout(function(){
        ans="";
        get_ques();
        $('.play').removeClass('active');
      },500);
    }
  }
})
