import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../constants/UiSize';
import {SCREEN_WIDTH} from '../constants/Constants';

export const MainLoginPage = ({navigation}) => {
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
        <Text style={styles.text}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.text}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
    flex: 1,
  },
  text: {
    color: COLORS.WHITE,
    marginHorizontal: Spacing.L,
    marginVertical: Spacing.M,
    lineHeight: LineHeight.M,
    fontSize: FontSize.M,
    fontWeight: 'bold',
  },
  button: {
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 24,
    marginVertical: Spacing.S,
    width: SCREEN_WIDTH * 0.5,
    alignItems: 'center',
  },
});
