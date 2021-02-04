const TheirMessage = ({ lastmessage, message }) => {
    const isFirstMessageByUser = !lastmessage || lastmessage.sender.username === message.sender.username
    const theirStyle = {
            float: "left",
            backgroundColor: "#CABCDC",
            marginRight: "18px",
            color: "white",
            
    }

    return (
        <div className="message=row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})`, float: "left", marginRight: "10px", marginLeft: "5px"}}
                />
            )}
            {
                message?.attachments?.length > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        />
                    ) : (
                        <div className="message" style={theirStyle}>
                            {message.text}
                        </div>
                    )

            }
        </div>
    )
}

export default TheirMessage