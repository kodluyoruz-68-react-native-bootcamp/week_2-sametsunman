import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ToDoItem = ({todoItem}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
          onPress={() => editToDo(todoItem.id)} 
          onLongPress={() => removeToDo(todoItem.id)}
        >
          <Text style={styles.title}>
            {todoItem.title}
          </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    elevation: 20,
  },
  title: {
    marginVertical: 5,
  }
});

export { ToDoItem };
