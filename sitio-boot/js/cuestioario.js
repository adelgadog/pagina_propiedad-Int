window.addEventListener('load', iniciar, false);
function iniciar(){
    document.getElementById("ok").addEventListener('click', check, false);
}

function check() {
    var q1 = document.cuestionario.q1.value;
    var q2 = document.cuestionario.q2.value;
    var q3 = document.cuestionario.q3.value;
    var q4 = document.cuestionario.q4.value;
    var q5 = document.cuestionario.q5.value;
    var q6 = document.cuestionario.q6.value;
    var q7 = document.cuestionario.q7.value;
    var q8 = document.cuestionario.q8.value;
    var q9 = document.cuestionario.q9.value;
    var q10 = document.cuestionario.q10.value;
    var okey = 0;

    if(q1 == "true"){
        okey++;
    }
    if(q2 == "true"){
        okey++;
    }
    if(q3 == "true"){
        okey++;
    }
    if(q4 == "true"){
        okey++;
    }
    if(q5 == "true"){
        okey++;
    }
    if(q6 == "true"){
        okey++;
    }
    if(q7 == "true"){
        okey++;
    }
    if(q8 == "true"){
        okey++;
    }
    if(q9 == "true"){
        okey++;
    }
    if(q10 == "true"){
        okey++;
    }
    if(okey ==2){
        alert("Has acertado 2 de 10");
    }else if(okey == 3){
        alert("Has acertado 3 de 10");
    }else if(okey == 1){
        alert("Has acertado 1 de 10");
    }else if(okey == 4){
        alert("Has acertado 4 de 10");
    }else if(okey == 5){
        alert("Has acertado 5 de 10");
    }else if(okey == 6){
        alert("Has acertado 6 de 10");
    }else if(okey == 7){
        alert("Has acertado 7 de 10");
    }else if(okey == 8){
        alert("Has acertado 8 de 10");
    }else if(okey == 9){
        alert("Has acertado 9 de 10");
    }else if(okey == 10){
        alert("Has acertado todas, felicidades");
    }else if(okey == 0){
        alert("No has acertado ni una");
    }
}