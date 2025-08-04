/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

interface User {
  username: string;
  readonly email: string;
  isOnline: boolean;
  age: number;
  isAdmin?: boolean;
}

const jacob: User = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  isOnline: false,
  age: 30,
};

const poly: User = {
  username: "Poly",
  email: "p.makko@mail.com",
  isOnline: true,
  age: 20,
  isAdmin: false,
};
