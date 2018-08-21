import eachDay from 'date-fns/each_day';

const getLastDay = month => {
  const monthWord = month.slice(0, 3);
  const isLeapYear = (month.slice(4)%4) === 0;
  console.log('leap year', isLeapYear);
  switch (monthWord) {
    case 'Jan':
      return 31;
    case 'Feb':
      return isLeapYear ? 29 : 28;
    case 'Mar':
      return 31;
    case 'Apr':
      return 30;
    case 'May':
      return 31;
    case 'Jun':
      return 30;
    case 'Jul':
      return 31;
    case 'Aug':
      return 31;
    case 'Sep':
      return 30;
    case 'Oct':
      return 31;
    case 'Nov':
      return 30;
    case 'Dec':
      return 31;
    default:
      return 'ERROR';
  }
};

const generateDateArray = month => {
  const lastDay = getLastDay(month.value);

  const monthStart = new Date(month.value.split(' ').join('1, 20'));
  const monthEnd = new Date(month.value.split(' ').join(`${lastDay}, 20`));

  const days = eachDay(monthStart, monthEnd);
  const dateArray = [];

  days.forEach(day => {
    const stringified = JSON.stringify(day);
    dateArray.push(stringified.slice(1, stringified.length - 1));
  });

  return dateArray;
};

export { generateDateArray };