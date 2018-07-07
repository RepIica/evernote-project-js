class Note {
  constructor(note){
    this.title = note.title
    this.body = note.body
    this.id = note.id
    this.userId = note.userId
  }

  el(){
    return `<a href="#"><li data-id="${this.id}">${this.title}</li></a>`;
  }

  display(){
    return `
      <div class="note-div">
        <h4 class="note-title" data-id="${this.id}">
          ${this.title}
        </h4>
        <p class="note-body" data-id="${this.id}">${this.body}</p>
        <button class="button-outline" data-id="${this.id}">delete note</button>
        <button class="button-outline" data-id="${this.id}">edit note</button>
      </div>
    `;
  }

}
