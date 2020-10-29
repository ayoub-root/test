import * as React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { View,Text ,FlatList,StyleSheet,StatusBar,ScrollView, Dimensions} from 'react-native';
import { RadioButton } from 'react-native-paper';


 //var dd=5;

//
 
 

let sco=0;
 export default class Evaluation extends React.Component {
     state={
       pos:0,
        result:0,
        values:[],
     }
   // markers=[0];
     constructor(props){
         super(props);
       
         this.markers = [ ...this.state.values ];  
     }
     Item = (item) => (
    
      // [value, setValue] = React.useState('first');
    <View style={styles.item} >
     <View  >
       <Text style={styles.title}>{item.num}. {item.title} </Text>
      <RadioButton.Group value={this.state.values[item.num]} 
      onValueChange={value=>{
          console.log(this.state.values[item.num]+"")
         
         this.markers[item.num] = value;
          this.setState({values: this.markers });
          sco=sco+ 150;
          this.setState({result:this.markers.reduce((sum, i) => sum + parseInt(i), 0)});
          this.refs._scrollView.scrollTo({y:this.state.pos+150 , animated: true}); 
 }
     
      }
      >
        <View >{item.option.map((radio)=>{ 
          return(<View style={{flexDirection:'row', justifyContent:'flex-start'}}>
            <RadioButton  style={{padding:50,marginHorizontal:20}}value={radio.val+""} /><Text style={styles.items}>{radio.val} {radio.text}</Text></View>);})}</View> 
        </RadioButton.Group></View>
      
    
    
    </View>
  );
    
  
       DATA=[
      {num:1, 
      quest:'Alimentation',
      option: [{num:1, val:10, text: "Indépendant. Capable de se servir des instruments nécessaires. Prend ses repas en un temps raisonnable."},
         { num:1, val:5, text: "A besoin d'aide par exemple pour couper."},
         {num:1, val:0 , text: " Dépendance."}]
      },{
      num:2,
      quest:'Continence urinaire',
      option:
        [ {num:2, val:10 , text: " Continence."},
         {num:2, val:  5 , text: " Fuites occasionnelles."},
          {num:2, val:  0 , text:" Incontinence ou prise en charge personnelle si sonde vésicale à demeure."}]
      },{
      num:3,
      quest:'Continence rectale',
      option:
       [ {num:3, val:10 , text: " Continence. Capable de s'administrer un lavement ou un suppositoire."},
       {num:3, val:  5 , text: " Accidents occasionnels A besoin d'aide pour un lavement ou un suppositoire si nécessaire."},
        {num:3, val:  0 , text: " Incontinence."}]
      },{
      num:4,
      quest:'Usage des W.C.',
      option:
         [ {num:4, val:10 , text: " Autonome. Se sert seul du papier hygiénique, de la chasse d'eau."},
          {num:4, val:  5 , text: " Intervention d'une tierce personne."},
          {num:4, val:  0 , text: " Dépendance totale."}]
      },{
      num:5,
      quest:'Soins personnels',
      option:
        [  {num:5, val:  5 , text: " Possible sans aide."},
          {num:5, val:  0 , text: " Dépendance totale."}]
      },{
      num:6,
      quest:'Bain',
      option:
        [  {num:6, val:  5 , text: " Possible sans aide."},
          {num:6, val:  0 , text: " Dépendance totale."}]
      },{
      num:7,
      quest:'Habillage',
      option:
      [    {num:7, val:10 , text: " Indépendance {pour boutonner un bouton, fermer une fermeture éclaire, lacer ses lacets, mettre des brettelles)."},
          {num:7, val:  5 , text: " A besoin d'aide, mais fait la moitié de la tâche en un temps correcte."},
          {num:7, val:  0 , text: " Dépendance complète."}]
      },{
      num:8,
      quest:'Transfert du lit au fauteuil',
      option:
      [    {num:8, val:15 , text: " Indépendant, y compris pour faire fonctionner un fauteuil roulant."}, 
          {num:8, val:10 , text: " Peut s'asseoir mais doit être installé."},
          {num:8, val:  5 , text: " Capable de s'asseoir, mais nécessite une aide maximale pour le transfert."},
          {num:8, val:  0 , text: " Incapacité totale."}]
            
            },{
            num:9,
            quest:'Déplacement',
            option:
        [  {num:9, val:15 , text: " Marche avec soutient ou pas pour plus de 50 mètres."},
          {num:9, val:10 , text: " Marche avec aide pour 50 mètres."},
          {num:9, val:  5 , text: " Indépendant pour faire 50 mètres en fauteuil roulant."},
          {num:9, val:  0 , text: " Dépendance complète."}]
           
      },{
      num:10,
      quest:'Escaliers',
      option:
       [   {num:10, val:10 , text: " Indépendant, peut se servir de cannes."},
          {num:10, val:  5 , text: " A besoin d'aide ou de surveillance."},
          {num:10, val:  0 , text: " Incapacité totale."}]
      }
      ];

      handleScroll= (event)=> {
        this.state.pos=event.nativeEvent.contentOffset.y;
      //  console.log(event.nativeEvent.contentOffset.y);
       }
     render(){
  return (
      
 
    <View style={styles.container}>
              <Text style={{height:25,textAlign:'center',fontSize:20, backgroundColor:'rgba(12,85,00,0.4)'}}>Resultat: {this.state.result}</Text>
        <ScrollView
        onScroll={this.handleScroll} 
     
       
        ref='_scrollView'
      
       
        
    ><FlatList
   
          data={this.DATA}
          renderItem={({item})=>{return (<this.Item num={item.num} title={item.quest} option={item.option} />)}}
         // keyExtractor={item => {item.num}}
        /> 
        
     </ScrollView>
      </View>
   
         
     
     
    
  );}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 1,
      marginVertical: 2,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
      backgroundColor:'green'
    },
    items:{
        width:Dimensions.get('screen').width-100,
        paddingTop: 4,
        marginTop:3,
        marginHorizontal: 10,
    }

  });
