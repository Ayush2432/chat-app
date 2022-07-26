import React,{useEffect, useState} from 'react';
import "./Chat.css";
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';  //this gives us the hovering property it looks likes like we r actually clicking thee button 
import MoreVert from '@mui/icons-material/MoreVert';      //this one is for the more icon the three dot one
import { AttachFile, SearchOutlined } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat()  {
    const[input,setInput]=useState('');
    const[seed,setSeed]= useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[]);
    
    const sendMessage = (e)=> {
      e.preventDefault();
      console.log("you typed>>>>",input)  //this we have only used as a proof that the message we entered to submit is being stored in local storage

       //setInput(""); //what it does is whenever we hit enter button the placeholder will get cleared itself 
    };

    return (
        <div className="Chat">

        <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='chat_headerInfo'>
            <h3>Room Name</h3>
            <p>Last Seen at....</p>
        </div>
        <div className='chat_headerRight'>
        <IconButton><SearchOutlined /></IconButton>
      <IconButton><AttachFile/> </IconButton>
      <IconButton><MoreVert /></IconButton>
        </div>

        </div>
        <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>   {/*we are giving here a condition that this turn out to be true when the admin sign in so his chaat would we shown in green format if not the chat would be shown in white one as done in its styling ...the actual thing that will happen that when we would pull message from the database we would see if message name is equal to user that has logged in then it will work on the behalf of true part otherwise not */}
        <span className='chat_name'>Ayush Pandey</span> Hey Guys
        <span className='chat_timestamp'>10:23pm</span> </p>
        </div>
        <div className="chat_footer">
        <IconButton><InsertEmoticonIcon /></IconButton>
        <form><input value={input} onChange={(e)=>setInput(e.target.value)}  placeholder="Type a message" type="text" />  {/* for the input field we want to keep track what the user is typing inside that input field we need to keep a keep a track inside a state inside react so that when the user htis that enter key so that we can puch that into a database and do whatever we wanna do with that value but inorder to do that we nee dto store this in state..everytime we cahnge the value of inout onchange function gets triggered */}
        <button onClick={sendMessage} type="submit">Send a message</button></form>  {/*this form is because we want to have enter functionallity */}
        <IconButton><MicIcon /></IconButton>
        </div>
        





        </div>
    );
};

export default Chat;