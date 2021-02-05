const TheirMessage = ({ lastmessage, message }) => {
    const isFirstMessageByUser = !lastmessage || lastmessage.sender.username === message.sender.username
    const theirStyle = {
            float: "left",
            backgroundColor: "rgb(218, 218, 218)",
            marginRight: "18px",
            color: "black",
            boxShadow: "0 2px 2px #888888 "
    }

    return (
        <div class="message=row">
            {isFirstMessageByUser && (
                <div
                    class="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})`, float: "left", marginRight: "10px", marginLeft: "5px"}}
                />
            )}
            {
                message?.attachments?.length > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            class="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        />
                    ) : (
                        <div class="message" style={theirStyle}>
                            {message.text}
                        </div>
                    )
            }
        </div>
    )
}

export default TheirMessage