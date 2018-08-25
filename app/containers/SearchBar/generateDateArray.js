import datefns from 'date-fns';

const generateDateArray = month => {
  const firstDay = datefns.startOfMonth(`1 ${month.value}`);
  const dayCount = datefns.getDaysInMonth(firstDay);
  const arr = [firstDay];
  for (let i = 1; i < dayCount; i++) {
    arr.push(datefns.addDays(arr[i - 1], 1));
  }
  return arr.map(x => datefns.format(x, 'MM/DD/YYYY'));
};

export { generateDateArray };
