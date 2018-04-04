import React from 'react'
import ContactList from './components/ContactList'

const contacts = [
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: 'karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: 'richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg'
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: 'tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  }
]

function App() {
  return <ContactList contacts={contacts} />
}

export default App
