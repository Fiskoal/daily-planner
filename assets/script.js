// Declaring all buttons
//--------------------------

// addButtons
let addButton6 = $("#add-6");
let addButton7 = $("#add-7");
let addButton8 = $("#add-8");
let addButton9 = $("#add-9");
let addButton10 = $("#add-10");
let addButton11 = $("#add-11");
let addButton12 = $("#add-12");
let addButton13 = $("#add-13");
let addButton14 = $("#add-14");
let addButton15 = $("#add-15");
let addButton16 = $("#add-16");
let addButton17 = $("#add-17");

// saveButtons
let saveButton6 = $("#save-6");
let saveButton7 = $("#save-7");
let saveButton8 = $("#save-8");
let saveButton9 = $("#save-9");
let saveButton10 = $("#save-10");
let saveButton11 = $("#save-11");
let saveButton12 = $("#save-12");
let saveButton13 = $("#save-13");
let saveButton14 = $("#save-14");
let saveButton15 = $("#save-15");
let saveButton16 = $("#save-16");
let saveButton17 = $("#save-17");

// deleteButtons
let deleteButton6 = $("#delete-6");
let deleteButton7 = $("#delete-7");
let deleteButton8 = $("#delete-8");
let deleteButton9 = $("#delete-9");
let deleteButton10 = $("#delete-10");
let deleteButton11 = $("#delete-11");
let deleteButton12 = $("#delete-12");
let deleteButton13 = $("#delete-13");
let deleteButton14 = $("#delete-14");
let deleteButton15 = $("#delete-15");
let deleteButton16 = $("#delete-16");
let deleteButton17 = $("#delete-17");

// saved variables (to retrieve data from localStorage)
let saved6 = localStorage.getItem("saved6");
let saved7 = localStorage.getItem("saved7");
let saved8 = localStorage.getItem("saved8");
let saved9 = localStorage.getItem("saved9");
let saved10 = localStorage.getItem("saved10");
let saved11 = localStorage.getItem("saved11");
let saved12 = localStorage.getItem("saved12");
let saved13 = localStorage.getItem("saved13");
let saved14 = localStorage.getItem("saved14");
let saved15 = localStorage.getItem("saved15");
let saved16 = localStorage.getItem("saved16");
let saved17 = localStorage.getItem("saved17");

//addButton event listeners
//--------------------------

(addButton6).click(function () {
  let inputValue = $("#input-6").val();
  let list = $("#list-6");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-6").val("");
});

(addButton7).click(function () {
  let inputValue = $("#input-7").val();
  let list = $("#list-7");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-7").val("");
});

(addButton8).click(function () {
  let inputValue = $("#input-8").val();
  let list = $("#list-8");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-8").val("");
});

(addButton9).click(function () {
  let inputValue = $("#input-9").val();
  let list = $("#list-9");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-9").val("");
});

(addButton10).click(function () {
  let inputValue = $("#input-10").val();
  let list = $("#list-10");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-10").val("");
});

(addButton11).click(function () {
  let inputValue = $("#input-11").val();
  let list = $("#list-11");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-11").val("");
});

(addButton12).click(function () {
  let inputValue = $("#input-12").val();
  let list = $("#list-12");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-12").val("");
});

(addButton13).click(function () {
  let inputValue = $("#input-13").val();
  let list = $("#list-13");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-13").val("");
});

(addButton14).click(function () {
  let inputValue = $("#input-14").val();
  let list = $("#list-14");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-14").val("");
});

(addButton15).click(function () {
  let inputValue = $("#input-15").val();
  let list = $("#list-15");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-15").val("");
});

(addButton16).click(function () {
  let inputValue = $("#input-16").val();
  let list = $("#list-16");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-16").val("");
});

(addButton17).click(function () {
  let inputValue = $("#input-17").val();
  let list = $("#list-17");
  let newLi = document.createElement("li");

  newLi.textContent = inputValue;
  list.append(newLi);
  $("li").addClass("mt-1 mb-1");
  $("#input-17").val("");
});

//saveButton event listeners
//----------------------------

saveButton6.on("click", (function () {
  let list = $("#list-6");
  localStorage.setItem("saved6", list.html());
}));

saveButton7.on("click", (function () {
  let list = $("#list-7");
  localStorage.setItem("saved7", list.html());
}));

saveButton8.on("click", (function () {
  let list = $("#list-8");
  localStorage.setItem("saved8", list.html());
}));

saveButton9.on("click", (function () {
  let list = $("#list-9");
  localStorage.setItem("saved9", list.html());
}));

saveButton10.on("click", (function () {
  let list = $("#list-10");
  localStorage.setItem("saved10", list.html());
}));

saveButton11.on("click", (function () {
  let list = $("#list-11");
  localStorage.setItem("saved11", list.html());
}));

saveButton12.on("click", (function () {
  let list = $("#list-12");
  localStorage.setItem("saved12", list.html());
}));

saveButton13.on("click", (function () {
  let list = $("#list-13");
  localStorage.setItem("saved13", list.html());
}));

saveButton14.on("click", (function () {
  let list = $("#list-14");
  localStorage.setItem("saved14", list.html());
}));

saveButton15.on("click", (function () {
  let list = $("#list-15");
  localStorage.setItem("saved15", list.html());
}));

saveButton16.on("click", (function () {
  let list = $("#list-16");
  localStorage.setItem("saved16", list.html());
}));

saveButton17.on("click", (function () {
  let list = $("#list-17");
  localStorage.setItem("saved17", list.html());
}));

//deleteButton event listeners
//-------------------------------

deleteButton6.on("click", (function () {
  let list = $("#list-6");
  list.empty();
  localStorage.removeItem("saved6");
}));

deleteButton7.on("click", (function () {
  let list = $("#list-7");
  list.empty();
  localStorage.removeItem("saved7");
}));

deleteButton8.on("click", (function () {
  let list = $("#list-8");
  list.empty();
  localStorage.removeItem("saved8");
}));

deleteButton9.on("click", (function () {
  let list = $("#list-9");
  list.empty();
  localStorage.removeItem("saved9");
}));

deleteButton10.on("click", (function () {
  let list = $("#list-10");
  list.empty();
  localStorage.removeItem("saved10");
}));

deleteButton11.on("click", (function () {
  let list = $("#list-11");
  list.empty();
  localStorage.removeItem("saved11");
}));

deleteButton12.on("click", (function () {
  let list = $("#list-12");
  list.empty();
  localStorage.removeItem("saved12");
}));

deleteButton13.on("click", (function () {
  let list = $("#list-13");
  list.empty();
  localStorage.removeItem("saved13");
}));

deleteButton14.on("click", (function () {
  let list = $("#list-14");
  list.empty();
  localStorage.removeItem("saved14");
}));

deleteButton15.on("click", (function () {
  let list = $("#list-15");
  list.empty();
  localStorage.removeItem("saved15");
}));

deleteButton16.on("click", (function () {
  let list = $("#list-16");
  list.empty();
  localStorage.removeItem("saved16");
}));

deleteButton17.on("click", (function () {
  let list = $("#list-17");
  list.empty();
  localStorage.removeItem("saved17");
}));

//moment stuff

let dayEl = document.getElementById("currentDay");
let day = moment().format("dddd");
dayEl.textContent = day;

// let hour = moment().format("H");
let hour = 12;
let divs = $(".rounded");
console.log("it is hour " + hour);

divs.each(function(){
  // console.log(($(this).attr("id")));
  let hourInt = parseInt(hour);
  let divInt = parseInt($(this).attr("id"));

  if (divInt == hourInt) {
    $(this).addClass("bg-primary");
    $(this).addClass("text-light");
    console.log(divInt + " is equal to " + hourInt);
  } else if (divInt < hourInt) {
    $(this).addClass("bg-dark text-light");
    $(this).addClass("text-light");
    console.log(divInt + " is less than " + hourInt);
  } else if (divInt > hourInt) {
    $(this).addClass("bg-secondary");
    $(this).addClass("text-light");
    console.log(divInt + " is greater than " + hourInt);
  }
});

// init 
//--------

if (saved6) {
  $("#list-6").append(saved6);
}

if (saved7) {
  $("#list-7").append(saved7);
}

if (saved8) {
  $("#list-8").append(saved8);
}

if (saved9) {
  $("#list-9").append(saved9);
}

if (saved10) {
  $("#list-10").append(saved10);
}

if (saved11) {
  $("#list-11").append(saved11);
}

if (saved12) {
  $("#list-12").append(saved12);
}

if (saved13) {
  $("#list-13").append(saved13);
}

if (saved14) {
  $("#list-14").append(saved14);
}

if (saved15) {
  $("#list-15").append(saved15);
}

if (saved16) {
  $("#list-16").append(saved16);
}

if (saved17) {
  $("#list-17").append(saved17);
}