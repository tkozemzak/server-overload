import { useEffect, useState } from "react"
import './App.css';
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [data, setData] = useState()


  useEffect(() => {
    console.log("UseEffect");

  
    axios({
      method: 'post',
      url: 'http://localhost:3001/users',
      data: {
        name: name,
        email: email
      }
    });
  }, [sending])


  const handleNameInput = (e) => {
    setName(e.target.value)
  }
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }
  const handleSendData = () => {
    !sending ? setSending(true) : setSending(false)
  }

  const handleApiRequest = () => {
    console.log("SENDING API REQ");
   axios.get('http://localhost:3001/users').then(res => {
      const data = res.data
      setData(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSendData}>{ sending ? "Stop Sending Data" : "Send Data Constantly"}</button>
        <button onClick={handleApiRequest}>Send API Request</button>
        <form>
          <input placeholder="Name" onChange={(e)=> handleNameInput(e)} value={name}/>
          <input placeholder="Email" onChange={(e)=> handleEmailInput(e)}  value={email}/>
        </form>
        </header>
    </div>
  );
}

export default App;
