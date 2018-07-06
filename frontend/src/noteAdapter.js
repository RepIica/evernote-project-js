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

  editNote(data) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    // delete data.id
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(baseURL, options)
      .then(r => r.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  }

}
