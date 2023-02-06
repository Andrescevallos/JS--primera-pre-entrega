alert("Primera pre-entrega")

const usuarioCorrecto = "Andres";
const passworldCorrecto = "112233";

let nuevoUsuario = prompt("Ingrese usuario: ");
let nuevoPassworld = prompt("Ingrese su contraseña: ");

let valorDolarOficial = 194;
let valorDolarLibre = 378;
const valorPesos = "Nunca ahorres en pesos mi amigo/a"
let valorEuro = 204;
let valorReal = 37;
//Quise poner valores constantes pero, Argentina no lo entenderias.



if( usuarioCorrecto === nuevoUsuario && passworldCorrecto === nuevoPassworld){
    alert("Vamos a ver cuanto vale lo que esta debajo de tu colchon " + nuevoUsuario + " !!!")

    let cantidadMonedas = prompt("En cuantas monedas usted ahorra??")


    for(i = 0; i < cantidadMonedas; i++){
        let monedaAhorro = prompt("En que moneda ustes ahorra??")
        let valor = parseInt(prompt("Ingrese el valor!!"))

        switch(monedaAhorro){
            case "dolar":
                let ahorroEnDolarOficial = calcularEnValorOficial(valor);
                let ahorroEnDolarLibre = calcularEnValorLibre(valor);
                alert("Tu ahorro en dolar a valor oficial es " + ahorroEnDolarOficial + " pesos");
                alert("Tu ahorro en dolar a valor libre (blue) " + ahorroEnDolarLibre + " pesos");
                break;

            case "euro":
                let ahorroEnEuro = calcularEnEuros(valor);
                alert("Tu ahorro en euros es " + ahorroEnEuro + " pesos");
                break;

            case "real":
                let AhorroEnReales = calcularEnReales(valor)
                alert("Tus ahorros en reales es " + AhorroEnReales + " pesos");
                break;

            case "pesos":
                alert("Tus ahorros en pesos es " + valor + " pesos");
                alert(valorPesos);
                break;

            default:
                alert("Ingrese una moneda real por favor!!")
                break;
        }


    }

    

}

    else{
        alert("Usuario o contraseña incorrecta!!")
    }


    //FUNCIONES...

    function calcularEnValorOficial(valor){
        let montoOficial = (valor * valorDolarOficial)
        return montoOficial
    }

    function calcularEnValorLibre(valor){
        let montoLibre = (valor * valorDolarLibre)
        return montoLibre
    }

    function calcularEnEuros(valor){
        let montoEuro = (valor * valorEuro)
        return montoEuro
    }

    function calcularEnReales(valor){
        let montoReal = (valor * valorReal)
        return montoReal
    }

