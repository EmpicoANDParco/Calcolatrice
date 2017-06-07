/* 
 * @author enrico.verde
 */
function Gestore() {
    function aggiornaDisplay(carattereSucc) {
        var help = $("#display").value;
        if (help != "undefined") {
            $("#display").html(help + carattereSucc);
        }
    }
    var operando1 = "";
    var operando2 = "";
    var operatore = 0;
    var risultato = 0;
    $(document).ready(function () {
        $("button").click(function () {     
            if (this.value >= 0 && this.value <= 9) {   //Salvataggio dei numeri  e delle operazioni digitati
                if (operatore == 0) {
                    operando1 += this.value;
                    $("#display").html(operando1);
                } else {
                    operando2 += this.value;
                    $("#display").html(operando2);
                }
            }
            if (this.value == "±") {    //Operatore ±
                if(operando2 == 0){
                    operando1 = operando1 * -1;
                     $("#display").html(operando1);
                }else{
                    operando2 = operando2 * -1;
                     $("#display").html(operando2);
                }  
            }
            if (this.value == "+") {
                operatore = 1;
                $("#display").html("+");
            } else if (this.value == "-") {
                operatore = 2;
            } else if (this.value == "*") {
                operatore = 3;
            } else if (this.value == "/") {
                operatore = 4;
            }
            switch (operatore) {       //Operazioni della matematica fondamentale: addizione, sottrazione, motliplicazione, divisione
                case 1:
                    risultato = parseInt(operando1) + parseInt(operando2);
                    break;
                case 2:
                    risultato = operando1 - operando2;
                    break;
                case 3:
                    risultato = operando1 * operando2;
                    break;
                case 4:
                    risultato = parseFloat(operando1 / operando2);
                    risultato = parseFloat(risultato.toFixed(9));
                    parseFloat(risultato);
            }
            if (this.value == "=") {    //Stampa del risultato
                $("#display").html(risultato);
                operando1 = "";
                operando2 = "";
                operatore = 0;
                risultato = 0;
            }
        });
    });
}
