var player_1 = " "

var player_2 = " "


function np() {
    player_1 = document.getElementById("p1").value
    player_2 = document.getElementById("p2").value
    localStorage.setItem("p1", player_1)
    localStorage.setItem("p2", player_2)

    window.location = "game.html"
}