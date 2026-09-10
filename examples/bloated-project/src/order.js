import { v4 as uuidv4 } from 'uuid';

export function createOrder(customerName, amount) {
  const orderId = uuidv4();
  return {
    orderId,
    customerName,
    amount,
    createdAt: new Date().toISOString()
  };
}
