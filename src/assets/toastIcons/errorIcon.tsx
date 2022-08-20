import { ViewStyle } from 'react-native';
import React, { ReactElement } from 'react';
import { useColors } from '../../../../../src/common/hooks';
import { SvgXml } from 'react-native-svg';
import { getGeneratedTestID } from '@myatt/utils';

const errorRoundIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 14.25H12.75V6.75H11.25V14.25ZM11.25 17.25H12.75V15.75H11.25V17.25ZM12 0.75C5.796 0.75 0.75 5.796 0.75 12C0.75 18.204 5.796 23.25 12 23.25C18.204 23.25 23.25 18.204 23.25 12C23.25 5.796 18.204 0.75 12 0.75V0.75Z" fill="#FF4349"/>
</svg>`;

export const ToastErrorIcon = (customStyle: ViewStyle = {}): ReactElement => {
  const { RED } = useColors();
  return <SvgXml style={[{ height: 56, width: 158 }, customStyle]} fill={RED} xml={errorRoundIconSvg} testID={'iconTestId'} />;
};

export const ToastRoundErrorIcon = (customStyle: ViewStyle = {}, accessibilityLabel?: string): ReactElement => {
  const { RED_REV } = useColors();
  return <SvgXml style={[{ height: 24, width: 24 }, customStyle]} fill={RED_REV} xml={errorRoundIconSvg} testID={getGeneratedTestID('toast_error_icon')} accessible accessibilityLabel={accessibilityLabel} />;
};
