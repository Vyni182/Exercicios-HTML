let botao = document.querySelector("#botao");
botao.style.background="white";
let estaQuebrado=false;
let contaCliques=0;

botao.addEventListener("mouseover", e =>{
    if(!estaQuebrado){
         botao.style.background="green";
         botao.style.color="white";
    }
});

botao.addEventListener("mouseout", e =>{
    if(!estaQuebrado){
          botao.style.background="blue";
    }
});

botao.addEventListener("click", e =>{

    contaCliques++;

    if(contaCliques>=10){
        botao.style.background="red";
        botao.innerHTML="quebrei";
        estaQuebrado=true;
    }

});

