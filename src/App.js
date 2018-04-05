import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './components/ListContacts'
import CreateContact from './components/CreateContact'
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

  createContact = body => {
    ContactsAPI.create(body).then(contact => {
      this.setState(prevState => ({
        contacts: prevState.contacts.concat([contact])
      }))
    })
  }

  renderListContacts = () => (
    <ListContacts
      contacts={this.state.contacts}
      deleteContact={this.deleteContact}
    />
  )

  renderCreateContact = ({ history }) => (
    <CreateContact
      createContact={contact => {
        this.createContact(contact)
        history.push('/')
      }}
    />
  )

  render() {
    return (
      <Fragment>
        <Route exact path="/" render={this.renderListContacts} />
        <Route path="/create" render={this.renderCreateContact} />
      </Fragment>
    )
  }
}

export default App
