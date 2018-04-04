import React from 'react'
import { array, func } from 'prop-types'
import ContactItem from './ContactItem'

function ContactList({ contacts, deleteContact }) {
  return (
    <ol className="contact-list">
      {Array.isArray(contacts) && contacts.length > 0 ? (
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      ) : (
        <div className="contact-empty-message">No Contacts!</div>
      )}
    </ol>
  )
}

ContactList.propTypes = {
  contacts: array.isRequired,
  deleteContact: func.isRequired
}

export default ContactList
