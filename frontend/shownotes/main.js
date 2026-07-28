const note = document.querySelector(".note")
const title = document.querySelector(".title")
const date = document.querySelector(".date")
const description = document.querySelector(".description")
const container = document.querySelector(".container")

async function showNotes(){
    const res = await fetch("http://localhost:3000/show")
    const data = await res.json()
    console.log(data)
    data.notes.forEach(function(note){
        const div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML = `
            <div class="title">${note.title}</div>
            <div class="date">${note.date}</div>
            <div class="description">${note.description}</div>
        `;

        container.appendChild(div);
    })
}

showNotes()
