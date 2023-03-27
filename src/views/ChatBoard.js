import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import ChatBox from '../Components/ChatBox';
import MyChats from '../Components/MyChats';
import SideDrawer from '../Components/SideDrawer';
import { AuthContext } from '../contextProvider/AuthProvider'

const ChatBoard = () => {
  const { userInfo, updateUserState } = useContext(AuthContext);
  useEffect(() => {
    updateUserState();
  }, [])


  return (
    <div style={{ width: "100%", padding: "1px" }}>
      {userInfo && <SideDrawer />}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
      }}>
        {userInfo && <MyChats />}
        {userInfo && <ChatBox />}
      </Box>
    </div >
  )
}

export default ChatBoard
