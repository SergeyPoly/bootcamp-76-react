/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

/***************** 1 *****************/
const planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

/***************** 2 *****************/
interface Orders {
  email: string;
  total: number;
}

const orders: Orders[] = [
  { email: "j.mercer@mail.com", total: 120 },
  { email: "emily.watts@mail.com", total: 85 },
  { email: "liam.smith@mail.com", total: 200 },
  { email: "sophia.jones@mail.com", total: 150 },
  { email: "noah.brown@mail.com", total: 95 },
];

orders.filter((el) => {
  return el.total > 100;
});
