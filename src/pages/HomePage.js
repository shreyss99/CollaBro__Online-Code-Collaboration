import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate();

    const createNewRoom = (event) => {
        event.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room')
    };

    const joinRoom = () => {
        if (roomId && !userName) {
            toast.error("Username is not provided");
            return;
        }

        if (!roomId && userName) {
            toast.error("RoomID is not provided");
            return;
        }

        // Navigation / redirect
        navigate(`/editor/${roomId}`, {
            state: {
                userName,
            }
        })
    }

    const handleInputEnter = (e) => {
        if (e.code == 'Enter') {
            joinRoom();
        }
    }

    return (
        <div className='homePageWrapper'>

            <div className='formWrapper'>
                <img
                    className="homePageLogo"
                    src="collabro.png"
                    alt="CollaBro: Online Code Collaboration"/>
                    
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>

                <div className='inputGroup'>
                    <input 
                        className = 'inputBox' 
                        type = 'text' 
                        placeholder = 'ROOM ID' 
                        onChange = {(event) => setRoomId(event.target.value)}
                        value = {roomId}
                        onKeyUp={handleInputEnter}>
                    </input>

                    <input 
                        className = 'inputBox' 
                        type = 'text' 
                        placeholder = 'USERNAME'
                        onChange = {(event) => setUserName(event.target.value)}
                        value = {userName}
                        onKeyUp={handleInputEnter}>    
                    </input>

                    <button className='btn JoinBtn' onClick={joinRoom}>JOIN ROOM</button>

                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a href=""
                           onClick={createNewRoom} 
                           className="createNewBtn">
                           new room
                        </a>
                    </span>
                </div>

            </div>

            <footer>
                <h4>
                    Built with 💛 &nbsp; by &nbsp;
                    <a href="https://github.com/shreyss99">Shrey Shah</a>
                </h4>
            </footer>

        </div>
   )
}

export default HomePage