const btn = document.querySelector(".start-game");

const MONTHS = ["Январь", "Февраль"];

function getMonthByNumber() {
  const monthNumber = prompt("Введите число от 1-12");

  const month = MONTHS[monthNumber];

  if (!month) {
    console.log("Месяц не найден");
    return;
  }

  return month;
}
