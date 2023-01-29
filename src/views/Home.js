
import React, { useState } from "react";
import Container from '@mui/material/Container'
import { Paper, Box, Typography, Tabs, Tab } from "@mui/material";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const Home = () => {
  const [value, setvalue] = useState(0)
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <>
      <Container maxWidth="sm" sx={{
        border: "2px solid red",
        p: "1%"
      }}>
        <Paper elevation={20} sx={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            marginTop: "100px"
          }
        }>
          <Typography variant="h4" component="h4" fontSize={30}>
            Quick Chat
          </Typography>
        </Paper>
        <Paper elevation={20} sx={{
          display: "flex",
          margin: "2px auto",
          // border: "2px solid red",
          flexDirection: "column",
          backgroundColor: "white"

        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
          }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Login" />
              <Tab label="SignUp" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp />
          </TabPanel>
        </Paper>
      </Container >
    </>
  )
};

export default Home;
const TabPanel = (props) => {
  return (
    <>
      {props.value === props.index && (<Box sx={{
        m: "2%",
        // border: "2px solid red"
      }}> {props.children}</Box>)}
    </>
  )
}