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

// second alternative
/* 



function makeFriendlyDates(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Convert a YYYY-MM-DD string into a date object.
  function convertDate(str) {
    // Split the dates to work independently.
    var dateStr = str.split('-');

    // Force the dates into Universal time to avoid issues due to timezones.
    return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

  }

  // Handles the case of the day's endings.
  function dateEnding(val) {
    switch (val) {
      case 1:
      case 21:
      case 31:
        return val + 'st';
      case 2:
      case 22:
        return val + 'nd';
      case 3:
      case 23:
        return val + 'rd';
      default:
        return val + 'th';
    }
  }

  // Checks for the real difference in months to avoid errors
  function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }

  //day diff
  function dayDiff(date1, date2) {
    if(date2.getUTCMonth() === date1.getUTCMonth()){
      return date1.getUTCDate()-date2.getUTCDate();
    }
    return 0;
  }

  // Get's the right month string.
  function getMonth(date) {
    return months[date.getUTCMonth()];
  }

  function displayDate() {

    // Handles same day
    if (date2.getTime() - date1.getTime() === 0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }

    // Handles same month
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and different year
    if (monthDiff(date1, date2) < 12 && date1.getUTCFullYear() !== date2.getUTCFullYear() ) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles same month but different year
    if (monthDiff(date1, date2) <= 12 && dayDiff(date1, date2)>0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and same year
    if (monthDiff(date1, date2) < 12) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles cases with more than 12 months apart.
    return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }

  var date1 = convertDate(str[0]);
  var date2 = convertDate(str[1]);

  return displayDate();

}

// test here
makeFriendlyDates(['2016-07-01', '2016-07-04']);

*/
// same case different approach
