    //--var + seleccion de area de texto a encriptar --//
const texto_encriptar= document.querySelector(".txt_encriptador");
//--var + seleccion de area de texto a encriptado --//
const mensaje_encriptado= document.querySelector(".txt_encriptado");
let info= document.querySelector(".parrafo_info");
//--var + seleccion de boton encriptador --//
let btnEncriptador =document.getElementById("btnEncriptar");
//--var + seleccion de boton desencriptar --//
let btnDesencriptar =document.getElementById("btnDesencriptar");
//--var + seleccion de boton copiar --//
let btnCopiar= document.getElementById("botonCopiar");
//--var + seleccion de boton reiniciar--//
let botonReiniciar = document.getElementById("botonReiniciar");



//--crear funcion encriptar--//
btnEncriptador.addEventListener("click",()=>{

    //--crear funcion encriptar--//
    function encriptar(stringEncriptada){
        let matrizCodigo= [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                //--almacena en el parametro stringEncriptada el valor de (replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]
                //(replaceAll --reemplaza todo    (matrizCodigo[i][0]--var array[lee array, toma posicion 0 (ejemple'e')],
                //matrizCodigo[i][1]--var array[lee array, reemplaza posicion 1 (ejemple'enter')]//
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        
        }
        return stringEncriptada;
    }
        const textoEncriptado = encriptar(texto_encriptar.value);
        mensaje_encriptado.value=textoEncriptado;
        texto_encriptar.value="";
        mensaje_encriptado.style.backgroundImage="none";
        habilitarBotones("btnEncriptador");
       
})


btnDesencriptar.addEventListener("click",()=>{

    //--crear funcion encriptar--//
    function desencriptar(stringDesencriptada){
        let matrizCodigo= [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][0])){
                //--almacena en el parametro stringEncriptada el valor de (replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]
                //(replaceAll --reemplaza todo    (matrizCodigo[i][0]--var array[lee array, toma posicion 0 (ejemple'e')],
                //matrizCodigo[i][1]--var array[lee array, reemplaza posicion 1 (ejemple'enter')]//
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        
        }
        return stringDesencriptada;
    }
        const texto_Desencriptar = desencriptar(texto_encriptar.value);
        mensaje_encriptado.value=texto_Desencriptar;
        texto_encriptar.value="";
        mensaje_encriptado.style.backgroundImage="none";
        btnDesencriptar.disabled = true;
        habilitarBotones("btnDesencriptar");
      
        
            
        
})
       
//----//


function copiarTexto() {
    
     try {
        mensaje_encriptado.select();
        mensaje_encriptado.setSelectionRange(0, 99999); // Para dispositivos móviles

        const successful = document.execCommand('copy');

        if (successful) {
            console.log("Texto copiado exitosamente.");
            alert("Texto copiado al portapapeles.");
            habilitarBotones("btnCopiar");
            texto_encriptar.focus();
        } else {
            console.log("Falló la copia del texto.");
            alert("No se pudo copiar el texto.");
        }
    } catch (err) {
        console.error("Error al intentar copiar el texto: ", err);
        alert("Error al intentar copiar el texto.");
    }
}

        // Escucha el evento de entrada en el textarea
textarea.addEventListener('input', function() {
            if (textarea.value.trim() !== "") {
                // Mostrar el botón si el textarea no está vacío
              habilitarBotones("btnCopiar");
              habilitarBotones("btnDesencriptar");
       
            } else {
                // Ocultar el botón si el textarea está vacío
                btnEncriptador.style.display = 'none';
                 habilitarBotones("btnCopiar");
            }
});

function habilitarBotones(bton){
    if(bton=="btnEncriptador"){
            if (mensaje_encriptado.value.trim() !== "") {
                // Mostrar el botón si el textarea no está vacío
                btnCopiar.style.visibility= 'visible';
                mensaje_encriptado.disabled = !mensaje_encriptado.disabled;
                info.style.display='none';
                btnEncriptador.disabled = true;
                btnDesencriptar.disabled = true;
                texto_encriptar.disabled = true;
               
            } else {
                // Ocultar el botón si el textarea está vacío
                btnCopy.style.visibility= 'hidden';
                btnCopiar.disabled = !botonCopiar.disabled;
                btnDesencriptar.disabled = !btnDesencriptar.disabled;
            }
       
       
     }
    else if(bton=="btnDesencriptar"){
         if (mensaje_encriptado.value.trim() !== ""){
        // botonReiniciar.style.visibility='visible';
        // btnCopy.style.visibility='hidden';
        // botonReiniciar.style.visibility='visible';
        // btnDesencriptar.disabled = true;
        info.style.display='none';
        botonReiniciar.style.visibility='visible';
        btnCopy.style.visibility='hidden';
        botonReiniciar.style.visibility='visible';
        btnDesencriptar.disabled = true;
         }
        if(btnDesencriptar=='clic'){
            document.getElementById("btnDesencriptar").disabled=true;
        }
    }
    else if(bton=="btnCopiar")
    {
        if (mensaje_encriptado.value.trim() !== "") {
                // Mostrar el botón si el textarea no está vacío
                btnCopiar.style.visibility= 'hidden';
                mensaje_encriptado.disabled = true;
                info.style.display='none';
                btnEncriptador.disabled = true;
                btnDesencriptar.disabled = false ;
                texto_encriptar.disabled = false;
                mensaje_encriptado.value="";
                mensaje_encriptado.style.backgroundImage="url(/imagenes/Muñeco.png)";
                info.style.display="block";
            } else {
                // Ocultar el botón si el textarea está vacío
                btnCopy.style.visibility= 'hidden';
                btnCopiar.disabled = !botonCopiar.disabled;
                 btnDesencriptar.disabled = !btnDesencriptar.disabled;
            }
    }
         

}

function reiniciar(){
    mensaje_encriptado.style.backgroundImage="url(/imagenes/Muñeco.png)";
    mensaje_encriptado.value="";
    info.style.display="block";
    botonReiniciar.style.visibility='hidden';
    btnCopy.style.visibility='hidden';
    document.querySelector(".txt_encriptador").disabled=false;
    mensaje_encriptado.value="";
    document.getElementById("btnEncriptar").disabled=false;
    btnEncriptador.disabled = false;
    btnDesencriptar.disabled = true ;
    document.getElementById("btnDesencriptar").disabled=true;
}

reiniciar.addEventListener();
copiarTexto.addEventListener( 'click', function() {clipboard();} );
