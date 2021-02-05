import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
    console.log(props)
    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat]

    const renderReadReciepts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                class="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div class="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div class="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReciepts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    if (!chat) return 'Loading...'

    return (
        <div class="chat-feed">
            <div class="chat-title-container chat-container">
                <div class="chat-title">
                    {chat?.title}
                </div>
                {/* <div class="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div> */}
            </div>
            <div class="renderMessages">
                {renderMessages()}
            </div>
            <div class="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed