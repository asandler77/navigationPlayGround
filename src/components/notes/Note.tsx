import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataType} from './types';
import {FontSize, Spacing} from '../../ui/uiLibrary';
import MyButton from "../MyButton";

interface Props {
  data: DataType;
}

const CIRCLE_SIZE = 20;

export default ({data}: Props) => {
  const {day, noteText, key, onPressClearNote} = data;
  const onPressDelete = (id: string | undefined) => {
    id && onPressClearNote?.(id);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 10}}>{day}</Text>
        <Text>{noteText}</Text>
      </View>
      <MyButton
        text={'x'}
        customTextStyle={styles.text}
        customButtonStyle={styles.button}
        onPress={() => onPressDelete(key)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff8dc',
    width: 300,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    marginHorizontal: Spacing.S,
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: FontSize.M,
  },
});
