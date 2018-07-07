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

    renderEditBody(noteObj){
      const newDog = new Note(noteObj)
      main.querySelector('.note-body').remove()
      main.innerHTML += displayBody()
      const textArea = main.querySelector('#body')
      textArea.value = newDog.body
    }
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

  function displayBody(){
    return `
      <form>
        <textarea name="body" id="clicked-body" class"auto-expand"></textarea>
      </form>
    `
  }

})()
