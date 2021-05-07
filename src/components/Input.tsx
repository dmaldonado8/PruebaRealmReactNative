import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputInterface {
  label: string;
  placeholder: string;
  onChangeText(v: string): void;
  multiline?: boolean;
  numberOfLines?: number;
}

const Input: React.FC<InputInterface> = props => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={props.multiline ? styles.inputMultiline : styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    padding: 10,
  },
  label: {
    fontSize: 15,
  },
  input: {
    height: 40,
    fontSize: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  inputMultiline: {
    height: 90,
    fontSize: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

export default Input;
