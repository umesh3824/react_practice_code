import { useState } from "react";

function InputEle(){
    const [name,setName]=useState('');
    return(
        <div>
            Name: <input type="text" value={name} onChange={e => setName(e.target.value)}/> <br/>
            {name}
        </div>
    );
}

function InputEleAll(){
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    return(
        <div>
            Name: <input type="text" value={name} onChange={e => setName(e.target.value)}/> <br/>
            contact: <input type="text" value={contact} onChange={e => setContact(e.target.value)}/> <br/>
            {name+ " "+contact}
        </div>
    );
}


function InputEleAllWithOne(){
    const [userInfo,setUserInfo]=useState({
        name:'',
        contact: ''
    });

    const handler=(e)=>{
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    return(
        <div>
            Name: <input type="text" name="name" value={userInfo.name} onChange={e => handler(e)}/> <br/>
            contact: <input type="text" name="contact" value={userInfo.contact} onChange={e => handler(e)}/> <br/>
            {userInfo.name+ " "+userInfo.contact}
        </div>
    );
}

function InputEleAllWithOneHandler(){
    const [userInfo,setUserInfo]=useState({
        name:'',
        contact: ''
    });
    
    return(
        <div>
            Name: <input type="text" name="name" value={userInfo.name} onChange={e => setUserInfo({...userInfo,[e.target.name]:e.target.value})(e)}/> <br/>
            contact: <input type="text" name="contact" value={userInfo.contact} onChange={e => setUserInfo({...userInfo,[e.target.name]:e.target.value})(e)}/> <br/>
            {userInfo.name+ " "+userInfo.contact}
        </div>
    );
}

export default InputEleAllWithOneHandler;