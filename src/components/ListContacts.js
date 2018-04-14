import React, { Component } from "react";
import { array, func } from "prop-types";
import { Link } from "react-router-dom";
import ItemContact from "./ItemContact";

class ListContacts extends Component {
  static propTypes = {
    contacts: array.isRequired,
    deleteContact: func.isRequired
  };

  state = {
    query: ""
  };

  handleInputChange = e => {
    const { name, value, type, checked } = e.target;

    this.setState(() => ({
      [name]: type === "checkbox" ? checked : value
    }));
  };

  clearQuery = () => this.setState(() => ({ query: "" }));

  renderShowAll = (shownContacts, contacts) => (
    <div className="showing-contacts">
      <span>
        Now showing {shownContacts.length} of {contacts.length}
      </span>
      <button onClick={this.clearQuery}>Show all</button>
    </div>
  );

  renderContactList = (shownContacts, deleteContact) =>
    shownContacts.map(contact => (
      <ItemContact
        key={contact.id}
        contact={contact}
        deleteContact={deleteContact}
      />
    ));

  renderNoContacts = () => (
    <div className="contact-empty-message">No Contacts!</div>
  );

  render() {
    const { query } = this.state;
    const { contacts, deleteContact } = this.props;
    const filterContacts = c =>
      c.name.toLowerCase().includes(query.toLowerCase());
    const shownContacts =
      query.length === 0 ? contacts : contacts.filter(filterContacts);

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

          <Link to="/create" className="add-contact">
            Create Contact
          </Link>
        </div>

        {shownContacts.length !== contacts.length &&
          this.renderShowAll(shownContacts, contacts)}

        <ol className="contact-list">
          {Array.isArray(shownContacts) && shownContacts.length > 0
            ? this.renderContactList(shownContacts, deleteContact)
            : this.renderNoContacts()}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
