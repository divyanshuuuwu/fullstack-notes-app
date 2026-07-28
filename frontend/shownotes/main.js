
const container = document.querySelector(".container")

async function showNotes(){
    const res = await fetch("http://localhost:3000/show")
    const data = await res.json()
    console.log(data)
    data.notes.forEach(function(note){
        const div = document.createElement("div");
        const deletebtn = document.createElement("button")
        deletebtn.classList.add("delete-btn");
        deletebtn.textContent = "Delete"
        div.classList.add("note");
        div.innerHTML = `
            <div class="title">${note.title}</div>
            <div class="date">${note.date}</div>
            <div class="description">${note.description}</div>`;

        container.appendChild(div);
        div.appendChild(deletebtn)

        
            deletebtn.addEventListener("click",async function(){
                const response = await fetch(`http://localhost:3000/show/${note._id}`,{
                    method:"DELETE"
                })
                const data = await response.json()
                console.log(data)
                div.remove()
                
            })

            // const editbtn = document.createElement("button")
            // editbtn.classList.add("edit-btn")
            // editbtn.textContent = "Edit"
            // div.appendChild(editbtn)
            // editbtn.addEventListener("click",function(){
            //     const response
            // })

            const link = document.createElement("a");
            const editbtn = document.createElement("button");

            link.href = `http://127.0.0.1:5500/frontend/editnotes/index.html?id=${note._id}`;
            editbtn.textContent = "Edit";
            link.appendChild(editbtn);
            div.appendChild(link);
            editbtn.classList.add("edit-btn")



    })

}


showNotes()
