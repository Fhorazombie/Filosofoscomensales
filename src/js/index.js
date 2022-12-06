import {Filosofo} from './filosofos.js';
import {Tenedor} from './tenedor.js';

var tenedor1 = new Tenedor("A");
var tenedor2 = new Tenedor("B");
var tenedor3 = new Tenedor("C");
var tenedor4 = new Tenedor("D");
var tenedor5 = new Tenedor("E");

let filosofo5 = new Filosofo("Simone",tenedor5,tenedor4);
let filosofo4 = new Filosofo("Slavoj",tenedor4,tenedor3);
let filosofo3 = new Filosofo("Karl",tenedor3,tenedor2);
let filosofo1 = new Filosofo("Aristoteles",tenedor1,tenedor5);
let filosofo2 = new Filosofo("Platon",tenedor2,tenedor1);



