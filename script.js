var container = $(".container");
var tBody = $("tbody");
var date = $("#currentDay");
var timeDateToday = moment().format('dddd, MMMM Do YYYY').toString();
var time = moment().format("hh:mm:ss");

var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var todos = ["", "", "", "", "", "", "", "", ""];

date.append(timeDateToday);

if  (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));  
} else {
  localStorage.setItem("todos", JSON.stringify(todos));
}

var createRow = function() {
  for (i = 0; i < workHours.length; i++) {
    container.append(
      `<div class='row time-block' id='bs-row${i}'>
        <div class='col-md-2 hour' id='hours-row${i}'>${workHours[i]}</div>
          <div contenteditable='true' class='col-md-8 textarea' id='input-row${i}'>
            ${todos[i]}
          </div> 
          <button class='col md-2 save-button' id='save${i}'>
            <i class='fa fa-save' id='save-image${i}'></i>
          </button>
      </div>`
    );
  }
//   console.log(container[0])
//   for (i = 0; i < workHours.length; i++) {
//     var thisHour = container[0].children[i].children[0].textContent
//     if (thisHour) {

//     }
// }

};

createRow(workHours);

$(".save-button").click(function (event) {
  var buttonIndex = $(this)[0].id[4];
  var ind = `#input-row${buttonIndex}`;
  var inputContent = $(ind)[0].innerHTML;
  var todosTemp = JSON.parse(localStorage.getItem("todos"));
  todosTemp[buttonIndex] = inputContent;
  localStorage.setItem("todos", JSON.stringify(todosTemp));
  for (const todo of todosTemp) {
  }
});

var inputDiv = $("#input-row" + i);
if (time === workHours[i]) {
    inputDiv.css('background-color', 'red');
  } else if (time < workHours[i]) {
    inputDiv.css('background-color', 'grey');
  } else {
    inputDiv.css('background-color', 'green');
}