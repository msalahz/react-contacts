import React from 'react'
import PropTypes from 'prop-types'

function ContactItem({ contact }) {
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
      <button className="contact-remove">Remove</button>
    </li>
  )
}

ContactItem.propTypes = { contact: PropTypes.object.isRequired }

export default ContactItem
