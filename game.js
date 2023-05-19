var p1 = localStorage.getItem("p1")
var p2 = localStorage.getItem("p2")

p1s = 0
p2s = 0

document.getElementById("player1").innerHTML = p1 + " - "
document.getElementById("player2").innerHTML = p2 + " - "

document.getElementById("p1_s").innerHTML = p1s
document.getElementById("p2_s").innerHTML = p2s

document.getElementById("pq").innerHTML = "Player Question = " + p1
document.getElementById("pa").innerHTML = "Player Answer = " + p2

function send() {
    number1 = document.getElementById("num1").value
    number2 = document.getElementById("num2").value
    actual_answer = parseInt(number1) * parseInt(number2)
    question_number = "<h3>" + number1 + " X " + number2 + "</h3>";
    input_box = "<br>Answer : <input type='text' id='input_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

qt = "p1"
at = "p2"

function check() {
    get_answer = document.getElementById("input_box").value
    if (get_answer == actual_answer) {
        if (at == "p1") {
            update_p1s = p1s + 1;
            document.getElementById("p1_s").innerHTML = update_p1s;
        } else {
            update_p2s = p2s + 1;
            document.getElementById("p2_s").innerHTML = update_p2s;
        }
    }


    if (qt == "p1") {
        qt = "p2"
        document.getElementById("pq").innerHTML = "Player Question = " + p2
    } else {
        qt = "p1"
        document.getElementById("pq").innerHTML = "Player Question = " + p1
    }

    if (at == "p1") {
        at = "p2"
        document.getElementById("pa").innerHTML = "Player Answer = " + p2
    } else {
        at = "p1"
        document.getElementById("pa").innerHTML = "Player Answer = " + p1
    }

}