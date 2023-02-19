// adding the  note of user in local storage
let addbtn = document.getElementById("addBtn");
let notesObj;
showNotes();
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        console.log(typeof (notes));
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = '';
    console.log(notesObj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width:200px; text-align: center;">
            <div class="cardBody">
                <h5 class="card-title">Note${index + 1}</h5>
                <p>${element}</p>
                <input type="checkbox" id="imp${index}" name="IMPORTANT" />
                <label for="imp${index}">Mark Important</label>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" id="addBtn">Delete-Note</button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length == 0) {
        notesElm.innerHTML = '<div><b>There is nothing to show.Add your Notes first</b></div>';
    } else {
        notesElm.innerHTML = html;
    }
}
function deleteNote(index) {
    console.log(`deleting` + index)
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let searchtxt = document.getElementById('searchTxt');
searchtxt.addEventListener("input", function () {

    let inputxt = searchtxt.value.toLowerCase();
    // console.log(inputxt);
    let note = document.getElementsByClassName('noteCard');
    Array.from(note).forEach(function (element) {
        let text = element.getElementsByTagName("p")[0].innerText;
        if (text.includes(inputxt)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})
let imp= document.getElementsByClassName('imp')
imp.addEventListener('click',function(){
    let note = document.getElementsByClassName('noteCard');
    Array.from(note).forEach(function (element) {
        let text = element.getElementsByTagName("input")[0].innerHTML;
        if (text==true) {
            element.style.backgroundcolour = "blue";
        } else {
            element.style.backgroundcolour = "none";
        }
    })
    
})