import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar, IconButton } from '@mui/material';
import db from "./firebase";


function SidebarChat  ({id,name,addNewChat})  {
    const [seed,setSeed]= useState("");

    useEffect(()=>{
      setSeed(Math.floor(Math.random()*5000));    
    },[]);     //this will always multiply the imput from 5000 and generate a random value by which we would get random avatars for different persons

    const createChat=()=>{
      const roomName=prompt("Please enter the name for chat");

      if(roomName){
        //do some database stuff it actually collects the database from the rooms we created in firebase is a room name is entered add that roomname
        //in short retrieves rooms from database
        db.collection('rooms').add({
          name:roomName,
        });
      }
    };

    return  !addNewChat ? (     /* CONDITIONAL RENDERING--if its not the add new chat then it must show us the basic stuff otherwise the function will work on clicking the sdd new chat 
    //this api would give acces to many random avatars so we could access different avatar for every next user by just changing the last seed no
    But to generate random avatar for every single person out there we would use a useeffect hook because it will run some code when the component loads  AND AS STRING CONCATENATION IS DONE SO WE USE BACKTICK*/
         <div className='sidebarChat'>
         <IconButton><Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/></IconButton>  
         <div className='sidebarChat_info'>
         <h2>{name}</h2>
         <p>Last Message.....</p>

         </div> 
        </div>
    ):
     (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add New Chat</h2>
      </div>
     );
};

export default SidebarChat;