import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataType} from './types';
import MyButton from '../MyButton';
import {COLORS} from '../../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../../constants/UiSize';
import {SCREEN_WIDTH} from '../../constants/Constants';

interface Props {
  data: DataType;
}

const CIRCLE_SIZE = 24;

export default ({data}: Props) => {
  const {day, noteText, key, onPressClearNote} = data;
  const onPressDelete = (id: string | undefined) => {
    id && onPressClearNote?.(id);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.dateText}>{day}</Text>
        <Text style={styles.noteText}>{noteText}</Text>
      </View>
      <MyButton
        text={'x'}
        customTextStyle={styles.buttonText}
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
    borderRadius: 20,
    backgroundColor: COLORS.LIGHT_ORANGE,
    width: SCREEN_WIDTH * 0.9,
    padding: 10,
    marginVertical: Spacing.XS,
    flex:1
  },
  button: {
    backgroundColor: COLORS.ERROR_TEXT,
    marginHorizontal: Spacing.S,
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: 'center',
    fontSize: FontSize.S,
    lineHeight: LineHeight.S,
  },
  dateText: {
    lineHeight: LineHeight.M,
    fontSize: FontSize.M,
  },
  noteText: {
    borderWidth: 1,
    marginHorizontal: Spacing.XS,
    lineHeight: LineHeight.M,
    fontSize: FontSize.M,
    flexShrink: 1,
  },
});
