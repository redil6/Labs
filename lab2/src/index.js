import { DateTime } from 'luxon';

// Получение текущего момента времени
const date = DateTime.local();

// Определение даты Нового Года следующего календарного года
const NextYear = DateTime.local().plus({ years: 1 }).set({ month: 1, day: 1 });

// Вычисление разницы в днях до наступления Нового Года
const DaysToNewYear = NextYear.diff(date).as('days');

// Вывод результата на консоль
console.log(`До Нового Года осталось ${Math.ceil(DaysToNewYear)} дней.`);npm 