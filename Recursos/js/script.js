//document.write("Hola mundo");
window.onload=function(){
    document.getElementById("mensajejs").innerHTML="hola mundo";  
   document.getElementById("hora").innerHTML=new Date();

}

let mivariable=10;
let suma=20+mivariable;
//window.alert("Esta es una alerta  "+suma);
//window.open("https://www.google.com","","windth=500,height=500,menubar=no");

function multiplica(mivariable,suma){
    let resultado=mivariable*suma;
   // window.alert("Multiplicacion:  "+resultado);
    document.write("Resultado de la multiplica:"+mivariable+"x"+suma+"="+resultado);
    return resultado;
}
//multiplica(mivariable,suma);

let a=1;
let b=3;
let c=2;
//function ecuacion(a, b, c){
 //   let x1, x2;
 //   x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
 ///   x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
 //   window.alert(a+"x^2"+"+"+b+"x"+c);
 //   window.alert("x1 = " + x1 + " x2 = " + x2);
//}
function ecuacion(a, b, c) {
    if (a === 0) {
        window.alert("Esto no es una ecuación cuadrática.");
        return;
    }

    let discriminante = Math.pow(b, 2) - 4 * a * c;

    if (discriminante < 0) {
        window.alert("La ecuación no tiene soluciones reales.");
        return;
    }

    let x1, x2;

    x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    window.alert(a + "x^2 + " + b + "x + " + c);
   window.alert("x1 = " + x1 + " x2 = " + x2);
   document.write("Ecuacion de segundo grado:"+a + "x^2 + " + b + "x + " + c+"=0");
   
    return ;
}
