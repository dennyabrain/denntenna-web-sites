import React, { useState, useEffect } from 'react'
import {Box, Stack, Image, Video} from 'grommet'
import Stories from 'react-insta-stories'
/**
* @author
* @function Two
**/

const stories = [
    { url: 'https://lh3.googleusercontent.com/T1Dfq0u8ZTaQmx9rr7o0eTUu3DYVOBCQasWfXSQi5t9W14IcoRWkXLxcC6dyow5a4at6vNwDmi6Bhu0EpAuKAmngRqVj-VZO43kvPkjVEeo1YjAhHYhm5-lZ0t2_21LNUKxqnU2X1KNfZpr5AZbgBaPcYZA7nNmDUGCx4d4iFME7PRUA7R8lYD3hFJGPAbNIynj7KZyUUvMkbk6w2O1NTcogGgHgfHnZ9cC-LFkQJv1AYS9FSypI6n1O_74DfNiZTPlUNgYIytC3E7KbwSx0QutTZ0XoY3IWN2eFonGQodovQqU9qGlyD1Z51RDbLOjC9MqKmtZyPu2ZNNdlYIv0p1dxYTaAAcV8gqxsdSxUdOQxVxqe4OjOjJ55Xvrxf_RJBYxo4BCdtmcMmEj8FQKBAgXGh83c7FAMCu8UkF7qEB3cHlFveQtmsWCNY4BS4oCG0EGYbdENwYWYXvWpXHWBBdjnuBRZ6IufFrkahI8YcLW00ggsPl-ZyBsmnIEWBE22VB7wQW64V48QgUA3eJx-9azGorptt2wDJGvs5toCgeYEjO0ktEeyV_7mHx4_Ed_48fk7Wau3ZcOxcLawtbz9vGpqBUWIQBCmWv265FOyaIc1Sp7G1_FEcAxo13OGGFd0vPVOtJDFDdKCfberI1eK-pZVLHqRUu-5LnAzKMYCJf_7K5fOMicCyCw=w668-h1372-no', header: { heading: 'Thinking', subheading: 'a randome image should appear here', profileImage: 'https://picsum.photos/1000/1000' } }, 
    // { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, 
    // { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, 
    // { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, 
    // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video'}, 
    // { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
]

const Two = () => {
    return (
        <Stack anchor={'center'}
            >
            {/* <Stories
                stories={stories}
                defaultInterval={1500}
                width={432}
                height={768}
            /> */}
            <Video controls="over" fit="cover">
                <source key="video" src="https://arena-attachments.s3.amazonaws.com/5329849/9201f185ff99ac6a605b9b95b0c61127.mpg4?1571902985" type="video/mp4" />
            </Video>
            
            <Box 
                width={432}
                height={768}
            >
                <h1> hi </h1>
            </Box>
        </Stack>
    )
}

export default Two