import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return "Loading..."

  return (
    <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,idx) => (
            <Box key={idx}>
                {/* is item.id.videoId exist, it is a video => show video card, else channel card*/}
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos