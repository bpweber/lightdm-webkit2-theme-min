var input = document.getElementById("input");
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        authenticate(e.target.value);
    }
});

window.authentication_complete = function() {
    if (lightdm.is_authenticated) {
        console.log("Authenticated!");
        $( 'body' ).fadeOut( 1000, () => {
            lightdm.login(lightdm.authentication_user, null);
        } );
    }
}

function getImg() {
    document.getElementsByTagName('body')[0].style.backgroundImage = 
        "url(wallpaper.jpg)";
}

var date_options = {weekday: 'short', month: 'short', day: 'numeric'}

function showTime(){
	var date = new Date();
    var h = date.getHours() % 12 || 12;
    var m = date.getMinutes();
    m = (m < 10) ? "0" + m : m;
    var time = h + ":" + m;
    document.getElementById("clocktime").innerText = time;
    document.getElementById("clocktime").textContent = time;
    setTimeout(showTime, 1000);
}

function showDate(){
	var date = new Date();
	var time = date.toLocaleDateString('en-US', date_options);
    document.getElementById("clockdate").innerText = time;
    document.getElementById("clockdate").textContent = time;
    setTimeout(showTime, 1000);
}

window.onload = function() {
    getImg();
    input.focus();
    input.select();
	showTime();
	showDate();
}

function authenticate(input_text) {
    if(!lightdm.in_authentication) {
        lightdm.authenticate(input_text);
        input.value = "";
        input.type = "password";
        input.placeholder = "password";
    } else if(!lightdm.authentication_user) {
        lightdm.respond(input_text);
        input.value = "";
        input.type = "password";
        input.placeholder = "password";
    } else {
        lightdm.respond(input_text);
        input.value = "";
        input.type = "text";
        input.placeholder = "user";
    }
}
