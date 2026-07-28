const title = document.querySelector(".title")
const date = document.querySelector(".date")
const description = document.querySelector(".description")
const button = document.querySelector(".submit")

button.addEventListener("click" ,()=>{
    const note = {
        title : title.value,
        date : date.value,
        description: description.value
    }

    fetch("http://localhost:3000/create", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
});

    window.location.href = "http://127.0.0.1:5500/frontend/shownotes/index.html"
} )