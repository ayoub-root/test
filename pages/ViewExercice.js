// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single Exercice

import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'ExerciceDatabase.db'});

const ViewExercice = () => {
  let [inputExerciceId, setInputExerciceId] = useState('');
  let [ExerciceData, setExerciceData] = useState({});

  let searchExercice = () => {
    console.log(inputExerciceId);
    setExerciceData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_Exercice where Exercice_id = ?',
        [inputExerciceId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setExerciceData(results.rows.item(0));
          } else {
            alert('No Exercice found');
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytextinput
            placeholder="Enter Exercice Id"
            onChangeText={(inputExerciceId) => setInputExerciceId(inputExerciceId)}
            style={{padding: 10}}
          />
          <Mybutton title="Search Exercice" customClick={searchExercice} />
          <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
            <Text>Exercice Id: {ExerciceData.Exercice_id}</Text>
            <Text>Exercice Name: {ExerciceData.Exercice_name}</Text>
            <Text>Exercice duree: {ExerciceData.Exercice_duree}</Text>
            <Text>Exercice description: {ExerciceData.Exercice_description}</Text>
          </View>
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          Example of SQLite Database in React Native
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ViewExercice;
