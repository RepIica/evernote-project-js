const NotesController = (() => {

  const main = document.querySelector("#main")

  return class {
    renderNotesList(data){
      const ol = document.querySelector("#note-list");
      ol.innerHTML = ''
      data.forEach(function(note){
        const newNote = new Note(note);
        ol.innerHTML += newNote.el();
      });
    }

    updateNewNoteLi(note){
      const ol = document.querySelector("#note-list");
      ol.innerHTML += note.el()
    }

    renderNote(note){ //shows full note
      const newNote = new Note(note);
      main.innerHTML = ''
      main.innerHTML += newNote.display()
    }

    renderForm(){
      main.innerHTML = ''
      main.innerHTML += displayForm()
    }
    renderEditForm(){
      main.innerHTML = ''
      main.innerHTML += displayEditForm()
    }

    // click note body to edit
    // renderEditBody(noteObj){
    //   const newNote = new Note(noteObj)
    //   main.querySelector('.note-body').remove()
    //   main.innerHTML += displayBody()
    //   const textArea = main.querySelector('#clicked-body')
    //   textArea.value = newNote.body
    // }
  }

  function displayForm() {
    return `
      <form id="" class="new-form" action="index.html" method="post">
        <label for="title">Note Title:</label>
        <br>
        <input type="text" id="title" name="title" value="">
        <br>
        <label for="body">Note Body:</label>
        <br>
        <textarea name="body" id="body" class="auto-expand" rows="8" cols="80"></textarea>
        <br>
        <input class="button-outline" type="submit" name="" value="Create Note">
      </form>
    `
  }
  function displayEditForm() {
    return `
      <form id="" class="edit-form" action="index.html" method="post">
        <label for="title">Note Title:</label>
        <br>
        <input type="text" id="title" name="title" value="">
        <br>
        <label for="body">Note Body:</label>
        <br>
        <textarea name="body" id="body" class="auto-expand" rows="8" cols="80"></textarea>
        <br>
        <input class="button-outline" type="submit" name="" value="Create Note">
      </form>
    `
  }

  function displayBody(){
    return `
      <form>
        <textarea name="body" id="clicked-body"></textarea>
      </form>
    `
  }

})()
