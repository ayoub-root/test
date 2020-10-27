import React ,{useState}from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'
//import CameraRoll from "@react-native-community/cameraroll";
import RNFS from 'react-native-fs';
import RegisterExercice from '../pages/RegisterExercice';
var src;
  class Imagepick extends React.Component {
    constructor(){super();}
  state = {
    photo: null,
  }
  src="";
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
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
  Saveimage =(newname) =>{
      
  //  console.log("aaaaaaaaaaaaaaaaaa"+this.state.photo+"  "+src);
  let   AppFolder    =     'ExerciceImages';
  let DirectoryPath= RNFS.ExternalDirectoryPath +'/'+ AppFolder;
 
  RNFS.copyFile(src,DirectoryPath+'/'+newname+".jpg");
 // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbb");
}
  render() {
    
    let { photo } = this.state
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image// onLoadEnd={alert(photo.uri)}
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
         // onLoadEnd={<RegisterExercice saveimage={this.saveimage()}/>}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}

export default Imagepick;