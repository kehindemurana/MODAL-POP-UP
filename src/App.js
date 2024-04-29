import React, { useState } from 'react'
import Modal from './components/Modal'
import './App.css'

function App() {
  
  const [message, setMessage] = useState('')
  const [modalOpen, setModalOpen] = useState(false)



  const handleButtonClick= (value) => {
    setModalOpen(false)
    setMessage(value)

  }
  return (
    <div className='App'>
     
      { modalOpen && (
      <Modal
       onSubmit={handleButtonClick}
        onCancel={handleButtonClick} 
        onClose={handleButtonClick}>
        <h1>This is the modal title</h1>
        <p>This is the modal description</p>
      </Modal>
      )}
      {message}
      <button className='btn btn-open' onClick={()=>setModalOpen(true)}>
        open
        </button>
      
    </div>
  )
}

export default App