function myfun()
{
	document.getElementById("img").src="css/images/col-img2.png";
	
}
function myfun2()
{
	var t = setTimeout("alert('3 seconds')",3000)
}
function showdiv()
{
	if (document.getElementById("hidediv").style.display=="none")
	{
		document.getElementById("hidediv").style.display=""	;
	}
	else 
		document.getElementById("hidediv").style.display="none"	;
}
function time()
{
	var today = new Date();
	date = today.getDate();
	month = today.getMonth()+1;
	year = today.getFullYear();

}
function getdate()
{
	var today = new Date();
	return today.getDate();
}
function getmonth()
{
	var today = new Date();
	return today.getMonth()+1;
}
function getyear()
{
	var today = new Date();
	return today.getFullYear();
}