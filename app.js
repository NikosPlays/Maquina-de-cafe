# Maquina-de-cafe

Entradas (let)
Saldo; Nùmero $
Cafe;, azucar, te, numero. gramos
Leche; agua, numero. mililitros
Vaso; numero. unidades
Inventario monedas/inventario billetes, numero, unidades fisicas



Entradas (let)
let saldo = 0; // Nùmero $

Cafe, azucar, te, numero. gramos
let cafe = 1000; 
let azucar = 1000;
let te = 500;

Leche, agua, numero. mililitros
let leche = 3000; 
let agua = 5000;

Vaso, numero. unidades
let vaso = 100; 

Inventario monedas/inventario billetes, numero, unidades fisicas
let inventarioMonedas = 50; 
let inventarioBilletes = 20; 





Salidas (let)
Salida cafe/ Salida te. Indicar si se entrego
Dar cambio, numero $

Reglas de negocio
No acepta billetes de 1.000, 50.000, 100.000



Salida cafe/ Salida te. Indicar si se entrego
let salidaCafe = false; 
let salidaTe = false; 

Dar cambio, numero $
let darCambio = 0; 

Reglas de negocio
No acepta billetes de 1.000, 50.000, 100.000
const rechazarBillete1 = 1000;
const rechazarBillete2 = 50000;
const rechazarBillete3 = 100000;






Productos
Café Suave: 150ml agua + 5g café + 1 vaso.
Café Fuerte: 150ml agua + 10g café + 1 vaso.
Café con Leche: 75ml agua + 75ml leche + 8g café + 1 vaso.
Capuchino: 50ml agua + 100ml leche + 8g café + 1 vaso.
Té: 150ml agua + 5g té + 1 vaso.