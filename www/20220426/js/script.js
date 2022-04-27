var array = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9"
];

var turn = 0;

$(function () {
    $("h3").html("Turno " + (turn ? "X" : "O"));

    $("td").each((index, element) => {
        $(element).html(array[index]);
        $(element).data('id', index);
        $(element).click(listener);
    });

    function listener() {
        var id = $(this).data('id');

        if ($(this).hasClass("none")) {
            $(this).removeClass("none");
            $(this).html(turn ? "X" : "O");
            array[id] = turn ? "X" : "O";
            turn = 1 - turn;

            $("h3").html("Turno " + (turn ? "X" : "O"));

            var v = verifica();
            var count = 0;

            array.forEach((each) => {
                if (each == "X" || each == "O")
                    count++;
            })

            if (v) {
                $("h3").html("O " + v + " venceu!");
                $("td").off();
            } else if (count == 9) {
                $("h3").html("Deu VELHA!!!");
                $("td").off();
            }
        }
    }
});

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