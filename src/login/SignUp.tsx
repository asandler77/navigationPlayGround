import React, {useState} from 'react';
import {Text, View} from 'react-native';
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
import {COLORS} from '../constants/Colors';
import {getDefaultValues} from '../utils/helpers';
import {loginStyleSheet} from './SignIn';

export const SignUp = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const isSignUpSucceed: boolean = useAppSelector(selectIsSignUpSucceed);

  const {control, handleSubmit} = useForm<LoginData>({
    defaultValues: getDefaultValues(),
  });

  const onHandleSubmit = (formValues: LoginData) => {
    const {email, password} = formValues;
    setIsLoading(true);
    dispatch(signUpUser({email, password}));
    setTimeout(() => {
      setIsLoading(false);
      navigation.goBack();
    }, 2000);
  };

  return (
    <View style={loginStyleSheet.container}>
      <Text style={loginStyleSheet.title}>{'SignUp'}</Text>
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
        btnLabel="Save"
      />
    </View>
  );
};
