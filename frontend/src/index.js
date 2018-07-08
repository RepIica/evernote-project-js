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
      const id = event.target.getAttribute("data-id");
      noteAdapter.getNote(id)
        .then((note) => notesController.renderNote(note))
    }
  });

  newBtn.addEventListener('click', (e) => { //show new note form on click
    if (e.target.nodeName) {
      notesController.renderForm()
    }
  })

  // main.addEventListener('click', (e) =>{ //show note body editor on click
  //   if (e.target.className==='note-body') {
  //     noteAdapter.getNote(e.target.dataset.id)
  //       .then((noteObj) => {
  //         notesController.renderEditBody(noteObj)
  //       })
  //   }
  // })

  main.addEventListener('submit', (e) => { //submits new note on submit
    if (e.target.className === 'new-form') {
      e.preventDefault()
      const formTitle = main.querySelector('#title').value
      const formBody = main.querySelector('#body').value
      const note = new Note({title: formTitle, body: formBody})
      noteAdapter.newNote(note)
      notesController.updateNewNoteLi(note)
    }
  })

  main.addEventListener('click', e => {
    if (e.target.innerHTML === 'delete note') {
      const id = e.target.dataset.id
      noteAdapter.deleteNote(id)
      const lists = document.querySelector('#note-list').querySelectorAll('li')
      lists.forEach(li => {
        if (li.dataset.id === id) {
          li.remove()
        }
      })
      main.innerHTML = ''
    }
  })

  main.addEventListener('click', e => {
    if (e.target.innerHTML === 'edit note') {
      noteAdapter.getNote(e.target.dataset.id)
        .then(obj => {
          notesController.renderEditForm()
          const formTitle = main.querySelector('#title')
          const formBody = main.querySelector('#body')
          const formBtn = main.querySelector('.button-outline')
          formTitle.value = obj.title
          formBody.value = obj.body
          const form = main.querySelector('.edit-form')
          form.addEventListener('submit', e => {
            e.preventDefault()
            const title = main.querySelector('#title').value
            const body = main.querySelector('#body').value
            obj.title = title
            obj.body = body
            noteAdapter.editNote(obj)
            const editedNote = new Note(obj)
            notesController.renderNote(editedNote)
        })


    })

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
