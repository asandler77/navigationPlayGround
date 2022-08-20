import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {signUpUser} from '../state-management/reducer/AuthenticationThunkAPI';
import {COLORS} from '../constants/Colors';
import {useAppDispatch} from '../state-management/reducer/storeUtils';

const SignUp = () => {
  const dispatch = useAppDispatch();

  const onPressSignUp = () => {
    dispatch(signUpUser());
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignUp</Text>
      <TouchableOpacity
        onPress={onPressSignUp}
        style={{backgroundColor: COLORS.LIGHT_BLUE}}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
