import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../constants/UiSize';
import {SCREEN_WIDTH} from '../constants/Constants';
import {useAppDispatch} from '../state-management/reducer/storeUtils';
import {useForm} from 'react-hook-form';
import {LoginData} from './types';
import {getDefaultValues} from '../utils/helpers';
import {FormInput} from '../components/form/FormInput';
import {Button} from '../components/common/Button';
import {isUserAuthenticated} from '../state-management/reducer/AuthenticationThunkAPI';

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {control, handleSubmit} = useForm<LoginData>({
    defaultValues: getDefaultValues(),
  });

  const onHandleSubmit = (formValues: LoginData) => {
    const {email, password} = formValues;
    setIsLoading(true);
    dispatch(isUserAuthenticated({email, password}));
    // setTimeout(() => {
      setIsLoading(false);
    // }, 2000);
  };

  return (
    <View style={loginStyleSheet.container}>
      <Text style={loginStyleSheet.title}>{'SignIn'}</Text>
      <FormInput
        name="email"
        control={control}
        placeholder="Email"
        customInputStyle={loginStyleSheet.input}
        customPlaceHolderStyle={COLORS.WHITE}
        rules={{required: `Email is not valid`}}
      />
      <FormInput
        name="password"
        control={control}
        placeholder="Password"
        customInputStyle={loginStyleSheet.input}
        rules={{required: `Password is not valid`}}
        customPlaceHolderStyle={COLORS.WHITE}
      />
      <Button
        customBtnContainerStyle={loginStyleSheet.button}
        isLoading={isLoading}
        onPress={handleSubmit(onHandleSubmit)}
        btnLabel="Login"
      />
    </View>
  );
};

export const loginStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
  },

  title: {
    lineHeight: LineHeight['4XL'],
    fontSize: FontSize['4XL'],
    justifyContent: 'center',
    marginVertical: LineHeight.XL,
  },
  input: {
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 24,
    marginVertical: Spacing.S,
    width: SCREEN_WIDTH * 0.8,
    textAlign: 'center',
    lineHeight: LineHeight.L,
    fontSize: FontSize.L,
  },
  inputTitle: {
    fontSize: FontSize.XL,
    lineHeight: LineHeight.XL,
    marginBottom: LineHeight.S,
  },
  button: {
    width: '90%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    marginTop: Spacing['3XL'],
    lineHeight: LineHeight.L,
    fontSize: FontSize.L,
    backgroundColor: COLORS.LIGHT_BLUE,
  },
});
