// JavaScript Document
console.log("hi");




var openKnop = document.querySelector('#button');
	// var sluitenKnop = document.querySelector('#button');
	var menu = document.querySelector('#menuitems');


function openen(){
  console.log('open')
	menu.classList.toggle('open');
}


//eventlisteners

	openKnop.addEventListener('click', openen);


// bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar //

