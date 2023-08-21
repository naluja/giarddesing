const btnSearch = document.querySelector(".search")
const inputSearch = document.querySelector(".form-control")
const navbarLinks = document.querySelector(".navbar-nav")

const gridImg = document.querySelector(".grid")
const images = document.querySelectorAll(".grid img")
const popup = document.querySelector(".popup-image")
const imgPopup = popup.querySelector("img")
const closePopupBtn = popup.querySelector(".fa-x")
const nextImg = popup.querySelector(".fa-arrow-right")
const scrollBtn = document.querySelector(".scroll")
const galleryShadow = document.querySelector(".gallery-shadow")
const lastImg = popup.querySelector(".fa-arrow-left")

let click = 0
let next = ''

// masonry library
var elem = document.querySelector(".grid")
var msnry = new Masonry(elem, {
	itemSelector: ".grid-item",
	gutter: 40,
})

const toggleSearch = () => {
	inputSearch.classList.toggle("show-input")
	navbarLinks.classList.toggle("move-links")
	btnSearch.classList.toggle("move-links")
}

const closeImagePopup = () => {
	popup.style.display = "none"
}

const showImagePopup = e => {
	popup.style.display = "block"
	imgPopup.src = e.target.getAttribute("src")
	imgPopup.dataset.number = e.target.dataset.number
}

const showMore = () => {
	const gridItem = document.createElement("div")
	gridItem.classList.add("grid-item")
	const img = document.createElement("img")
	img.setAttribute("src", "css/img/Photo10.png")
	gridItem.append(img)

	gridImg.append(gridItem)
	galleryShadow.style.display = "none"
}

const nextImage = () => {
	click++
	let number = Number(imgPopup.dataset.number) + click
	if (number > images.length) {
		imgPopup.src = "css/img/Photo1.png"
		click = 0
	} else {
		 next = document.querySelector(`[data-number="${number}"]`)
		imgPopup.src = next.getAttribute("src")
	}
}

const lastImage = () => {
	click++
	let number = Number(imgPopup.dataset.number) - click
	let lastImgData = images.length
	if (number == 0){
		next = document.querySelector(`[data-number="${lastImgData}"]`)
		imgPopup.src = next.getAttribute("src")
		click = 0
		number = 9
	}
	else{
		next = document.querySelector(`[data-number="${number}"]`)
		console.log(number, next)
		imgPopup.src = next.getAttribute("src")
	}
	console.log(number, next, click)
}


btnSearch.addEventListener("click", toggleSearch)

//popup gallery 
images.forEach(image => image.addEventListener("click", showImagePopup))

closePopupBtn.addEventListener("click", closeImagePopup)

nextImg.addEventListener("click", nextImage)

lastImg.addEventListener("click", lastImage)
