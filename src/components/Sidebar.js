import React from 'react'
import Sidepanel from './Sidepanel'
import SidebarAvatar from './SidebarAvatar'
import "../App.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Sidepanel/>
        <SidebarAvatar/>
    </div>
  )
}

export default Sidebar