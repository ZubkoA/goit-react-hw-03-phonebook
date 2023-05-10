import Header from './Header';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AddContacts } from './AddContacts/AddContacts';
import { nanoid } from 'nanoid';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.state.contacts.some(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        });
  };

  findFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.findFilter();
    return (
      <div className={css.container}>
        <Header title="Phonebook" />
        <AddContacts addContact={this.addContact} />
        <Filter value={filter} onChange={this.handleChange} />
        <Header titleContacts="Contacts" />
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact(contacts.id)}
        />
      </div>
    );
  }
}

export default App;
