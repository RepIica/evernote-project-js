document.addEventListener("DOMContentLoaded", function() {
  const noteAdapter = new NoteAdapter();
  const notesController = new NotesController();
  const ol = document.querySelector("#note-list");
  const newBtn = document.querySelector('#new-btn')
  const main = document.querySelector('#main')


  noteAdapter.getNotes()
    .then((data) => notesController.renderNotesList(data));

  ol.addEventListener('click', (event) => {
    event.preventDefault()
    if(event.target.nodeName === "LI"){
      const listTitle = event.target.innerHTML
      const id = event.target.getAttribute("id");
      noteAdapter.getNote(id)
        .then((note) => notesController.renderNote(note))
    }
  });

  newBtn.addEventListener('click', (e) => {
    if (e.target.nodeName) {
      notesController.renderForm()
    }
  })

  main.addEventListener('click', (e) =>{
    if (e.target.className==='note-body') {
      noteAdapter.getNote(e.target.dataset.id)
        .then((noteObj) => {
          notesController.editBody(noteObj)
        })
    }
  })

  main.addEventListener('submit', (e) => {
    if (e.target.nodeName === 'FORM') {
      e.preventDefault()
      const formTitle = main.querySelector('#title').value
      const formBody = main.querySelector('#body').value
      const note = new Note({title: formTitle, body: formBody})
      noteAdapter.newNote(note)

    }
  })

  //editBody needs defining in adapter
  main.addEventListener('click', (e) => {
    if (e.target.className==='new-form') {
      noteAdapter.newNote(e.target.dataset.id)
        .then((noteObj) => {
          notesController.editBody(noteObj)
        })
      // noteAdapter.getNotes()
      //   .then((noteObjs) => notesController.renderNotesList(noteObjs))
    }
  })

});
