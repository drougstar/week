// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//between = explanation
//btn again = btn reset
// number = number
// left = left
//guess = input-day
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
// document.write(today);
document.querySelector(".day").value = dd;
document.querySelector(".month").value = mm;
document.querySelector(".year").value = yyyy;

document.querySelector(".number").style.display = "none";
document.querySelector("h2").style.display = "none";
const monthMaxDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const date = {};
document.querySelector(".enter").addEventListener("click", function () {
  //Getting Information from user
  if (
    Number(document.querySelector(".year").value) === 2021 ||
    Number(document.querySelector(".year").value) === 2022
  ) {
    date.year = Number(document.querySelector(".year").value);
  } else alert("There can be only 2021 or 2022");
  if (
    Number(document.querySelector(".month").value) > 0 &&
    Number(document.querySelector(".month").value) < 13
  ) {
    date.month = Number(document.querySelector(".month").value) - 1;
  } else alert("Please enter for month from 1 to 12");
  if (
    Number(document.querySelector(".day").value) > 0 &&
    Number(document.querySelector(".day").value) <= monthMaxDay[date.month]
  ) {
    date.day = Number(document.querySelector(".day").value);
  } else alert(`Please enter for day from 1 to ${monthMaxDay[date.month]}`);
  console.log(date.day, date.month, date.year);
  if (!date.day || !(date.month + 1) || !date.year) {
    document.querySelector("h2").textContent =
      "‼ Check if input values are correct ‼";
    document.querySelector("h2").style.display = "block";
    document.querySelector(".number").style.display = "none";
  } else {
    //Adjusting inputs according to formulation for better reading
    const day = date.day,
      month = date.month,
      monthInCalc = (month / 2) * 61 + day,
      monthInAdd = 0.5 * month,
      year = date.year;
    //Calculating the passed days
    let dayOfYear = 0;
    if (month < 2) dayOfYear = monthInCalc + monthInAdd;
    else if (month < 6) dayOfYear = monthInCalc - 3 + monthInAdd;
    else if (month < 12) dayOfYear = monthInCalc - 4 + monthInAdd;
    else alert("You fuck something up while entering date mate...");
    //Calculating the weeks
    let k = 0;
    //3 days in last year's week
    if (year === 2021) k = 2;
    //2 days in last year's week
    else if (year === 2022) k = 1;

    //Adjusting the result for better reading
    const result = Math.round((dayOfYear - k) / 7),
      resultString = result;

    //Writing the last result to the screen
    document.querySelector(".number").textContent = resultString;
    document.querySelector("h2").textContent = "Week Number:";
    document.querySelector(".number").style.display = "block";
    document.querySelector("h2").style.display = "block";
  }
});
