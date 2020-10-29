
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
         time:null,
      paused:false,
     autoplay:true
     }
   }
   componentDidMount() {
   }
play=()=>{

 

this.setState({autoplay:true,
  
});

}
 convertHMS(value) {
   const sec = parseInt(value, 10); // convert value to number if it's string
   let hours   = Math.floor(sec / 3600); // get hours
   let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
   let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
   // add 0 if value < 10
   if (hours   < 10) {hours   = "0"+hours;}
   if (minutes < 10) {minutes = "0"+minutes;}
   if (seconds < 10) {seconds = "0"+seconds;}
   return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
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
         onProgress={e =>{this.setState({time:parseInt(e.currentTime)}); if(e.currentTime>=this.props.route.params.duree)this.player.pause(); }}
        onLoad={console.log(this.props.route.params.Newname)}
         style={styles.videoPlayer} />
        
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
        />
        </View>

<Text ref={this.timerr} style={{
        
         fontSize:40, marginTop:50,flexDirection:'row',
         textAlign: 'center',
     // paddingLeft:Dimensions.get('screen').width/3,justifyContent:'center'
   }}
      >{this.convertHMS(this.state.time)}</Text>
              <View ><Button  title="terminer" onPress={()=>{this.player.pause();
            this.props.navigation.navigate('Feedback',{name:'',description:''});
            
            }}></Button></View> 

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
