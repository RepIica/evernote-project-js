document.addEventListener("DOMContentLoaded", function() {
  const noteAdapter = new NoteAdapter();
  const notesController = new NotesController();
  const ol = document.querySelector("#note-list");
  const newBtn = document.querySelector('#new-btn')
  const main = document.querySelector('#main')


  noteAdapter.getNotes()
    .then((data) => notesController.renderNotesList(data));

  ol.addEventListener('click', (event) => { //show full note on click
    event.preventDefault()
    if(event.target.nodeName === "LI"){
      const listTitle = event.target.innerHTML
      const id = event.target.getAttribute("id");
      noteAdapter.getNote(id)
        .then((note) => notesController.renderNote(note))
    }
  });

  newBtn.addEventListener('click', (e) => { //show new note form on click
    if (e.target.nodeName) {
      notesController.renderForm()
    }
  })

  main.addEventListener('click', (e) =>{ //show note body editor on click
    if (e.target.className==='note-body') {
      noteAdapter.getNote(e.target.dataset.id)
        .then((noteObj) => {
          notesController.renderEditBody(noteObj)
        })
    }
  })

  main.addEventListener('submit', (e) => { //submits new note on submit
    if (e.target.nodeName === 'FORM') {
      e.preventDefault()
      const formTitle = main.querySelector('#title').value
      const formBody = main.querySelector('#body').value
      const note = new Note({title: formTitle, body: formBody})
      noteAdapter.newNote(note)
      notesController.updateNewNoteLi(note)
    }
  })

  // ??? edit?
  // main.addEventListener('click', (e) => {
  //   if (e.target.className==='new-form') {
  //     noteAdapter.newNote(e.target.dataset.id)
  //       .then((noteObj) => {
  //         notesController.editBody(noteObj)
  //       })
  //     noteAdapter.getNotes()
  //       .then((noteObjs) => notesController.renderNotesList(noteObjs))
  //   }
  // })

});
