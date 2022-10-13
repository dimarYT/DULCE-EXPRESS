function ir(){
    var c=1234;
    var u='ADMIN';
    if(document.form.contraseña.value==c && document.form.usuario.value==u){
    alert("Bienvenido Sr. Diego Chavarry");
    window.location="ventana.html";}
    else{
    alert("por favor ingresar usuario y/o contraseña correcta");
    
    }
    }