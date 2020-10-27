import React ,{useState}from 'react'
import { View, Text, Image, Button } from 'react-native'
import VideoPicker from 'react-native-image-picker'
import Video from 'react-native-video';
//import CameraRoll from "@react-native-community/cameraroll";
import RNFS from 'react-native-fs';
import RegisterExercice from '../pages/RegisterExercice';
var src;
  class Videopick extends React.Component {
    constructor(){super();}
  state = {
    photo: null,
  }
  src="";
  handleChoosePhoto = () => {
    const options = {
      noData: true,
      mediaType:'video'
    }
    VideoPicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
        src=response.uri;
        console.log(this.state.photo.uri)
       // this.state={photo:response.uri};
       // var cacheImagePath = RNFS.CachesDirectoryPath+"/"+response.uri;
//console.log(cacheImagePath);


//RNFS.copyFile(response.uri,DirectoryPath+'/'+RegisterExercice.state.names);

       
      }
    })
  }
  Savevideo =(newname) =>{
      
    console.log("aaaaaaaaaaaaaaaaaa"+this.state.photo+"  "+src);
  let   AppVFolder    =     'ExerciceVideos';
  let DirectoryVPath= RNFS.ExternalDirectoryPath +'/'+ AppVFolder;
 
  RNFS.copyFile(src,DirectoryVPath+'/'+newname+".mp4");
 // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbb");
}
  render() {
    
    let { photo } = this.state
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Video// onLoadEnd={alert(photo.uri)}
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
         // onLoadEnd={<RegisterExercice saveimage={this.saveimage()}/>}
          />
        )}
        <Button title="Choose Video" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}

export default Videopick;