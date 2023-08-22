const btnSearch = document.querySelector(".search")
const inputSearch = document.querySelector(".form-control")
const navbarLinks = document.querySelector(".navbar-nav")
const divCollapse = document.querySelector(".navbar-collapse")

const gridImg = document.querySelector(".grid")
const images = document.querySelectorAll(".grid img")
const popup = document.querySelector(".popup-image")
const imgPopup = popup.querySelector("img")
const closePopupBtn = popup.querySelector(".fa-x")
const nextImg = popup.querySelector(".fa-arrow-right")
const scrollBtn = document.querySelector(".scroll")
const galleryShadow = document.querySelector(".gallery-shadow")
const lastImg = popup.querySelector(".fa-arrow-left")

const slides = document.querySelectorAll(".slide")
const slideBtns = document.querySelectorAll(".radio")

let click = 0

const toggleSearch = () => {
	if (divCollapse.classList.contains("show")) {
		inputSearch.classList.toggle("show-input-collapse")
	} else {
		inputSearch.classList.toggle("show-input")
		navbarLinks.classList.toggle("move-links")
		btnSearch.classList.toggle("move-links")
	}
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
		let next = document.querySelector(`[data-number="${number}"]`)
		imgPopup.src = next.getAttribute("src")
	}	
	
}
const lastImage = () => {
	click--
		let number = Number(imgPopup.dataset.number) + click
		if (number == 0) {
			click = 0
		} else {
			let next = document.querySelector(`[data-number="${number}"]`)
			imgPopup.src = next.getAttribute("src")
		}
		
}

const moveShadow = () => {
	galleryShadow.style.display = "none"
}

//masonry
document.addEventListener("DOMContentLoaded", () => {
	const elem = document.querySelector(".grid")
	const msnry = new Masonry(elem, {
		itemSelector: ".grid-item",
		gutter: 40,
	})
})
//slider
document.addEventListener("DOMContentLoaded", function () {
	var splide = new Splide(".splide")
	splide.mount()
})

btnSearch.addEventListener("click", toggleSearch)

//popup gallery
images.forEach(image => image.addEventListener("click", showImagePopup))

closePopupBtn.addEventListener("click", closeImagePopup)

nextImg.addEventListener("click", nextImage)

lastImg.addEventListener("click", lastImage)

scrollBtn.addEventListener("click", moveShadow)

