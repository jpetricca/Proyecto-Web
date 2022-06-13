var num = 1;

function adelante(){
    num++;
    if(num>11)
        num=1;
    var foto = document.getElementById("foto");
    foto.src="imagenesSitio/fotogaleria"+num+".jpg";
}

function atras(){
    num--;
    if(num<1)
        num=11;
    var foto = document.getElementById("foto");
    foto.src="imagenesSitio/fotogaleria"+num+".jpg";
}

function reseteando(){
    document.getElementById("campos").reset();
}


function carga(){

    var area = document.campos.areaTexto;
    var apellido = document.campos.surname;
    var nombre = document.campos.name;
    var telefono = document.campos.tel;

        if(nombre.value.trim() == "" || nombre.value.trim().length <= 3 || !isNaN(nombre.value.trim()) || nombre.value.trim().length >= 30){
            alert('No es un nombre');
            nombre.focus();
            return false;
        }

        

        if(apellido.value.trim().length <= 3 || !isNaN(apellido.value.trim()) || apellido.value.trim().length > 30){
            alert('No es un apellido');
            apellido.focus();
            return false;
        }
    
        
        if(isNaN(telefono.value.trim())){
            alert('Valor ingresado invalido');
            telefono.focus();
            return false;
        }
        
        if (area.value.trim() == "" || area.value.trim().length <= 3 || !isNaN(nombre.value.trim())) {
            alert('Ingrese un comentario valido');
            area.focus();
            return false;
        }
        
        if(confirm("Los datos son correctos?")){
            alert("Gracias por completar el formulario");
        }else
        return false;

    }


function reseteando(){
    document.getElementById("campos").reset();
}