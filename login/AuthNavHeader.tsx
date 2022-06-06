import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BaseText} from "./BaseText";

interface Props {
  prevScreenName: string;
}

export const AuthNavHeader = ({prevScreenName}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={navigation.goBack}>
      <BaseText text={prevScreenName} customTextStyle={styles.screenLabel} />
      <Text style={styles.backArrow}>{'>'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 25,
    backgroundColor: 'white',
  },
  backArrow: {
    color: 'blue',
    marginLeft: 10,
    fontSize: 18,
  },
  screenLabel: {
    color: 'blue',
    textAlign: 'right',
    fontSize: 16,
  },
});
