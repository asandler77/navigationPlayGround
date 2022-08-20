import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {LoginData} from './types';
import {FormInput} from '../components/form/FormInput';
import {Button} from '../components/common/Button';
import {
  useAppDispatch,
  useAppSelector,
} from '../state-management/reducer/storeUtils';
import {selectIsSignUpSucceed} from '../state-management/reducer/authSelector';
import {signUpUser} from '../state-management/reducer/AuthenticationThunkAPI';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {COLORS} from '../constants/Colors';
import {FontSize, LineHeight} from '../constants/UiSize';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const isSignUpSucceed: boolean = useAppSelector(selectIsSignUpSucceed);

  const {
    control,
    handleSubmit,
    watch: startFormValuesWatch,
  } = useForm<LoginData>();
  const [isLoading, setIsLoading] = useState(false);
  const [signUpErrMsg, setSignUpErrMsg] = useState('');

  useEffect(() => {
    startFormValuesWatch();
  }, []);

  const onHandleSubmit = (formValues: LoginData) => {
    const {email, password} = formValues;
    setIsLoading(true);
    setTimeout(() => {
      dispatch(signUpUser({email, password}));
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>{'SignUp'}</Text>
      <FormInput
        name="email"
        control={control}
        placeholder="email"
        title="EMAIL"
        customInputStyle={styleSheet.input}
        customTitleStyle={styleSheet.inputTitle}
        rules={{required: `Email is not valid`}}
      />
      <FormInput
        name="password"
        control={control}
        placeholder="password"
        title="PASSWORD"
        customInputStyle={styleSheet.input}
        customTitleStyle={styleSheet.inputTitle}
        rules={{required: `Password is not valid`}}
      />
      <Button
        errMsg={signUpErrMsg}
        isLoading={isLoading}
        onPress={handleSubmit(onHandleSubmit)}
        btnLabel="Save"
      />
      {isSignUpSucceed &&
        Toast.show({
          type: 'success',
          visibilityTime: 4000,
          position: 'bottom',
          text1: 'SignUp succeed',
        })}
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREY,
  },

  title: {
    lineHeight: LineHeight['4XL'],
    fontSize: FontSize['4XL'],
    justifyContent: 'center',
    marginVertical: LineHeight.XL,
  },
  input: {
    fontSize: FontSize.L,
    lineHeight: LineHeight.L,
    backgroundColor: COLORS.INPUT_GREY,
    marginBottom: LineHeight.XL,
  },
  inputTitle: {
    fontSize: FontSize.XL,
    lineHeight: LineHeight.XL,
    marginBottom: LineHeight.S,
  },
});
