const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                class="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    const myStyle = {
        float: "right",
        backgroundColor: "rgb(0, 119, 255)",
        marginRight: "18px",
        color: "white"
    }
    return (
        <div>
            <div
            class="message-avatar"
            style={{ backgroundImage: `url(${message?.sender?.avatar})`, float: "right", marginRight: "10px", marginLeft: "-5px"}}
            />
            <div class="message" style={myStyle}>
                {message.text}
            </div>
        </div>
    )
}

export default MyMessage