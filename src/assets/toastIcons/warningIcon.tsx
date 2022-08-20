import { ViewStyle } from 'react-native';
import React, { ReactElement } from 'react';
import { useColors } from '../../../../../src/common/hooks';
import { SvgXml } from 'react-native-svg';
import { getGeneratedTestID } from '@myatt/utils';

const warningTriangleIconSvg = `<svg viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16H15V7.99999H13V16ZM13 20H15V18H13V20ZM27.205 20.534L16.617 1.62799C16.079 0.666987 15.101 0.0929871 14 0.0929871C12.899 0.0929871 11.921 0.666987 11.382 1.62799L0.794971 20.534C0.268971 21.473 0.279971 22.588 0.823971 23.517C1.36797 24.445 2.33597 25 3.41197 25H24.588C25.664 25 26.632 24.445 27.176 23.517C27.72 22.588 27.731 21.473 27.205 20.534Z" fill="#EA712F"/>
</svg>`;

export const ToastWarningIcon = (customStyle: ViewStyle = {}, accessibilityLabel?: string, height = 24, width = 24): ReactElement => {
    const { ORANGE_REV } = useColors();
    return <SvgXml style={[{ height, width, }, customStyle]} fill={ORANGE_REV} xml={warningTriangleIconSvg} testID={getGeneratedTestID('toast_warning_icon')} accessible accessibilityLabel={accessibilityLabel} />;
};
