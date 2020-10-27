
import React from 'react';
import { StyleSheet,setState, Text,Image, View, SafeAreaView,Dimensions,Button } from 'react-native';
//Lecteur video
//import Video from 'react-native-video';
let   AppVFolder    =     'Exercicevideos';
import RNFS from 'react-native-fs';
import VideoPlayer from 'react-native-video-player';
import Mybutton from './components/Mybutton';
let DirectoryVPath= RNFS.ExternalDirectoryPath +'/'+ AppVFolder;
export default class Showvideo extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
      paused:false,
     autoplay:true
     }
   }
   componentDidMount() {
   }
play=()=>{
  alert('jio');
 

this.setState({autoplay:true,
  
});

}
render() {
  const { navigate } = this.props;  
  
      return (
         <View>
            <Text>Launchsrceen</Text>
            <VideoPlayer
            endWithThumbnail
             ref={r => this.player = r}
            autoplay={this.state.autoplay}
        

            
         video={{uri:"file://"+DirectoryVPath+"/"+this.props.route.params.Newname+".mp4"}}
         onBuffer={this.onBuffer}
         onError={this.onError}
        onLoad={console.log(this.props.route.params.Newname)}
         style={styles.videoPlayer} />
         <Button title="Play" onPress={()=>{this.player.resume() }}></Button>
         <View style={{flexDirection:'row',justifyContent:"space-between"}}>
         <Button
          onPress={() => this.player.stop()}
          title="Stop"
        />
        <Button
          onPress={() => this.player.pause()}
          title="Pause"
        />
        <Button
          onPress={() => this.player.resume()}
          title="Resume"
        /></View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   videoPlayer: {
    
     borderWidth:2,
    width:Dimensions.get('screen').width,
    height:200
 }
});
