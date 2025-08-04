/**
 * - Union
 * - Літеральні типи ( )
 */

let user: null | string;
user = null;
user = "Oleh";

/***************** 1 *****************/
// "pending", "shipped", "delivered", "canceled"
type Status = "pending" | "shipped" | "delivered" | "canceled";

let status: Status = "pending";
status = "canceled";
status = "delivered";

status = "test";

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

type Delivery = "drone" | "courier" | "pickup";
type DeliveryTime = "morning" | "afternoon" | "evening";

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: Delivery;
  deliveryTime: DeliveryTime;
}

const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
};

order.deliveryTime = "evening";
