import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getRealmInstance, todoActions} from '../storage/realm';
import {TodoInterface} from '../storage/schemes/Todo';
import TodoItem from './TodoItem';

const ListadoTodos = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const list = todoActions.retrieveAllTodos();
    setTodos([...list]);
    list.addListener(() => {
      setTodos([...list]);
    });

    return () => {
      const listRl = todoActions.retrieveAllTodos();
      listRl.removeListener();
      const r = getRealmInstance();
      r.close();
    };
  }, []);

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Listado de tareas</Text>
      {todos.map((item: TodoInterface, idx: any) => {
        return <TodoItem key={idx} item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ListadoTodos;
