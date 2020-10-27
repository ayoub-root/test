// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view all the Exercice*/

import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';
var db = openDatabase({ name: 'ExerciceDatabase.db' });
let   AppFolder    =     'ExerciceImages';
let DirectoryPath= RNFS.ExternalDirectoryPath +'/'+ AppFolder;
const  ViewAllExercice =({navigation})=>{
 
     let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM table_Exercice', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);
   let listViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.8, width: '100%', backgroundColor: '#808080' }}
      />
    );
  }; 
const click=(target,newnames)=>{
  navigation.navigate(target,{Newname:newnames.Exercice_name,duree:newnames.Exercice_duree,
    description:newnames.Exercice_description})}




 



  const listItemView = (item) => {
    return (
      
      <TouchableOpacity   onPress={() => click("Showvideotiming",item)} ><View 
        key={item.Exercice_id}
        style={{ backgroundColor: 'white', padding: 20,flexDirection:'row',  justifyContent:'flex-start' }}>
          <View> 
            <Image   style={{ width: 50, height: 50 }}source={{uri: "file://"+DirectoryPath+"/"+item.Exercice_name+".jpg"}}/>
    </View>
     <View  style={{marginLeft:20}}>
     {/* <Text>Id: {item.Exercice_id}</Text> */}
        <Text>Name: {item.Exercice_name}</Text>
        <Text>duree: {item.Exercice_duree}</Text>
        <Text style={{overflow:'scroll',height:20}}>description: {item.Exercice_description}</Text>
        </View>
      </View></TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
            ItemSeparatorComponent={listViewItemSeparator}
          />
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default ViewAllExercice;