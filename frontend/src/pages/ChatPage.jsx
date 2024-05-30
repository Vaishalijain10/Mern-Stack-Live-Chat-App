import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  // creating a hook using useState
  //   initially it will be an empty array
  // here there are two variables -> chats and setchats, chats are used to display the data and setchats will be used to change the value of the chats variable.
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    // here we put the endpoint as mentioned in backend/server.js
    const { data } = await axios.get("/api/chat");
    // all the data will go to setchats variable.
    setChats(data);
    console.log(data);
  };

  //   useEffect is a hook in react
  useEffect(() => {
    // it occurs when the functions is rended this useEffect is called.
    fetchChats();
  }, []);

  // in the div tag we use "{}" curly braces to write the javascript.
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
      chat page
    </div>
  );
};

export default ChatPage;
