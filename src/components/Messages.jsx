import React, {useState, useEffect } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import {db} from '../firebase';
import { setEmails} from '../redux/appSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Messages = () => {

  const dispatch=useDispatch()
  const {searchText, emails}=useSelector(store=>store.appSlice)
  const [tempEmails, setTempEmails]=useState(emails)

  useEffect(()=>{
    const q=query(collection(db, "emails"), orderBy('createdAt','desc'))
    const unsubscribe= onSnapshot(q, (snapshot)=>{
      const allEmails=snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))    
      console.log(allEmails)
      dispatch(setEmails(allEmails))
    })

    return ()=> unsubscribe()
  },[])

  useEffect(()=>{
    const filteredEmail=emails?.filter((email)=>{
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase()) 

    })
    setTempEmails(filteredEmail)
  },[searchText, emails])

  return (
    <div>
      {
        tempEmails && tempEmails?.map((email)=> <Message email={email} />)
      }
    </div>
  )
}

export default Messages