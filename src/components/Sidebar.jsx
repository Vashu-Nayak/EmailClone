import React, { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineWatchLater, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdInbox } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
// import {SendMail} from './SendMail'
import {setOpen} from '../redux/appSlice'

const sidebarItems = [
    {
        icon: <LuPencil size={'24px'} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={'24px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={'24px'} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'24px'} />,
        text: "Draft"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
        text: "More"
    }

]

const Sidebar = () => {
    // const [open,setOpen]=useState(false)
    const dispatch=useDispatch()
    return (
        <div className='w-[15%]'>
            <div className="p-3">
                <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
                    <LuPencil size={'24px'} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Sidebar