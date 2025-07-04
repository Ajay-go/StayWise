import { useNavigate } from "react-router-dom";
import { useState,useEffect} from "react";

function Rooms(){
    const rooms =[
      {
        location: "Gole ka mandir",
        duration:500,
        range:8000,
        category:'single'
      },
      {
        location: "Gole ka mandir",
        duration:100,
        range:4000,
        category:'single'
      },
      {
        location: "Gole ka mandir",
        duration:1000,
        range:8000000,
        category:'house'
      },
      {
        location: "Pragati Vihar",
        duration:500,
        range:10000,
        category: 'double'
      },
      {
        location: "City Center",
        duration:100,
        range:15000,
        category: '3bhk'
      }
    ]

    const [one,setOne]=useState(false);
    const [curr,setCurr]=useState(0);
    const navigate=useNavigate();

    const handleEvent=(curr)=>{
        setCurr(curr);
        setOne(!one);
    }

    const gotoprof=()=>{
        navigate('/profile')
    }

    const handleClick = (e,index)=>{
        alert("Request Sent")
      navigate('/home');
    }

    const handleHome =()=>{
      navigate('/home')
    }

    const gotohome=()=>{
        navigate('/home');
    }

    return (
    <div className="home-page">
      <nav className="navbar">
        <h2 onClick={handleHome}>StayWise</h2>
        <input type="text" placeholder="Search..." className="search-input" />
        <div>
        <button className="profile-btn" onClick={gotohome}>Home</button>
        <button className="profile-btn" onClick={gotoprof}>Profile</button>
        </div>
      </nav>

      <div className="home-content">
        <h1>Welcome to StayWise</h1>
        <p>All the available Rooms</p>
      </div>
     
      {!one && <div className="rooms-collection">
        {rooms.map((room,index)=>
            <div onClick={()=>handleEvent(index)} className="room-nbox">
                <h2>Room no. {index+1}</h2>
                <div className="photo"></div>
                <p><strong>Location : </strong>{room.location}</p>
                <p><strong>Duration : </strong>{room.duration}</p>
                <p><strong>Range : </strong>{room.range}</p>
                <p><strong>Category : </strong>{room.category}</p>
            </div>
        )}
      </div>}

      <div>
        
      {one && rooms.length>0?(
            <div>
                <h1>ROOM SELECTED HERE {curr+1}</h1>
                <div className="decision-box">Room no. {curr+1}</div>
                <div className="details">
                    <h2>Details about the selected room</h2>
                    <h2><strong>Location :</strong>{rooms[curr].location}</h2>
                    <p><strong>Range :</strong>{rooms[curr].range}</p>
                    <p><strong>Duration :</strong>{rooms[curr].duration}</p>
                    <p><strong>Category :</strong>{rooms[curr].category}</p>
                    <button onClick={handleClick}>Send Message</button>
                </div>
            </div>):(<p></p>)}
        </div>
    </div>
  );
}

export default Rooms;