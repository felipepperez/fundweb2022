var array = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9"
];

var cols = document.getElementsByTagName("td");

var turn = 0;
var title = document.getElementsByTagName("h3")[0];
title.innerHTML = "Turno " + (turn ? "X" : "O");

console.log(title);
//console.log(cols);
for (var i = 0; i < cols.length; i++) {
    cols[i].innerHTML = array[i];
    cols[i].setAttribute('data-id', i);
    cols[i].addEventListener("click", listener, false);
}

function listener() {
    var id = this.getAttribute('data-id');
    if (this.classList.contains('none')) {
        this.classList.remove('none');
        this.innerHTML = turn ? "X" : "O";
        array[id] = this.innerHTML;
        turn = 1 - turn;
        title.innerHTML = "Turno " + (turn ? "X" : "O");
    }
    var v = verifica();
    var count = 0;
    array.forEach((each) => {
        if (each == "X" || each == "O")
            count++;
    })
    if (v) {
        title.innerHTML = "O " + v + " venceu!";
        for (var x = 0; x < cols.length; x++) {
            cols[x].removeEventListener("click", listener, false);
        }
    } else if (count == 9) {
        title.innerHTML = "Deu Velha!!!";
        for (var x = 0; x < cols.length; x++) {
            cols[x].removeEventListener("click", listener, false);
        }
    }
}

function verifica() {
    //Comparações Horizontais
    if (array[0] == array[1] && array[1] == array[2])
        return array[0];

    if (array[3] == array[4] && array[4] == array[5])
        return array[3];

    if (array[6] == array[7] && array[7] == array[8])
        return array[6];

    //Comparações Verticais
    if (array[0] == array[3] && array[3] == array[6])
        return array[0];

    if (array[1] == array[4] && array[4] == array[7])
        return array[1];

    if (array[2] == array[5] && array[5] == array[8])
        return array[2];

    //Comparações Diagonais
    if (array[0] == array[4] && array[4] == array[8])
        return array[0];

    if (array[2] == array[4] && array[4] == array[6])
        return array[2];

    return false;
}