import { ChatEngine } from 'react-chat-engine'
import React from 'react'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height='100vh'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectID='778c1273-798a-4725-9cf5-f19eb12ece0b'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
