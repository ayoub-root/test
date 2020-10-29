
import React from 'react';
import { StyleSheet,setState, Text,Image, View, SafeAreaView,Dimensions,Button } from 'react-native';
//Lecteur video
//import Video from 'react-native-video';
let   AppFolder    =     'Exerciceimages';
import RNFS from 'react-native-fs';
import VideoPlayer from 'react-native-video-player';
import Mybutton from './components/Mybutton';
import Tts from 'react-native-tts';
import Loading from './timer';
let DirectoryPath= RNFS.ExternalDirectoryPath +'/'+ AppFolder;
export default class Showvideotiming extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         show:'none',
         counter:3,
         timer:null,
      paused:false,
    
     }
   }
   componentDidMount() {
   }
play=()=>{
  alert('jio');
 

this.setState({autoplay:true,
  
});

}

startt() {
  
   
  
 }

 

 tick =() => {if(this.state.counter<1) {
    this.props.navigation.navigate('Showvideo',{Newname:this.props.route.params.Newname,
      duree:this.props.route.params.duree});
  this.setState({counter:3,show:'none'});
  clearInterval(this.state.timer);
  this.state.show='none';
}else
   this.setState({
     counter: this.state.counter - 1
   });
 }
render() {
  const { navigate } = this.props;  
  
      return (
         <View>
            <View>  
               <Text style={{width:Dimensions.get('screen').width,paddingBottom:20}}>
                  information sur l'exercice</Text>
            <Image
          
            
         source={{uri:"file://"+DirectoryPath+"/"+this.props.route.params.Newname+".jpg"}}
         onLoad={console.log(this.props.route.params.description)}
         style={styles.videoPlayer} />

      <Text style={{paddingBottom:20}}>la Duree: {this.props.route.params.duree} min.</Text>
      <Text style={{paddingBottom:20}}>Description: {this.props.route.params.description}</Text>
      <Text ref={this.timerr} style={{
         display:this.state.show,
         fontSize:120, marginTop:50,flexDirection:'row',
      paddingLeft:Dimensions.get('screen').width/3,justifyContent:'center'}}
      >0{this.state.counter}</Text>
       
     </View>
        <View style={{marginTop:50}}>
        
          <Button style={{marginTop:10}} title="Play" onPress={()=>{
            this.setState({timer:setInterval(this.tick, 650)});
            this.state.show='flex',
           //  
          
             Tts.setDefaultPitch(1);
             Tts.setDefaultRate(1, true);
            
            // this.setState({timer:"03"}) ; 
             Tts.speak("3");  
          
             Tts.speak("2");  
            
             Tts.speak("1");
             
          
             Tts.speak("aller");  
           
              }}>

          </Button>
       </View>
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
