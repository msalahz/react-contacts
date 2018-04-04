import React, { Component } from 'react'
import ContactList from './components/ContactList'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState(() => ({ contacts }))
    })
  }

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <ContactList
        contacts={this.state.contacts}
        deleteContact={this.deleteContact}
      />
    )
  }
}

export default App
