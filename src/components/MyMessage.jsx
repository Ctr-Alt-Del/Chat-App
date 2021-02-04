const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0) {
        return(
            <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float: 'right'}}
            />
        )
    }
    const myStyle = {
        float: "right",
        backgroundColor: "#3B2A50",
        marginRight: "18px",
        color: "white"
    }
    return(
        <div className="message" style={myStyle}>
            {message.text}
        </div>
    )
}

export default MyMessage