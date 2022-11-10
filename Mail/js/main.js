// creo lista (array)

const lista = ["mario.rossi@gmail.com", "luca.bianchi@gmail.com", "alberto.schianni@gmail.com"];
console.log(lista); 

// utente inserisce email 

let myEmail = document.getElementById("mia-email");
var myButton = document.querySelector("button");


myButton.addEventListener("click",

    function (){
        let myEmail = document.getElementById("mia-email").value;
        console.log(myEmail);
    }
    
)

// controllo se l'email inserita (valore?) sia presente all'interno della lista 

for (let i = 0; i < lista.length; i++){
   
    if (myEmail == lista [i]){
        alert("sei presente")
        var presente = 1;
    }
}

if (presente !== 1){
    alert("Non risulti nella lista")
}

// output