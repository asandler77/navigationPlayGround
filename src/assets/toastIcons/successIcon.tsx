import { ViewStyle } from 'react-native';
import React, { ReactElement } from 'react';
import { useColors } from '../../../../../src/common/hooks';
import { SvgXml } from 'react-native-svg';

const successRoundIconSvg = `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2502 16.0608L6.21974 12.0303L7.28024 10.9698L10.2502 13.939L16.7197 7.46951L17.7802 8.53076L10.2502 16.0608ZM12 0.25C5.79675 0.25 0.75 5.29675 0.75 11.5C0.75 17.7033 5.79675 22.75 12 22.75C18.2033 22.75 23.25 17.7033 23.25 11.5C23.25 5.29675 18.2033 0.25 12 0.25Z" fill="#3DA930"/>
</svg>`;

export const ToastSuccessIcon = (customStyle: ViewStyle = {}): ReactElement => {
  const { GREEN } = useColors();
  return <SvgXml style={[{ height: 56, width: 158 }, customStyle]} fill={GREEN} xml={successRoundIconSvg} testID={'iconTestId'} />;
};
