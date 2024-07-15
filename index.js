let userName;

document.getElementById("submit").onclick = function() {
    userName = document.getElementById("text").value.toLowerCase().trim();

    if (userName === "") {
        document.querySelector("h2").innerHTML = " Please ,Enter your name ...";
        return;
    }

    const validUserNames = ['a', 'b', 'c', 'd', 'f', 'g','m', 'n', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = false;

    for (let i = 0; i < userName.length; i++) {
        if (validUserNames.includes(userName[i])) {
            result = true;
            break;
        }
    }

    if (result) {
        document.querySelector("h2").innerHTML = "Congratulations You are a : ";
        document.getElementById("img-2").style.display = "block";
        document.getElementById("img-1").style.display = "none";
    } else {
        document.querySelector("h2").innerHTML = "Congratulations You are a : ";
        document.getElementById("img-2").style.display = "none";
        document.getElementById("img-1").style.display = "block";
    }
}