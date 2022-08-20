import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {FontSize, Spacing} from '../../constants/UiSize';

interface Props {
  btnLabel: string;
  onPress: () => void;
  customBtnContainerStyle?: ViewStyle;
  customBtnLabelStyle?: TextStyle;
  secondaryBtn?: boolean;
  isLoading?: boolean;
  customLoaderStyle?: ViewStyle;
  errMsg?: string;
}

export const Button = (props: Props) => {
  const {btnLabel, onPress, secondaryBtn, isLoading, errMsg} = props;
  const {customBtnContainerStyle, customBtnLabelStyle, customLoaderStyle} =
    props;
  return (
    <>
      {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}

      <TouchableOpacity
        style={[
          secondaryBtn ? styles.secondaryBtnContainer : styles.btnContainer,
          customBtnContainerStyle,
        ]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator
            style={[styles.loaderStyle, customLoaderStyle]}
            color={COLORS.WHITE}
          />
        ) : (
          <Text
            style={[
              secondaryBtn ? styles.btnLabelSecondary : styles.btnLabel,
              customBtnLabelStyle,
            ]}>
            {btnLabel}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.DEEP_BLUE,
  },
  btnLabel: {
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingVertical: Spacing.M,
    fontSize: FontSize.M,
  },
  secondaryBtnContainer: {
    backgroundColor: COLORS.WHITE,
  },
  btnLabelSecondary: {
    color: COLORS.DEEP_BLUE,
    textAlign: 'center',
    paddingVertical: Spacing.M,
    fontSize: FontSize.M,
  },
  loaderStyle: {
    paddingVertical: Spacing.M,
  },
  errMsg: {
    marginTop: Spacing.L,
    textAlign: 'center',
    color: COLORS.ERROR_TEXT,
  },
});
