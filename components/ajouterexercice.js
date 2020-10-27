// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the user

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from '../pages/components/Mytextinput';
import Mybutton from '../pages/components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'database.sqlite'});

const ajouterexercice = ({navigation}) => {
  let [id, setID] = useState('');
  let [titre, setTitre] = useState('');
  let [duree, setduree] = useState('');
  let [description, setDescription] = useState('');

  let register_user = () => {
    console.log(id, titre, duree,description);

    if (!id) {
      alert('Please fill name');
      return;
    }
    if (!titre) {
      alert('Please fill Contact Number');
      return;
    }
    if (!duree) {
      alert('Please fill description');
      return;
    }
    if (!description) {
      alert('Please fill description');
      return;
    }
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO exercice (id, titre, duree, description) VALUES (?,?,?,?)',
        [userName, userContact, userdescription],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Listexercice'),
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
                onChangeText={(id) => setID(id)}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter Name"
                onChangeText={(titre) => setTitre(titre)}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter Contact No"
                onChangeText={(duree) => setduree(duree)}
                maxLength={10}
                keyboardType="numeric"
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Enter description"
                onChangeText={(description) => setDescription(description)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <Mybutton title="Submit" customClick={register_user} />
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

export default ajouterexercice;
