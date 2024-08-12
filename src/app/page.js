'use client'
import { useState } from "react";
import "./globals.css"
import UserSearch from "./UserSearch";
import UserList from "./UserList";


export default function Home() {
  const [user,setUser]=useState([])
  console.log(user);

  const searchUser=(newUser)=>{
    setUser([...user,newUser])
  }
  return (
    <div className="container">
      <UserSearch onSearch={searchUser}/>
      <UserList users={user}/>
    </div>
  );
}
