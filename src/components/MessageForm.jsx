import { useState } from 'react'
import { sendMessage } from 'react-chat-engine';
import { isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

const MessageForm = (props) => {
    const [value, setValue] = useState('')
    const { chatId, creds} = props

    const handleSubmit = (event) => {
        event.preventDefault()
        const text = value.trim()
        if(text.length > 0) sendMessage(creds, chatId, { text })
        setValue('')
    }
    const handleChange = (event) => {
        setValue(event.target.value)
        isTyping(props, chatId)
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return (
        <form class="message-form" onSubmit={handleSubmit}>
            <input
                type="text"
                class="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span class="image-button">
                    <PictureOutlined class="picture-icon" />
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none'}}
                onChange={handleUpload}
            />
            <button type="submit" class="send-button">
                <SendOutlined class="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm