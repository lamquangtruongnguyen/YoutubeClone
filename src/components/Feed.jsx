import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from "./"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  // fetch data immediately after the application loads
  // q stands for query
  useEffect(()=>{
    // return a promise
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(data => setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Left section */}
      <Box sx={{ height: { sx: 'auto', md: '92.75vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2} }}>
        {/* Sidebar component */}
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
        {/* Footer */}
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      {/* Right section */}
      <Box p={2} 
        sx={{ 
          overflowY: 'auto',
          height: '90vh',
          flex: 2
          }}
      >
      {/* Header */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed