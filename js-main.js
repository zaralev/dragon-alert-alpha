// jwt custom code
//
function pageSetUp() {
	//console.log('pageSetUp');
	document.getElementById("result").innerHTML = "00";

	var a=document.getElementsByTagName("a");
	for(var i=0;i<a.length;i++)
	{
		 a[i].onclick=function()
		 {
			  window.location=this.getAttribute("href");
			  return false
		 }
	}
}

function pickSomeOne() {
	//console.log('pickSomeOne');
	var maxNum = document.getElementById("hm_result").value;
	//console.log('maxNum = ' + maxNum);
	var ranNum = Math.floor((Math.random()*maxNum)+1);
	//	console.log('ranNum = ' + ranNum);
	if (ranNum < 10) {
		document.getElementById("result").innerHTML = "0" + ranNum;
	} else {
		document.getElementById("result").innerHTML = ranNum;
	}
	if(ranNum%2 == 0) {
		// even
		document.getElementById("display").style.backgroundColor = "red";
	} else {
		// odd
		document.getElementById("display").style.backgroundColor = "green";
	}
}

function jmp2LocalPage(whichPage) {
	location.href = whichPage;
}