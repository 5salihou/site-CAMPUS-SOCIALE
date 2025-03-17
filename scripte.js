function GticketB() {
    var choix =prompt("bienvenue dans la gestion des tickets de transport du bus.\n1 :calculez le nombre de tickets de votre somme\n2 : calculez l'argent du nombre de tickets que vouz-voulez");
    if(choix==1){
        var som=prompt("donnez le montant ");
        som/=50;
        alert("vous pouvez avoir "+Math.trunc(som) + " ticket(s)");
    }
    if(choix==2){
        var som=prompt("donnez le nombre de ticket ");
        som*=50;
        alert("le montant est de "+som + " fcfa");
    }
};
function GticketR(){
    var choix =prompt("bienvenue dans la gestion des tickets de restauration.\n1 : tickets petit dejeuner\n2 : tickets dejeuner et diner");
    if(choix==1){
        var choose =prompt("gestion tickets petit dejeuner\n1 :calculez le nombre de tickets de votre somme\n2 : calculez l'argent du nombre de tickets que vouz-voulez");
        if(choose==1){
           var som=prompt("donnez le montant ");
           som/=50;
           alert("vous pouvez avoir "+Math.trunc(som) + " ticket(s)");
        }
        if(choose==2){
           var som=prompt("donnez le nombre de ticket ");
           som*=50;
           alert("le montant est de "+som + " fcfa");
        }
    }
    if(choix==2){
        var choose =prompt("gestion tickets dejeuner et diner\n1 :calculez le nombre de tickets de votre somme\n2 : calculez l'argent du nombre de tickets que vouz-voulez");
        if(choose==1){
           var som=prompt("donnez le montant ");
           som/=100;
           /*som.toFixed(0); pour arondir par ou par defaut */
           alert("vous pouvez avoir "+Math.trunc(som) + " ticket(s)");
        }
        if(choose==2){
           var som=prompt("donnez le nombre de ticket ");
           som*=100;
           alert("le montant est de "+som + " fcfa");
        }
    }
};
function demandS() {
    alert("message recu\nnous allons prendre votre demande en charge!");
};
function contactez() {
    alert("nous avons recu votre message\npatienteez svp!")
}