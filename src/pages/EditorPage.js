import React, { useState } from 'react'
import Client from '../components/Client'

const EditorPage = () => {

    const [clients, setClients] = useState([
        { socketId: 1, userName: 'Shrey Shah' },
        { socketId: 2, userName: 'Dipti Shah' }
    ])


  return (
    <div className='mainWrapper'>
        <div className='leftPanel'>
            <div className='leftPanelInner'>
                <div className='logo'>
                        <img className='homePageLogo' src='/collabro.png' alt='CollaBro: Online Code Collaboration'></img>                    
                </div>

                <h3>Connected</h3>

                <div className='clientsList'>
                    {clients.map((client) => (
                        <Client
                            key={client.socketId}
                            userName={client.userName}
                        />
                    ))}
                </div>
            </div>
        </div>

        <div className='Editor'>
            Editor goes here.....
        </div>
    </div>
  )
}

export default EditorPage