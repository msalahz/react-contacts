import React, { Component } from 'react'
import ContactItem from './ContactItem'

class ContactList extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ol>
    )
  }
}

export default ContactList
