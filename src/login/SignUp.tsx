import React, {useState} from 'react';
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
import {COLORS} from '../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../constants/UiSize';
import {getDefaultValues} from '../utils/helpers';
import {SCREEN_WIDTH} from '../constants/Constants';

export const SignUp = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpErrMsg, setSignUpErrMsg] = useState('');
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
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>{'SignUp'}</Text>
      <FormInput
        name="email"
        control={control}
        placeholder="Email"
        customInputStyle={styleSheet.input}
        // customTitleStyle={styleSheet.inputTitle}
        customPlaceHolderStyle={COLORS.WHITE}
        rules={{required: `Email is not valid`}}
      />
      <FormInput
        name="password"
        control={control}
        placeholder="Password"
        customInputStyle={styleSheet.input}
        // customTitleStyle={styleSheet.inputTitle}
        rules={{required: `Password is not valid`}}
        customPlaceHolderStyle={COLORS.WHITE}
      />
      <Button
        customBtnContainerStyle={styleSheet.button}
        errMsg={signUpErrMsg}
        isLoading={isLoading}
        onPress={handleSubmit(onHandleSubmit)}
        btnLabel="Save"
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
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
