$(function () {
  // Logs the current date at the top of the page
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format('dddd, MMMM D YYYY'));
  
  //An array that represents each hour for the schedule
  const curHour = [dayjs().hour(9), dayjs().hour(10), dayjs().hour(11), dayjs().hour(12), dayjs().hour(13), dayjs().hour(14), dayjs().hour(15), dayjs().hour(16)];
  
  // This is the location on the HTML that the schedule will go.
  const hourCont = document.querySelector("#curHour");

  // This conditional loop runs for each hour in the array, applying the CSS class selectors
  // and html for the shape of the divs using template literal. 
  for (i = 0; i < curHour.length; i++) {
    const hourDiv = 
    `<div id=${curHour[i].format("H")} class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${curHour[i].format("h A")} </div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>`
    hourCont.insertAdjacentHTML("beforeend", hourDiv);
  }

  // This function compares the current hour to the hour on the schedule,
  // changing background color where applicable.
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

  // This event listener waits for the user to click the save (floppy disk) button
  // related to the current time, and save the inputted text into local storage.
  // This data is stored and is there when the page is refreshed.
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
});
