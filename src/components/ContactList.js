import React from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'

function ContactList({ contacts }) {
  return (
    <ol className="contact-list">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ol>
  )
}

ContactList.propTypes = { contacts: PropTypes.array.isRequired }

export default ContactList
