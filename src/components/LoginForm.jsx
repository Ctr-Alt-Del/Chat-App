import { useState } from "react"
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': '778c1273-798a-4725-9cf5-f19eb12ece0b', 'User-Name': username, 'User-Secret': password }

        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();
        }catch (error) {
            setError('Oops, incorrect credentials')
        }
    }

    return (
        <div class="wrapper">
            <div class="form">
                <h1 class="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="input" placeolder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="input" placeolder="Password" required/>
                    <div align="center">
                        <button type="submit" class="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 class="error">{error}</h2>
                </form>
                <div class="demoUsers">
                    <h2><b>Demo Users</b></h2>
                    <br/>
                    <h3 class="test">Username: User 1</h3>
                    <h3>Password: UserDemo1</h3>
                    <h3>Username: User 2</h3>
                    <h3>Password: UserDemo2</h3>
                    <br/>
                </div>
            </div>
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
        </div>
    )
}

export default LoginForm