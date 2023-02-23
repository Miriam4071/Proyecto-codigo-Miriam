class Persona {
     nombre;
     apellido;
     fecha_nacimiento;
     #correo;



     /**
      * 
      * @param {String} coreo 
      */
    actualizar_correo = function (correo) {
        this.#correo = correo
    }
    calcular_edad = function(){
        let fecha_actual = new Date();
        let fecha_nacimiento = new Date (yhis.#fecha_nacimiento);
        let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
        let mes = fecha_actual.getMonth() - fecha_nacimiento.getMonth();
    
        if(mes  < 0 ||(mes === 0 && fecha_actual.getDate()< fecha_nacimiento())){
            edad--;
        }
        return parseInt(edad);



    }
}