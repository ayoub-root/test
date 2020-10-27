// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the Exercice

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
import Imagepick from '../components/image';
import Videopick from '../components/video';

var db = openDatabase({name: 'ExerciceDatabase.db'});
 var img=new Imagepick();
 var vid=new Videopick();
const RegisterExercice = ({navigation}) => {
  
  let [ExerciceName, setExerciceName] = useState('');
  let [Exerciceduree, setExerciceduree] = useState('');
  let [Exercicedescription, setExercicedescription] = useState('');

  let register_Exercice = () => {
    console.log(ExerciceName, Exerciceduree, Exercicedescription);
    
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

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_Exercice (Exercice_name, Exercice_duree, Exercice_description) VALUES (?,?,?)',
        [ExerciceName, Exerciceduree, Exercicedescription],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          
          if (results.rowsAffected > 0) {
            img.Saveimage(ExerciceName);
            vid.Savevideo(ExerciceName);
            Alert.alert(
              'Success',
              'You are Registered Successfully'+Imagepick.getimage,
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Registration Failed');
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
                placeholder="Enter Name"
                onChangeText={(ExerciceName) => setExerciceName(ExerciceName)}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter duree No"
                onChangeText={(Exerciceduree) => setExerciceduree(Exerciceduree)}
                maxLength={10}
                keyboardType="numeric"
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter description"
                onChangeText={(Exercicedescription) => setExercicedescription(Exercicedescription)}
                
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <Imagepick></Imagepick>
              <Videopick></Videopick>
              <Mybutton title="Submit" customClick={register_Exercice} />
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

export default RegisterExercice;
