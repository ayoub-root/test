// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to update the Exercice

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'ExerciceDatabase.db'});

const UpdateExercice = ({navigation}) => {
  let [inputExerciceId, setInputExerciceId] = useState('');
  let [ExerciceName, setExerciceName] = useState('');
  let [Exerciceduree, setExerciceduree] = useState('');
  let [Exercicedescription, setExercicedescription] = useState('');

  let updateAllStates = (name, duree, description) => {
    setExerciceName(name);
    setExerciceduree(duree);
    setExercicedescription(description);
  };

  let searchExercice = () => {
    console.log(inputExerciceId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_Exercice where Exercice_id = ?',
        [inputExerciceId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.Exercice_name, res.Exercice_duree, res.Exercice_description);
          } else {
            alert('No Exercice found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };
  let updateExercice = () => {
    console.log(inputExerciceId, ExerciceName, Exerciceduree, Exercicedescription);

    if (!inputExerciceId) {
      alert('Please fill Exercice id');
      return;
    }
    if (!ExerciceName) {
      alert('Please fill name');
      return;
    }
    if (!Exerciceduree) {
      alert('Please fill duree Number');
      return;
    }
    if (!Exercicedescription) {
      alert('Please fill description');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_Exercice set Exercice_name=?, Exercice_duree=? , Exercice_description=? where Exercice_id=?',
        [ExerciceName, Exerciceduree, Exercicedescription, inputExerciceId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Exercice updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Updation Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Enter Exercice Id"
                style={{padding: 10}}
                onChangeText={(inputExerciceId) => setInputExerciceId(inputExerciceId)}
              />
              <Mybutton title="Search Exercice" customClick={searchExercice} />
              <Mytextinput
                placeholder="Enter Name"
                value={ExerciceName}
                style={{padding: 10}}
                onChangeText={(ExerciceName) => setExerciceName(ExerciceName)}
              />
              <Mytextinput
                placeholder="Enter duree No"
                value={'' + Exerciceduree}
                onChangeText={(Exerciceduree) => setExerciceduree(Exerciceduree)}
                maxLength={10}
                style={{padding: 10}}
                keyboardType="numeric"
              />
              <Mytextinput
                value={Exercicedescription}
                placeholder="Enter description"
                onChangeText={(Exercicedescription) => setExercicedescription(Exercicedescription)}
               
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <Mybutton title="Update Exercice" customClick={updateExercice} />
            </KeyboardAvoidingView>
          </ScrollView>
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

export default UpdateExercice;
