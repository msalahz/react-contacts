import React, { Component } from 'react'
import { array, func } from 'prop-types'
import ContactItem from './ContactItem'

class ContactList extends Component {
  static propTypes = {
    contacts: array.isRequired,
    deleteContact: func.isRequired
  }

  state = {
    query: ''
  }

  handleInputChange = e => {
    const { name, value, type, checked } = e.target

    this.setState(() => ({
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  clearQuery = () => this.setState(() => ({ query: '' }))

  render() {
    const { query } = this.state
    const { contacts, deleteContact } = this.props
    const filterContacts = c =>
      c.name.toLowerCase().includes(query.toLowerCase())
    const shownContacts =
      query.length === 0 ? contacts : contacts.filter(filterContacts)

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            type="text"
            name="query"
            className="search-contacts"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </div>

        {shownContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {shownContacts.length} of {contacts.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className="contact-list">
          {Array.isArray(shownContacts) && shownContacts.length > 0 ? (
            shownContacts.map(contact => (
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
      </div>
    )
  }
}

export default ContactList
