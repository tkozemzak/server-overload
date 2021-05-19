import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)


  useEffect(() => {
    console.log("UseEffect");
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


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSendData}>{ sending ? "Stop Sending Data" : "Send Data Constantly"}</button>
        <form>
          <input placeholder="Name" onChange={(e)=> handleNameInput(e)} value={name}/>
          <input placeholder="Email" onChange={(e)=> handleEmailInput(e)}  value={email}/>
        </form>
        </header>
    </div>
  );
}

export default App;
