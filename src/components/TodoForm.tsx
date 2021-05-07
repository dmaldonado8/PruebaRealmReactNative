import React, {useState} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import {todoActions} from '../storage/realm';
import Input from './Input';
import ListadoTodos from './ListadoTodos';
import {v4 as uuidv4} from 'uuid';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const submit = () => {
    todoActions.saveTodo({
      _id: uuidv4(),
      title: title,
      description: descripcion,
      status: false,
    });
  };

  return (
    <View>
      <Input
        label="Título"
        placeholder="Título"
        onChangeText={(v: string) => setTitle(v)}
      />
      <Input
        label="Descripción"
        placeholder="Descripción"
        onChangeText={(v: string) => setDescripcion(v)}
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.btnContainer}>
        <TouchableHighlight style={styles.btn} onPress={submit}>
          <View>
            <Text style={styles.btnText}>Guardar</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ListadoTodos />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 90,
  },
  btnContainer: {
    padding: 10,
    alignItems: 'flex-end',
  },
  btnText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});

export default TodoForm;
