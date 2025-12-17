import _ from "lodash";
const compliments = [
  "Ти сьогодні виглядаєш чудово!",
  "У тебе класне почуття гумору",
  "Ти дуже креативна людина",
  "Ти можеш досягти всього, що захочеш",
  "Світ кращий, бо в ньому є ти",
];
function getRandomCompliment() {
  const index = _.random(0, compliments.length - 1);
  return compliments[index];
}
export default getRandomCompliment;
