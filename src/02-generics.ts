/**
 * Узагальнені типи (generics)
 */

/* 1 */
function getFirstElement(arr) {
  return arr[0];
}

getFirstElement([10, 20, 30]); // 10
getFirstElement(["Alice", "Bob"]); // "Alice"

/* 2 */
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const mixedNums = shuffle([1, 2, 3, 4]);
const mixedWords = shuffle(["apple", "banana", "cherry"]);

/* 3 */
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage("user", "Jacob Peterson");
saveToStorage("clicks", 8);

function loadFromStorage(key) {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item);
  }
  return null;
}

const user = loadFromStorage("user");
const clicks = loadFromStorage("clicks");

/* 4 */
function max(array, selector) {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
];

const mostExpensive = max(products, (p) => p.price);
// → { name: "Laptop", price: 1000 }
