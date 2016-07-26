function makeFriendlyDates(arr) {
  var dates = [];
  var data = [];
  var thisYear = new Date().getFullYear();
  for (var item in arguments) {
    dates.push(arguments[item]);
  }
  var first = dates[0][0].split('-');
  data.push(first);
  var second = dates[0][1].split('-');
  data.push(second);
  var year1 = data[0][0];
  var year2 = data[1][0];
  var month1 = data[0][1];
  var month2 = data[1][1];
  var date1 = data[0][2];
  var date2 = data[1][2];
  var msPerDay = 1000 * 60 * 60 * 24;  // 1000ms/s * sec * min * hrs
  var calDate1 = new Date(year1, month1, date1);
  var calDate2 = new Date(year2, month2, date2);
  var diff = calDate2 - calDate1;
  var dateDiff = Math.round(diff/msPerDay);
  month1 = getMonth(month1);
  month2 = getMonth(month2);
  date1 = getDate(date1);
  date2 = getDate(date2);
  var firstDate;
  var secondDate;
  var answer = [];
  var yearOne = parseInt(year1);
  if(year1 === year2 && month1 === month2 && date1 === date2) {
    firstDate = month1 + " " + date1 + ", " + year1;
    answer.push(firstDate);
  } else if (year1 === year2 && month1 === month2) {
    firstDate = month1 + " " + date1;
    secondDate = date2;
    answer.push(firstDate);
    answer.push(secondDate);
  } else if (year1 === year2) {
    firstDate = month1 + " " + date1 + ", " + year1;
    secondDate = month2 + " " + date2;
    answer.push(firstDate);
    answer.push(secondDate);
  } else if(yearOne === thisYear && dateDiff < 365) {
    firstDate = month1 + " " + date1;
    secondDate = month2 + " " + date2;
    answer.push(firstDate);
    answer.push(secondDate);
  } else if(dateDiff < 365) {
    firstDate = month1 + " " + date1 + ", " + year1;
    secondDate = month2 + " " + date2;
    answer.push(firstDate);
    answer.push(secondDate);
  } else {
    firstDate = month1 + " " + date1 + ", " + year1;
    secondDate = month2 + " " + date2 + ", " +  year2;
    answer.push(firstDate);
    answer.push(secondDate);
  }
  return answer;
}
function getMonth(month) {
  switch(month) {
    case '01':
      month = 'January';
      return month;
    case '02':
      month = 'February';
      return month;
    case '03':
      month = 'March';
      return month;
    case '04':
      month = 'April';
      return month;
    case '05':
      month = 'May';
      return month;
    case '06':
      return month;
    case '07':
      month = 'July';
      return month;
    case '08':
      month = 'August';
      return month;
    case '09':
      month = 'September';
      return month;
    case '10':
      month = 'October';
      return month;
    case '11':
      month = 'November';
      return month;
    case '12':
      month = 'December';
      return month;
  }
}
function getDate(date) {
  date = parseInt(date, 10);
  if(date === 1) {
    date = date + "st";
  } else if (date === 2) {
    date = date + "nd";
  } else if (date === 3) {
    date = date + "rd";
  } else if (date >= 4 && date <= 20) {
    date = date + "th";
  } else if (date === 21) {
    date = date + "st";
  } else if (date === 22) {
    date = date + "nd";
  } else if (date === 23) {
    date = date + "rd";
  } else if (date >= 24 && date < 31) {
    date = date + "th";
  } else if (date === 31) {
    date = date + "st";
  }
  return date;
}
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
