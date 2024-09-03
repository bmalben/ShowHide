import React, {useState} from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Message(){

    const[message,setMessage]=useState("");


    function show(){
        // shw.innerHTML=`<h2>HELLO</h2>`
        setMessage("HELLO");
    }
    function hide(){
        // show.innerHTML=`<h2></h2>`
        setMessage("");
    }
    
    
    return (
        <div>
      <div className="container main text-center mt-5">
        
        <img src="https://cdn.dribbble.com/users/185824/screenshots/2106331/message.gif" alt="" height={350} width={450} />
        <h2 id='shw'>{message}</h2>
        <div className="align-items-center p-3">
        <MDBBtn rounded className='me-1' color='success' onClick={show}>
        Show
        </MDBBtn>
        <MDBBtn rounded className='me-1' color='danger' onClick={hide}>
        Hide
        </MDBBtn>

        </div>
      </div>
    </div>
  )
}

export default Message
