import React, { useState } from 'react';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components';

import { Grid } from '@material-ui/core';

const App= () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

 const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCeUyBTSJsMQpqr_fgmipvQePk7Vx9iIc8',
        q: searchTerm,
      }
    });

     setVideos(response.data.items);
     setSelectedVideo(response.data.items[0]);
  }

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
              	<SearchBar onFormSubmit={handleSubmit}/>
              </Grid>
              <Grid item xs={8}>
              	<VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
              	<VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}


// class App extends React.Component {

//     state = {
//         videos: [],
//         selectedVideo: null,
//       }
      
//     handleSubmit = async (searchTerm) => {
//         const response = await youtube.get('search', {
//           params: {
//             part: 'snippet',
//             maxResults: 5,
//             key: 'AIzaSyCeUyBTSJsMQpqr_fgmipvQePk7Vx9iIc8',
//             q: searchTerm,
//           }
//         });
    
//         this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
//       }

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video });
//       }

// 	render() {

//       const { selectedVideo, videos } = this.state;

//       return (
//         <Grid style={{ justifyContent: 'center' }} container spacing={10}>
//           <Grid item xs={11}>
//             <Grid container spacing={10}>
//               <Grid item xs={12}>
//               	<SearchBar onFormSubmit={this.handleSubmit}/>
//               </Grid>
//               <Grid item xs={8}>
//               	<VideoDetail video={selectedVideo}/>
//               </Grid>
//               <Grid item xs={4}>
//               	<VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       );
//     }
// }

export default App;