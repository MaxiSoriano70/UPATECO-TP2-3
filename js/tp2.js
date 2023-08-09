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

    addtable(tabla){
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
    let cuerpotabla = document.getElementById("tablaPersonas");
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
                        if (cuerpotabla === null){
                            cuerpotabla = createTable();
                        }
                        persona.addtable(cuerpotabla);
                        return false;
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

function createTable(){
    const DIV = document.getElementById("divtabla");
    const TABLA = document.createElement("table");
    const THEAD = document.createElement("thead");
    const TBODY = document.createElement("tbody");
    TBODY.id = "tablaPersonas";
    DIV.appendChild(TABLA);
    TABLA.appendChild(THEAD);
    TABLA.appendChild(TBODY);
    const header = ["Numero", "Nombre", "Apellido", "Edad", "Sexo", "Telefono"];
    for (let head of header){
        let TH = document.createElement("th");
        TH.textContent = head;
        THEAD.appendChild(TH);
    }
    return TBODY;
}
function generarHTML(){
    const HTML = createHTML();
    const SECTION = createSectionForm();
    const BODY = HTML.querySelector("body");
    BODY.appendChild(SECTION);
    const CONTENIDOHTML =HTML.outerHTML;
    const VENTANA = window.open();
    VENTANA.document.open();
    VENTANA.document.write(CONTENIDOHTML);
    VENTANA.document.close();
}
function createHTML(){
    //creamos un html
    const HTML = document.createElement("html");
    //creamos y configuramos el head
    const HEAD = document.createElement("head");
        //creamos los meta
    const META1 = document.createElement("meta");
    const META2 = document.createElement("meta");
        //configuramos los metas
    META1.setAttribute('charset', "UTF-8");
    META2.setAttribute('name', 'viewport');
    META2.setAttribute('content', "width=device-width, initial-scale=1.0");
        //creamos el title
    const TITLE = document.createElement('title');
        //configuramos el title
    TITLE.textContent = "Ejercicio 9";
        //creamos un link para conectar el css
    const LINK = document.createElement('link');
        //configuramos el link
    LINK.setAttribute('rel', "stylesheet");
    LINK.setAttribute('href', 'css/style.css');
    //agregamos los metas al HEAD
    HEAD.appendChild(META1);
    HEAD.appendChild(META2);
    //agregamos el titulo al HEAD
    HEAD.appendChild(TITLE);
    //agregamos el link al HEAD
    HEAD.appendChild(LINK);
    //creamos el body
    const BODY = document.createElement("body");
        //creamos un HEADER
    const HEADER = document.createElement('header');
        //creamos el contenido del HEADER
    const IMG = document.createElement('img');
    const H1 = document.createElement('h1');
    const P = document.createElement('p');
        //configuramos la IMG
    IMG.setAttribute('src','img/logo_upateco.png');
    IMG.setAttribute('alt','logo');
        //configuramos H1
    H1.textContent = 'Grupo 9';
        //configuramos P
    P.textContent = 'Prof. Jorge Esteban Tevez';
        //agregamos los elementos IMG,H1 y P al HEADER;
    HEADER.appendChild(IMG);
    HEADER.appendChild(H1);
    HEADER.appendChild(P);
        //agregamos el HEADER al BODY
    BODY.appendChild(HEADER);
    //agregamos el HEAD y el BODY al HTML
    HTML.appendChild(HEAD);
    HTML.appendChild(BODY);
    return HTML;
}
function createSectionForm(){
    //creamos un SECTION
    const SECTION = document.createElement('section');
    //creamos un DIV
    const DIV = document.createElement('div');
        //configuramos el DIV
    DIV.setAttribute('class', 'desarrollo');
    //creamos un FORM
    const FORM = document.createElement('form');
        //configuramos el FORM
    FORM.setAttribute('action', '#');
    FORM.setAttribute('class', 'formulario-9');
        //creamos los label y input correspondientes
    const LABELN = document.createElement('label');
    const INPUTN = document.createElement('input');
    const LABELE = document.createElement('label');
    const INPUTE = document.createElement('input');
        //cofiguramos el LABELN
    LABELN.textContent = 'Nombre:';
    LABELN.setAttribute('for', 'nombre');
        //cofiguramos el LABELE
    LABELE.textContent = 'E-MAIL:';
    LABELE.setAttribute('for', 'mail');
        //configuramos el INPUTN
    INPUTN.setAttribute('type', 'text');
    INPUTN.setAttribute('id', 'nombre');
    INPUTN.setAttribute('placeholder', 'Nombre');
        //configuramos el INPUTE
    INPUTE.setAttribute('type', 'text');
    INPUTE.setAttribute('id', 'mail');
    INPUTE.setAttribute('placeholder', 'E-Mail');
        //creamos un boton para cargar los datos e imprimirlos en consola
    const ENVIAR = document.createElement('button');
        //configuramos el boton ENVIAR
    ENVIAR.textContent = "ENVIAR";
        //creamos un div como contenedor del boton
    const DIV2 = document.createElement('div');
        //configuramos el div
    DIV2.setAttribute('class','contenedor-button');
        //agregamos el boton ENVIAR AL DIV2
    DIV2.appendChild(ENVIAR);
    //AGREGAMOS LOS LABELS, LOS INPUTS Y EL DIV AL FORM
    FORM.appendChild(LABELN);
    FORM.appendChild(INPUTN);
    FORM.appendChild(LABELE);
    FORM.appendChild(INPUTE);
    FORM.appendChild(DIV2);
    //agregamos el FORM a el DIV
    DIV.appendChild(FORM);
    //agregamos el DIV al SECTION
    SECTION.appendChild(DIV);
    return SECTION;
}
