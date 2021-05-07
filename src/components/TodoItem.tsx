import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TodoInterface} from '../storage/schemes/Todo';

interface TodoItemInterface {
  item: TodoInterface;
}

const TodoItem: React.FC<TodoItemInterface> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{props.item.title}</Text>
      <Text>{props.item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default TodoItem;
