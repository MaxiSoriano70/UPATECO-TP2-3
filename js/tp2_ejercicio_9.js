function mostrar_datos_x_consola(){
    const NOMBRE = document.getElementById('nombre');
    const MAIL = document.getElementById('mail');
    if(NOMBRE.value!=='' && MAIL.value!==''){
        console.log('Nombre: '+NOMBRE.value);
        console.log('Mail: '+MAIL.value);
        NOMBRE.value='';
        MAIL.value='';
    }
}