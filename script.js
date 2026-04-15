// Show/Hide fields
const participation = document.getElementById("participation");
const solo = document.getElementById("soloFields");
const team = document.getElementById("teamFields");

participation.addEventListener("change", () => {
    if (participation.value === "solo") {
        solo.style.display = "block";
        team.style.display = "none";
    } else if (participation.value === "team") {
        solo.style.display = "none";
        team.style.display = "block";
    } else {
        solo.style.display = "none";
        team.style.display = "none";
    }
});

// Google Sheets Submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbypDE_TqV6jGmzYnGIBpRXVIG66ghthraFF0FUho9SOLYZlXkDTZEIIrzBcGPZTmzw2NQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("success")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {
        msg.innerHTML = "✅ Registered successfully!"
        form.reset()
        solo.style.display = "none"
        team.style.display = "none"
    })
    .catch(() => {
        msg.innerHTML = "❌ Error submitting form"
    })
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
