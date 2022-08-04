// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImg");
var newTabImg = document.getElementById("newTabImg");
var captionText = document.getElementById("caption");

function onClick(element) {
	modal.style.display = "block";
	modalImg.src = element.src;
	newTabImg.href = element.src;
	captionText.innerHTML = element.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
