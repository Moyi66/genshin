function check(){
	var text = document.getElementById("input").value;
	if(text == "正确的答案"){
		window.location.href = "./menu.html";
	}else{
		document.getElementById("error").innerText = "“" + text + "”似乎不是正确的答案...";
	}
}