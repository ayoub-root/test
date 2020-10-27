// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import {openDatabase} from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';
const    AppFolder    =     'ExerciceImages';
const DirectoryPath= RNFS.ExternalDirectoryPath +'/'+ AppFolder;
const    AppVFolder    =     'ExerciceVideos';
const DirectoryVPath= RNFS.ExternalDirectoryPath +'/'+ AppVFolder;
RNFS.mkdir(DirectoryPath);
RNFS.mkdir(DirectoryVPath);
//alert(DirectoryPath)

var db = openDatabase({name: 'ExerciceDatabase.db'});

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_Exercice'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_Exercice', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_Exercice(Exercice_id INTEGER PRIMARY KEY AUTOINCREMENT, Exercice_name VARCHAR(20), Exercice_duree INT(10), Exercice_description TEXT)',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytext text="exercice managment" />
          <Mybutton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
