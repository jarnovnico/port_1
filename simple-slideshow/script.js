var img1 = new Image()
img1.src="berg.jpg"

var img2 = new Image()
img2.src="pinguins.jpg"

var img3 = new Image()
img3.src="voetbal.jpg"

var pic=1
function slides () {

	document.images.slide.src=eval("img"+pic+".src")

	if (pic < 3)
		pic++
	else
		pic=1
		setTimeout("slides()", 2000)
}
slides()