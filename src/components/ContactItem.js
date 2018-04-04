import React, { Component } from 'react'

class ContactItem extends Component {
  render() {
    return (
      <li className="contact-list-item">
        <div
          className="contact-avatar"
          style={{ backgroundImage: `url(${this.props.contact.avatarURL})` }}
        />
        <div className="contact-details">
          <p>{this.props.contact.name}</p>
          <p>@S{this.props.contact.handle}</p>
        </div>
        <button className="contact-remove">Remove</button>
      </li>
    )
  }
}

export default ContactItem
