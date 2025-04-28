// Текущая дата
const ts = new Date();

// Дата начала следующего года
const NextYear = new Date(ts.getFullYear() + 1, 0, 1); // Год+1, месяц январь (нумерация месяцев начинается с нуля), число 1

// Вычисляем разницу в миллисекундах
const DiffinMs = NextYear - ts;

// Переводим миллисекунды в дни
const DaysToNewYear = Math.ceil(DiffinMs / (1000 * 60 * 60 * 24));

// Выводим результат
console.log(`До Нового года осталось ${DaysToNewYear} дней.`);