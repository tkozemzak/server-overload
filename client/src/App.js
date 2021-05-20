import { useEffect, useState } from "react"
import './App.css';
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [apiInterval, setApiInterval] = useState()
  const [userSetInterval, setUserSetInterval] = useState()


  useEffect(() => {
 
    
    if (sending) {
      console.log("Sending");
      const timeInterval = setInterval(() => {
        handleApiRequest();
      }, userSetInterval);

      setApiInterval(timeInterval);

      return () => {
        clearInterval(timeInterval);
        clearInterval(apiInterval);
      };
    }

    // eslint-disable-next-line
  }, [sending]);



  const handleNameInput = (e) => {
    setName(e.target.value)
  }
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }
  const handleIntervalInput = (e) => {
    setUserSetInterval(e.target.value)
  }
  const handleSendData = () => {
    !sending ? setSending(true) : setSending(false)
  }

  const handleApiRequest = () => {
    console.log("SENDING API REQ");
    axios({
          method: 'post',
          url: 'http://localhost:3001/users',
          data: {
            name: name,
            email: email
          }
        });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className={sending ? "btn btn-red" : "btn btn-green"} onClick={handleSendData}>{ sending ? "Stop Sending Data" : "Send Data Constantly"}</button>
        
        <form>
          <input placeholder="Name" onChange={(e)=> handleNameInput(e)} value={name}/>
          <input placeholder="Email" onChange={(e)=> handleEmailInput(e)}  value={email}/>
          <input style={{ width: "45%" }}placeholder="Set request interval (in milliseconds)" onChange={(e)=> handleIntervalInput(e)}  value={userSetInterval}/>
        </form>
        </header>
    </div>
  );
}

export default App;
