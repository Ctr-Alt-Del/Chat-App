import { ChatEngine } from 'react-chat-engine'
import React from 'react'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
    return (
		<ChatEngine
			height='100vh'
			userName='Leigh-Jean'
			userSecret='ChatApp'
            projectID='778c1273-798a-4725-9cf5-f19eb12ece0b'
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
            // renderChatHeader={(chatAppProps) => <ChatHeader {... chatAppProps}/>}
		/>
    )
}

export default App
