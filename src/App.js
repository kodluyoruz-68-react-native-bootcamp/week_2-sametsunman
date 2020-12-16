import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,  View, Text, TextInput, Image,
  FlatList, StyleSheet, TouchableOpacity, Dimensions
} from 'react-native';
import { ToDoItem } from './components';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {

  const [toDoList, setToDoList] = useState([]);

  const renderToDoItem = ({item}) => (
    <ToDoItem item={item} editToDo={editToDo} removeToDo={removeToDo} />
  );

  const addToDo = () => {
    let newItem = '';
    setToDoList([...toDoList, newItem]);
  }

  const editToDo = (id) => {
    let newItem = '';
    setToDoList([...toDoList, newItem]);
  }

  const removeToDo = (id) => {
    let newItem = '';
    setToDoList([...toDoList, newItem]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text fontSize={15}>ToDo App</Text>
        </View>
        <View style={styles.count}>
           <Text>0</Text>
        </View>
      </View>
      <View style={styles.itemList}>
        <FlatList
          ListEmptyComponent={
            <Text style={styles.emptyText}>Yapılacak Madde Bulunamadı..</Text>
          }
          keyExtractor={(item, index) => item.id.toString()}
          data={toDoList}
          renderItem={renderToDoItem}
          numColumns={2}
        />
      </View>
      <View style={styles.newItem}>
        <View style={styles.newItemInput}>
           <TextInput placeholder="Yeni madde oluştur"  />
        </View>
        <TouchableOpacity style={styles.newItemButton} onPress={addToDo}>
          <Image
            source={require('./assets/plus.png')}
            style={styles.newItemButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemList: {
    flex: 8,
    backgroundColor: '#eee',
  },
  emptyText: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 30,
  },
  header: {
    flex: 1,
    backgroundColor: '#bbb',
  },
  newItem: {
    flex: 1,
    backgroundColor: '#bbb',
  },
  newItemInput: {
    width: Dimensions.get('window').width * 0.8,
    borderColor: '#ddd',
    borderRadius: 10,
    borderWidth: 1,
    padding: 3,
    margin: 10
  },
  newItemButton: {
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 10,
    right: 10,
  },
  newItemButtonIcon: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12


  },
});

export default App;
