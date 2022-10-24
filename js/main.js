//entrega
//login


let intentos=3;
let palabraClave = "JesusCristo";
for (let i = 1; i<=intentos; i++ ){
    let ingresoUsuario= prompt("Ingresa la palabra clave")
    if(ingresoUsuario===palabraClave){
        console.log("Acertaste"); break
    }
}

//alert(Factura);
alert("Bienvenido a una experiencia inolvidable ");

let pin = 123456
console.log("Hola");
let nombre2 = prompt("Ingresa tu nombre de usuario");//string
let apellido2 = prompt("Ahora ingresa tu apellido de usuario");
//console.log("Hola "+nombre2+" "+ apellido2);
let numeroFavorito = prompt("Ahora ingresa tu numero favorito requerido");
numeroFavorito = parseInt (numeroFavorito);
console.log(numeroFavorito);


let clima= prompt("Quieres comenzar?");
if (clima == 'si') {
   console.log("comenzemos cuanto antes"); 
}else{"comenzemos en otro momento"};


if(nombre2 !="" || apellido2 !=""){
    console.log("Bienvenido/a " + nombre2 +"" + apellido2);
}else
console.log("los campos son requeridos");

let PIN="0000";

function login(){
    let ingresar = false;
for (let i = 2; i>=0; i-- ) {
    let userPIN= prompt ("ingresa tu PIN");   
    if (userPIN ===PIN) { alert ("Ingreso exitoso");
    ingresar = true;
    break;  
    } else{alert("Error te quedan" + i + "intentos")}
} return ingresar
}
let logueo= login();
console.log (logueo);


if (logueo){
    let scores = 001;
    let opcion= prompt ("Elige una opcion: \n1 -Scores \n2 -Usar scores acumulados \n3 -Agregar comprando \n4 -Turno \n -Presiona z para finalizar.")
    let Turneros= prompt ("Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
    while (opcion != "z" && opcion != "Z") {
     switch (opcion) {
        case "1":
         alert("Tienes $" + scores)   
         break;

            case "2":
                let usar= parseInt (prompt("ingresa el monto a usar"))
                if(usar <=scores){
                    scores = scores - usar;
                    alert ("Usaste $ " + usar + " Te quedan $ " + scores)
                }
                else{alert("Puntos insuficientes consigue mas")}
             break
                
     case "3":
     let agregar = parseInt(prompt("Ingresa el monto a agregar"))
     scores = scores + agregar;
     alert("Deposito excitoso, tu nuevo saldo es de $"+ scores );
     break;
        default:
            alert ("Opcion no valida")
            break;
            
            case "4":
         alert("Turnero") 
         let Turneros= prompt ("Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
         switch (Turneros) {
            case "1":
                let Estetica = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
                console.log("Elegiste Estetica " + Estetica);
                alert("Elegiste Estetica " + Estetica);
                break;
                case "2":
                    let Odontologia = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
                    console.log("Elegiste Odontologia " + Odontologia);
                    alert("Elegiste Odontologia " + Odontologia);
                break;
                case "3":
                    let Fisioterapia = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
                    console.log("Elegiste Fisioterapia " + Fisioterapia);
                    alert("Elegiste Fisioterapia " + Fisioterapia);
                break;
         
            default:alert ("Opcion no valida ")
                console.log("Opcion no valida");
                break;
                Turneros= prompt ("Le gustaria seguir ? \n Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
         }  
         break;
     }  opcion= prompt ("Le gustaria seguir ? \n Elegi una opcion: \n1 -Scores \n2 -Usar scores acumulados \n3 -Agregar \n4 -Turno \n -Presiona z para finalizar.")
    }
}
else{alert("FIN de la actividad")}
alert ("Gracias por tu particiapacion, si quieres ganar mas scores gratis puedes jugar en nuestra app, o en nuestros locales");

