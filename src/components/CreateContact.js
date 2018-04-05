import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import formSerialize from 'form-serialize'
import ImageInput from './ImageInput'

class CreateContact extends Component {
  static propTypes = {
    createContact: PropTypes.func.isRequired
  }

  handleSubmit = e => {
    e.preventDefault()
    const contact = formSerialize(e.target, { hash: true })
    this.props.createContact(contact)
  }

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact">
          Close
        </Link>

        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />

          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />
            <button>Create Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
