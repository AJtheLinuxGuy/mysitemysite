// Go To Top Button Code
myBtn = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			myBtn.style.display = "block";
		} else {
			myBtn.style.display = "none";
		}
}

function topFunc() {
	document.body.scrollTop = 0; //Safari
	document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
}