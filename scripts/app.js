// Select the HTML element to manipulate
const date1:('footer') = document.querySelector("#date1");

// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sun",
	"Mon",
	"Tues",
	"Wed",
	"Thur",
	"Fri",
	"Sat"
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"April",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `Current Date: ${monthName} ${d.getDate()}, ${year}`;
document.querySelector("#date2").textContent = fulldate;