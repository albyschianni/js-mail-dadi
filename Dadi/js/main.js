

const mybutton = document.getElementById("my-button");

mybutton.addEventListener("click",

    function() {
        // genrazione numero casuale utente 
        let myNumber = Math.floor(Math.random() * 6) + 1;
        console.log("numero utente " + myNumber)

        // generazione numero random pc 
        let pcNumber = Math.floor(Math.random() * 6) + 1;
        console.log("numero pc " + pcNumber);

        if (myNumber > pcNumber){
            alert("L'utente ha vinto")
        } else if (myNumber < pcNumber){
            alert("Il pc ha vinto")
        } else if (myNumber = pcNumber){
            alert("Pareggio")
        }
    }
    )

// confronto



// button per vedere chi ha vinto 