// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Logs the current date at the top of the page
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format('dddd, MMMM D YYYY'));

  //An array that represents each hour for the schedule
  const curHour = ["9", "10", "11", "12", "13", "14", "15", "16"];
  console.log(curHour);
  const hourCont = document.querySelector("#curHour");
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally 
  // add or remove the past, present, and future classes?  if/else statement
  for (i = 0; i < curHour.length; i++) {
    /* 
    run a function that takes the hour [i]
    and creates a div for that hour. div styled with the css class properties in html
    append that div to the page
    */

  //  function createDiv() {
    const hourDiv = 
    `<div id=${curHour[i]} class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${curHour[i]}</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>`
    hourCont.insertAdjacentHTML("beforeend", hourDiv);
    

  //  }
    
    /*
    run a function that compares the hour of [i] to the current hour
    if that hour is less than, turn grey, 
    if equal to, turn red, 
    if greater than, turn green
    */ 
  
  }
  function checkHour() {
    $(".time-block").each(function() {
      let timeVal = $(this).attr("id");
      let currentTime = dayjs().hour();
      if (timeVal == currentTime) {
        $(this).addClass("present");
      } else if (timeVal < currentTime) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }

    })
  }
  checkHour();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // function saveData() {
  //   console.log("yes");
  // };

  // const saveBtn = document.querySelectorAll('.btn');
  
  // saveBtn.addEventListener("click", saveData);
  // //
  $(".btn").on("click", function(){
    let divKey = $(this).parent().attr("id");
    let textValue = $(this).siblings(".description").val();
    localStorage.setItem(divKey, textValue);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
