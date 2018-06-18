var points  = JSON.parse(localStorage.myArray)
console.log(points);
var ques_list  = JSON.parse(localStorage.myArray2)
console.log(ques_list);
var data  = JSON.parse(localStorage.myArray3)
console.log(data);

var len = points.length;
var table = document.getElementById('table');
var score = document.getElementById('tables');
var total_score = 0;

for(var i=0;i<len;++i) {
  table.rows[i+1].cells[1].innerText = data[ques_list[i]]['title'];
  total_score += points[i];
  if(points[i]==5) {
    table.rows[i+1].cells[2].innerText = "CORRECT (( +5 ))";
  }
  else {
    table.rows[i+1].cells[2].innerText = "WRONG (( -5 ))";
  }
}
score.innerText = "SCORE: " + total_score;
