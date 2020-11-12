const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')


function darkMode() {
	nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
	console.log(toggleIcon)
	toggleIcon.children[0].textContent = 'Dark Mode'
	toggleIcon.children[1].classList.remove('fa-sun')
	toggleIcon.children[1].classList.add('fa-moon')
}
function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		darkMode()
	}else{
		document.documentElement.setAttribute('data-theme', 'light');
		// lightMode()
	}
	console.log(e.target.checked)
}
toggleSwitch.addEventListener('change', switchTheme);
