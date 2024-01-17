import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cw = new Cliente("Wagner", "11122233309");
const ca = new Cliente("Alice", "88822233309");

const ccw = new ContaCorrente(1001, cw);
ccw.depositar(100);
ccw.sacar(10);

const cca = new ContaCorrente(1001, ca);
cca.depositar(50);
cca.sacar(10);

ccw.transferir(10, cca);

console.log(ccw);
console.log(cca);