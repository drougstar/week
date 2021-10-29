// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const buttonFunction = function () {
  //Getting Information from user
  const date = {};
  date.year = Number(prompt('Please enter a year (2021-2022): '));
  date.month = Number(prompt('Please enter a month (1-12): '));
  date.day = Number(prompt('Please enter a day (1-31): '));
  //Adjusting inputs according to formulation for better reading
  const day = date.day,
    month = date.month - 1,
    monthInCalc = (month / 2) * 61 + day,
    monthInAdd = 0.5 * month,
    year = date.year;
  //Calculating the passed days
  let dayOfYear = 0;
  if (month < 2) dayOfYear = monthInCalc + monthInAdd;
  else if (month < 6) dayOfYear = monthInCalc - 3 + monthInAdd;
  else if (month < 12) dayOfYear = monthInCalc - 4 + monthInAdd;
  else alert('You fuck something up while entering date mate...');
  //Calculating the weeks
  let k = 0;
  if (year === 2021) k = 3;
  //3 days in last year's week
  else if (year === 2022) k = 2;
  //2 days in last year's week
  else alert('There can be only 2021 or 2022');

  //Adjusting the result for better reading
  const result = Math.round((dayOfYear - k) / 7),
    resultString = result + '. Week';

  //Writing the last result to the screen
  document.getElementById('Test').innerHTML = resultString;
};
/* 
const getInfo = function () {
    //Getting Information from user
    const date = {};
    date.year = Number(prompt('Please enter a year (2021-2022): '));
    date.month = Number(prompt('Please enter a month (1-12): '));
    date.day = Number(prompt('Please enter a day (1-31): '));
    return date;
  },
  calcPassedDays = function () {
    const date = getInfo();
    //Adjusting inputs according to formulation for better reading
    date.month -= 1;
    date.monthInCalc = (date.month / 2) * 61 + date.day;
    date.monthInAdd = 0.5 * date.month;
    //Calculating the passed days
    date.dayOfYear = 0;
    if (date.month < 2) date.dayOfYear = date.monthInCalc + date.monthInAdd;
    else if (date.month < 6)
      date.dayOfYear = date.monthInCalc - 3 + date.monthInAdd;
    else if (date.month < 12)
      date.dayOfYear = date.monthInCalc - 4 + date.monthInAdd;
    else alert('You fuck something up while entering date mate...');
    return date;
  },
  calcWeek = function () {
    const date = calcPassedDays();
    //Calculating the weeks
    let k = 0;
    if (date.year === 2021) k = 3;
    //3 days in last year's week
    else if (date.year === 2022) k = 2;
    //2 days in last year's week
    else alert('There can be only 2021 or 2022');

    //Adjusting the result for better reading
    const result = Math.round((date.dayOfYear - k) / 7),
      resultString = result + '. Week';

    //Writing the last result to the screen
    document.getElementById('Test').innerHTML = resultString;
  };
 */
