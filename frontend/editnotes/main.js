
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);

const titleNew = document.querySelector(".titleNew");
const dateNew = document.querySelector(".dateNew");
const descriptionNew = document.querySelector(".descriptionNew");

const titleOld = document.querySelector(".titleOld")
const dateOld = document.querySelector(".dateOld")
const descriptionOld = document.querySelector(".descriptionOld")



async function loadNote() {

    const res = await fetch(`http://localhost:3000/show/${id}`);

    const data = await res.json();
    console.log(data)

    titleOld.textContent = data.note.title
    dateOld.textContent = data.note.date
    descriptionOld.textContent = data.note.description
}

loadNote();

const savebtn = document.querySelector(".savebtn")

savebtn.addEventListener("click",async()=>{
    const res = await fetch(`http://localhost:3000/show/${id}`,{
        method:"PUT",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({
            title: titleNew.value,
            date: dateNew.value,
            description: descriptionNew.value,
        })
         
    })
    const data = await res.json()
    const msg = data.message
    alert(msg)
    window.location.href = "http://127.0.0.1:5500/frontend/shownotes/index.html"

})

const cancelbtn = document.querySelector(".cancelbtn")
cancelbtn.addEventListener("click",()=>{
    window.location.href = "http://127.0.0.1:5500/frontend/shownotes/index.html"
})