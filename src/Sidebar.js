import React,{useEffect, useState} from "react";
import "./Sidebar.css";
import { Avatar} from "@mui/material";
import { IconButton } from '@mui/material';                   //this gives us the hovering property it looks likes like we r actually clicking thee button 
import DonutLargeIcon from '@mui/icons-material/DonutLarge';  //this for the  whatsapp status section
import ChatIcon from '@mui/icons-material/Chat';              //this on is for message someone icon
import MoreVertIcon from '@mui/icons-material/MoreVert';      //this one is for the more icon the three dot one
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "./firebase";



function Sidebar ()  {
  const [rooms,setRooms]=useState([]);
  
  
   //we want to use this effect when the side bar components loads we want a  piece of code to runjust only one time
    useEffect(()=> {
      const unsubscribe=db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return ()=>{
      unsubscribe();
    };
  
  }, []);
  




  return (
    <div className="sidebar">  {/*the sidebar would cover other divisions also which are present inside the sidebar such as chat search section and many more things*/ }
      <div className="sidebar_header">
      <IconButton><Avatar /></IconButton>
     
      <div className="sidebar_headerRight">
      <IconButton><DonutLargeIcon /></IconButton>
      <IconButton><ChatIcon /> </IconButton>
      <IconButton><MoreVertIcon /></IconButton>
      
      
      
      </div>
      </div>

      <div className="sidebar_search">
      <div className="sidebar_search Container">

      
      <IconButton><SearchOutlined /></IconButton>
      <input placeholder="Search or Start a new chat" type="text" />
      </div>
      </div>

{/*all the add new chat and the latest chat will be in a same component*/}
      <div className="sidebar_chats"> 
       <SidebarChat addNewChat/>
      {rooms.map(room => (
        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
      ))}
      
      </div>
    </div>
  );
};

export default Sidebar;
