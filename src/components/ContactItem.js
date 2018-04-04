import React from 'react'
import { object, func } from 'prop-types'

function ContactItem({ contact, deleteContact }) {
  const { avatarURL, name, handle } = contact

  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar"
        style={{ backgroundImage: `url(${avatarURL})` }}
      />
      <div className="contact-details">
        <p>{name}</p>
        <p>@{handle}</p>
      </div>
      <button className="contact-remove" onClick={() => deleteContact(contact)}>
        Remove
      </button>
    </li>
  )
}

ContactItem.propTypes = {
  contact: object.isRequired,
  deleteContact: func.isRequired
}

export default ContactItem
