import { Box, Button, Tooltip, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

const SideDrawer = () => {
    const [search, setsearch] = useState("")
    const [searchResult, setsearchResult] = useState("")
    const [loading, setloading] = useState(false)
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: "white",
                    borderWidth: "10px",
                    width: "100%",
                }}
            >
                <Tooltip title="Search User" placement="bottom">
                    <Button variant="">
                        <SearchIcon fontSize="small" />
                        <Typography variant="button" component="body">
                            Search User
                        </Typography>
                    </Button>
                </Tooltip>
            </Box>
        </>
    )
}

export default SideDrawer