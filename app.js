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






Café Suave: 150ml agua + 5g café + 1 vaso.
const suaveAgua = 150;
const suaveCafe = 5;

Café Fuerte: 150ml agua + 10g café + 1 vaso.
const fuerteAgua = 150;
const fuerteCafe = 10;

Café con Leche: 75ml agua + 75ml leche + 8g café + 1 vaso.
const lecheAgua = 75;
const lecheCantidad = 75;
const lecheCafe = 8;

Capuchino: 50ml agua + 100ml leche + 8g café + 1 vaso.
const capuAgua = 50;
const capuLeche = 100;
const capuCafe = 8;

Té: 150ml agua + 5g té + 1 vaso.
const teAgua = 150;
const teGramos = 5;



// Ingreso de billete de cada cliente
let billeteIngresado = 2000;
let saldoCliente = 2000;


// Valida si el billete ingresado es exactamente el billete de la regla de negocio que no esta permitido
let esBilleteRechazado = billeteIngresado === noAcepta1000;


// Valida si el saldo actual es diferente de cero (para saber si ya hay dinero ingresado)
let maquinaConSaldo = saldo != 0;


// Verifica si el agua de la máquina es menor a la que pide la receta del Café Suave
let faltaAguaParaSuave = agua < suaveAgua;


// Verifica si el saldo que hay es suficiente para comprar un Capuchino (Supongamos que vale 2500)
let alcanzaParaCapuchino = saldo >= 2500;


// Activa una alerta en pantalla si quedan 5 vasos o menos
let alertaPocosVasos = vaso <= 5;


// Menú es digital y el cliente presiona el botón "1" (String)
let botonPresionado = "1";
let seleccionoSuave = botonPresionado == 1;




//Productos con inventario (restas de inventario)


// CAFÉ SUAVE 
if (opcionSeleccionada == "Cafe Suave") {
    agua = agua - suaveAgua;       // Resta 150 ml de agua
    cafe = cafe - suaveCafe;       // Resta 5g de café
    vaso = vaso - 1;               // Resta 1 vaso
    salidaCafe = true;             // Activa la salida de café
    console.log("Preparando Café Suave...");
    }