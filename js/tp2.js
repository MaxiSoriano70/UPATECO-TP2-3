function sumar(){
    const NUMERO1 = parseInt(document.getElementById("numero1").value);
    const NUMERO2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");

    const SUMA = `Resultado: ${NUMERO1 + NUMERO2}`;
    resultado.textContent = SUMA;
}

function ordenar(){
    let elementos = [];
    let lista = [];
    for (let i=0; i<10; i++){
        elementos.push(document.getElementById(i.toString()));
        const VALOR = elementos[i].value;
        if (VALOR !== ""){
            lista.push(parseInt(VALOR));
        }else{
            lista.push(0);
        }
    }
    let respuesta = document.getElementById("listaordenada");
    if (validarLista(elementos)){
        lista.sort((a,b) => a - b);
        respuesta.textContent = `Lista Ordenada: ${lista.toString()}`;
        respuesta.style.color = 'var(--color-secundario)';
    }else{
        respuesta.textContent = "error en las casillas de rojo.";
        respuesta.style.color = "red";
    }
}

function validarLista(Elementos){
    flag = true;
    for (let i=0; i<10; i++){
        if (!(/^-?\d*$/.test(Elementos[i].value))){
            Elementos[i].style.borderColor = "red";
            flag = false;
        }
        else{
            Elementos[i].style.borderColor = "black";
        }
    }
    return flag;

}

function retornoFalso(){
    return false;
}

function filtrarPares(){
    const PARENT = document.getElementById("pares");
    elementos = [];
    lista = [];
    for (let i=0; i<10; i++){
        elementos.push(document.getElementById(`f${i.toString()}`));
        const VALOR = elementos[i].value;
        if (VALOR !== ""){
            lista.push(parseInt(VALOR));
        }else{
            lista.push(0);
        }
    }
    if (validarLista(elementos)){
        while (PARENT.firstChild){
            PARENT.removeChild(PARENT.firstChild);
        }
        for (const numero of lista){
            if (numero%2 === 0){
                li = document.createElement('li');
                li.textContent = numero.toString();
                PARENT.appendChild(li);
            }
        }
        if (PARENT.childElementCount === 0){
            p = document.createElement('p');
            p.textContent = "No hay numeros pares en el Vector";
            PARENT.appendChild(p);
        }
    }
}
function mayor(){
    let elementos = [];
    let lista = [];
    for (let i=0; i<10; i++){
        elementos.push(document.getElementById(`m${i.toString()}`));
        const VALOR = elementos[i].value;
        if (VALOR !== ""){
            lista.push(parseInt(VALOR));
        }else{
            lista.push(0);
        }
    }
    let respuesta = document.getElementById("mayor");
    if (validarLista(elementos)){
        respuesta.textContent = `Mayor: ${Math.max(...lista)}`;
        respuesta.style.color = 'var(--color-secundario)';
    }else{
        respuesta.textContent = "error en las casillas de rojo.";
        respuesta.style.color = "red";
    }
}

function sumaPrimos(){
    const NUMERO = document.getElementById("limitePrimo").value;
    if (/^-?\d*$/.test(NUMERO)){
        const CRIBA = createCriba(parseInt(NUMERO));
        const SUMA = CRIBA.reduce((acumulador, primo) => {
            return acumulador + primo;
        }, 0);
        const PRIMOS = document.getElementById("primos-menores-iguales");
        PRIMOS.textContent = `Primos <=: ${CRIBA.toString()}`;
        const RESPUESTA = document.getElementById("sumaPrimos");
        RESPUESTA.textContent = `Suma total: ${SUMA}`;
    }else{
        //codigo si se ingresa un numero distinto de un entero
    }
}

function createCriba(numero){
    let lista = [];
    if (numero > 1){
        lista = Array.from({ length: numero - 1 }, (_, index) => index + 2);
        let indexDivisor = 0;
        while (lista[indexDivisor] <= Math.sqrt(numero)){
            let index = indexDivisor + 1;
            while (index < lista.length){
                if (lista[index]%lista[indexDivisor] === 0){
                    lista.splice(index, 1);
                }else{
                    index++;
                }
            }
            indexDivisor++;
        }
    }
    return lista;
}

function cambiarColor(){
    const COLOR = document.getElementById("colorseleccionado").value;
    const PALETA = document.getElementById("paleta");
    const P = document.getElementById("cpaleta");
    const CPALETA = colorComplementario(COLOR);

    PALETA.style.backgroundColor = COLOR;
    PALETA.style.color = CPALETA;
}

function colorComplementario(color){
    const RED = parseInt(color.substring(1, 3), 16);
    const GREEN = parseInt(color.substring(3 ,5), 16);
    const BLUE = parseInt(color.substring(5 ,7), 16);

    const CRED = 255 - RED;
    const CGREEN = 255 - GREEN;
    const CBLUE = 255 - BLUE;

    const CHEX =
        "#" +
        CRED.toString(16).padStart(2, "0") +
        CGREEN.toString(16).padStart(2, "0") +
        CBLUE.toString(16).padStart(2, "0");
    return CHEX;
}

function mostrarOcultar(){
    const BOTON = document.getElementById("mostrarocultar");
    const DIV = document.getElementById("divparaocultar");
    if (BOTON.textContent !== "Mostrar"){
        BOTON.textContent = "Mostrar";
        DIV.style.display = "none";
    }else{
        BOTON.textContent = "Ocultar";
        DIV.style.display = "Flex";
    }
}

function checkNombre(nombre){
    if (/^[A-Za-z]+( [A-Za-z])*$/.test(nombre.value)){
        //codigo si el nombre esta bien
        return true;
    }else{
        //codigo si el nombre no esta bien
        return false;
    }
}

function checkTelefono(telefono){
    if (/^\d{3}-\d{2}-\d{7}$/.test(telefono.value)){
        //codigo si el numero esta bien
        return true;
    }else{
        //codigo si el numero no esta bien
        return false;
    }
}
function checkEdad(edad){
    if (edad.value >= 0){
        //codigo si la edad esta bien
        return true;
    }else{
        //codigo si la edad esta mal
        return false;
    }
}
function checkSexo(sexoM, sexoF){
    if (sexoM.checked || sexoF.checked){
        return true;
    }else{
        //codigo si no se selecciono ningun sexo
        return false;
    }
}
class Persona {
    //contador de personas ingresadas
    static contador = 0;

    constructor(nombre, apellido, edad, sexo, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.telefono = telefono;
        Persona.contador++;
    }

    addtable(){
        const tabla = document.getElementById("tablaPersonas");
        const TR = document.createElement('tr');
        tabla.appendChild(TR);
        const TH = document.createElement('th');
        TH.textContent = Persona.contador.toString();
        TR.appendChild(TH);
        const DATOS = [this.nombre, this.apellido, this.edad.toString(), this.sexo, this.telefono];
        for (let i=0; i<5; i++){
            let TD = document.createElement("td");
            TD.textContent = DATOS[i];
            TR.appendChild(TD);
        }
    }
}

function appendPersona(){
    const NOMBRE = document.getElementById("fname");
    const APELLIDO = document.getElementById("lname");
    const EDAD = document.getElementById("edad");
    const SEXOM = document.getElementById("sexoM");
    const SEXOF = document.getElementById("sexoF");
    const TELEFONO = document.getElementById("tel");
    //referencia a la tabla persona
    const TABLA = document.getElementById("tablaPersonas");
    if (checkNombre(NOMBRE)){
        if (checkNombre(APELLIDO)){
            if (checkEdad(EDAD)){
                if (checkSexo(SEXOM, SEXOF)){
                    if (checkTelefono(TELEFONO)){
                        let sexo = "Masculino";
                        if (SEXOF.checked){
                            sexo = "Femenino";
                        }
                        persona = new Persona(  NOMBRE.value,
                                                APELLIDO.value,
                                                EDAD.value,
                                                sexo,
                                                TELEFONO.value);
                        persona.addtable();
                        return true;
                    }else{
                        return false;
                    }
                }
            }else{
                checkSexo(SEXOM, SEXOF);
                checkTelefono(TELEFONO);
                return false;
            }
        }else{
            checkEdad(EDAD);
            checkSexo(SEXOM, SEXOF);
            checkTelefono(TELEFONO);
            return false;
        }
    }else{
        checkNombre(APELLIDO);
        checkEdad(EDAD);
        checkSexo(SEXOM, SEXOF);
        checkTelefono(TELEFONO);
        return false;
    }
}