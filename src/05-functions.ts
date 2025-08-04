/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

function sum(a: string, b: string): void {
  console.log(a + b);
}

/***************** 1 *****************/
interface User {
  username: string;
  age: number;
}

const allUsers: User[] = [
  { username: "poly", age: 20 },
  { username: "jacob", age: 30 },
  { username: "mango", age: 25 },
];

function getUserNames(users: User[]): string[] {
  return users.map((user) => user.username);
}

const names = getUserNames(allUsers);

/***************** 2 *****************/
function greet(username: string, age?: number): void {
  if (age !== undefined) {
    console.log(`User: ${username}, age: ${age}`);
    //  username, age
  } else {
    console.log(`Hello ${username}, please enter your age`);
    // username
  }
}

greet("poly", 15);

greet("jacob");

/***************** 3 *****************/
interface UserWithMethod {
  username: string;
  greet: (message: string) => void;
}

const jacob: UserWithMethod = {
  username: "Jacob",
  greet: (message) => {
    console.log(message);
  },
};

jacob.greet("Welcome!");

/***************** 4 *****************/
interface Player {
  username: string;
  isOnline: boolean;
}

const allPlayers: Player[] = [
  { username: "poly", isOnline: false },
  { username: "jacob", isOnline: true },
  { username: "adrian", isOnline: false },
];

interface GamePlatform {
  getOnlinePlayers: (players: Player[]) => Player[];
  getPlayerNames: (players: Player[]) => string[];
}

const platform: GamePlatform = {
  getOnlinePlayers: (players) => {
    return players.filter((player) => player.isOnline);
  },

  getPlayerNames: (players) => {
    return players.map((player) => player.username);
  },
};

platform.getOnlinePlayers(allPlayers);
platform.getPlayerNames(allPlayers);
