$(document).ready(function(){
    let numeros="0123456789";
    let letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let todo = numeros + letras;
    const generarpasword = (longitud) => {
        let pasword = " ";
        for(let x = 0; x < longitud; x++){
            let aleatorio =Math.floor(Math.random() * todo.length);
            pasword += todo.charAt(aleatorio);
        }
        return pasword;
    }

    $("#Grfc").click(function(){
        var nm= $("#nom").val();
        var Apa= $("#Ap").val();
        var Ama= $("#Am").val();
        var fetch= $("#Fn").val();
        var nom=nm.substr(0, 1);
        var Ap=Apa.substr(0, 2);
        var Am=Ama.substr(0, 2);
        var anio=fetch.substr(2, 2);
        var mes=fetch.substr(5, 2);
        var dia=fetch.substr(8, 2);
        var rfc= Ap + Am + nom + anio + mes + dia + generarpasword(3);

     $("#rfc").val(rfc);
    })

//API

$("#IdU").click(function(){
    var id = document.getElementById("user").value;
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users/"+ id,
        dataType:"json",
        success:function(data){
            var nomb = "" + data.name +"";
            var email=  "" + data.email +"";
            $('#nomb').val(nomb);
            $('#email').val(email);
        }
   });
});

})