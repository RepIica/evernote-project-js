class NoteAdapter {
  getNotes() {
    const baseURL = `http://localhost:3000/api/v1/notes`
    return fetch(baseURL)
      .then(response => response.json());
  }

  getNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    return fetch(baseURL)
      .then(response => response.json());
  }

  newNote(note) {
    const baseURL = `http://localhost:3000/api/v1/notes/`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }
    return fetch(baseURL, options)
      .then(r => r.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  }

  editNote(obj) {
    const baseURL = `http://localhost:3000/api/v1/notes/${obj.id}`
    delete obj.id
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }
    return fetch(baseURL, options)
      .then(r => r.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  }

  deleteNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    const options = {
      method: 'DELETE'
    }
    return fetch(baseURL,options)
      .then(r => r.json())
  }

}
