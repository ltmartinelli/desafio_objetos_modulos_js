import Order from './models/order.js'
import * as orderService from './services/order-service.js'

const dados = document.getElementById("dados").innerHTML.split('\n');
const order = new Order(Number(dados[0]), Number(dados[1]), Number(dados[2]));
const total = orderService.total(order);

console.log(`Pedido Código ${order.code}`)
console.log(`Valor total: R$${total.toFixed(2)}`);