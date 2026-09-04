import { useState } from 'react'
import './App.css';
import { nanoid } from 'nanoid';

import { ContactsList } from './components/ContactsList/ContactsList';

const filterFunc = (contacts, filterBy) => {
  let loccalData =[...contacts];

  if (filterBy) {
    loccalData = loccalData.filter(el => el.name.toLowerCase().includes(filterBy.toLowerCase()));
    console.log(filterBy);
    
  }

  return loccalData;
}

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contacts.some(el => el.name === name)) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
  
      setContacts([...contacts, newContact]);
      setName('');
      setNumber('');
    } else {
      alert('user Exists!!!!')
    }

  }

  const onDelete = (id) => {
    setContacts(contacts.filter(el => el.id !== id));
  }

  const newVisibleContacts = filterFunc(contacts, filter);

  return <>
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button type="submit">get contact</button>
    </form>
    <section>
      <h2>Contacts</h2>
      <label htmlFor="#">find Contacts by name
        <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}/>
      </label>
    </section>
    <ContactsList data={newVisibleContacts} onDelete={onDelete}/>
  </>
}

export default App
