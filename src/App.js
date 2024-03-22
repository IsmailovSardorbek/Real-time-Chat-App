import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import './App.css'

const App = (props) => {
  return (
    <ChatEngine
      height='100vh'
      projectID='
      6a8478f1-3509-4e8a-a5f6-2506dcd6be64'
      userName='javascriptmastery'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
