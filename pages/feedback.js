import React,{} from "react";
import Slider from "react-native-slider";
import { Image,TouchableOpacity, Button, StyleSheet, View, Text, Dimensions } from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import Dialog from "react-native-dialog";
import SoundPlayer from 'react-native-sound-player'
import Sound from 'react-native-sound';
export default class Feedback extends React.Component {
  state = {
    value: 0,
    val:0,
    color:'',
    visible:false,
  };
 
  color=(val)=>{
      if (val<255){
       //   console.log("dddd "+Math.round(val)+"rgba("+Math.round(val*2.55/2)+","+Math.round((255-(val*2.55)/2))+",0,1)");
          return("rgba("+Math.round((255-(val*2.55)))+","+Math.round((val*2.55))+",0,1)");
    
      }


  }
eval=(value)=>{ this.setState({color:this.color(value)}) ;  
if (value>0 &&value<20){this.setState({ val:"tres déficule" });}
if (value>20 && value<40){this.setState({ val:"déficule" });}
if (value>40 &&value<60){this.setState({ val:"facile" });}
if (value>60 && value<80){this.setState({ val:"un peu facile" });}
if (value>80 && value<100){this.setState({ val:"tres facile" });}
}


  render() {
    return (
      <View style={customStyles5.container}>
           <Text >
          Value: {this.state.val}
        </Text>
       
        <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={this.state.color}
        trackStyle={customStyles5.track}
        thumbStyle={customStyles5.thumb}
          value={this.state.value}
          onValueChange={value => this.eval(value)}
        /><View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <Text>minimum</Text>
            <Text>maximum</Text>
          
           
           </View>
           <View style={{alignItems:'center'}}> 
               <Mytextinput
                placeholder="Enter plus de detail sur ton feedback"
                width={600}
                marginLeft={1}
                numberOfLines={15}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10,width:Dimensions.get('screen').width-10}}
              />
                <TouchableOpacity style={styless.button} onPress={()=>{
   
   var whoosh = new Sound('aaa.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
                
                this.setState({visible:true});}}>
          <Text>enregistrer</Text>
           <Image  style={{width:20,height:20}} source={require("../images/a.png")}/>
        </TouchableOpacity>

              </View>
        
       
              <View style={styles.container}>
     
      <Dialog.Container visible={this.state.visible} style={{flexDirection:'row',alignContent:'center'}}>
        <Dialog.Title>Feadback enregistré</Dialog.Title>
        <Image  style={{width:Dimensions.get('screen').width-10,height:200, marginBottom:10,alignContent:'center'}} source={require("../images/aplo.jpg")}/>
       <Dialog.Description>
           merci de passer cet exercice 
          votre evalaution sera consédire par notre service pour plus d"amlioration
        </Dialog.Description>
        <Dialog.Button label="ok :)" onPress={()=>{this.setState({visible:false});
    this.props.navigation.navigate('HomeScreen')}} />
        
      </Dialog.Container>
    </View>
        </View>
      


  
      
      
    );
  }
}
const styless = StyleSheet.create({
    container: {
    
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        width:350,
      backgroundColor: '#859a9b',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
  });
var customStyles5 = StyleSheet.create({
    track: {
      height: 18,
      borderRadius: 1,
      backgroundColor: '#d5d8e8',
    },
    thumb: {
      width: 20,
      height: 30,
      borderRadius: 1,
      backgroundColor: '#830086',
    },
    container: {
       
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center"
    }
  });
const styles = StyleSheet.create({
  container: {
      height:20,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
var customStyles6 = StyleSheet.create({
    track: {
      height: 14,
      borderRadius: 2,
      backgroundColor: 'white',
      borderColor: '#9a9a9a',
      borderWidth: 1,
    },
    thumb: {
      width: 20,
      height: 20,
      borderRadius: 2,
      backgroundColor: '#eaeaea',
      borderColor: '#9a9a9a',
      borderWidth: 1,
    }
  });