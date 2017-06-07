/* 
 * @author enrico.verde
 */
function Gestore() {
    var operazioneTotale = "";
    var cliccato = "";
    var risultato = 0;
    var massimoValoreSchermo = 99999999999;
    $(document).ready(function () {
        $("button").click(function () {
            if (this.value >= 0 && this.value <= 9) {   //Salvataggio dei numeri  e delle operazioni digitati
                operazioneTotale += this.value;
                cliccato += this.value;
                $("#display").html(cliccato);
  
            }
            if (this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/") {
                cliccato ="";
                if (operazioneTotale.length - 1 !== "+" && operazioneTotale.length - 1 !== "-" && operazioneTotale.length - 1 !== "*" && operazioneTotale.length - 1 != "/") {
                    operazioneTotale += this.value;
                    $("#display").html("");
                }
            }
            if (this.value === "=") {    //Stampa del risultato
                $("#display").html("");
                risultato = eval(operazioneTotale);
                if (isNaN(risultato) || risultato === "Infinity" || risultato > massimoValoreSchermo) {  //Controllo del risultato
                    $("#display").html("Esagerato");
                } else {
                    $("#display").html(risultato);
                }
                risultato = "";
                operazioneTotale = "";
                cliccato = "";
            }
        });
    });
}
