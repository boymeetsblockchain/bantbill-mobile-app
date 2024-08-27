import React, { FC } from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { ViewStyle, TextStyle } from 'react-native';
import tw from 'twrnc'

interface IOTPInputComp {
  digits: number;
  onChangeText: (text: string) => void;
}

export interface Theme {
  containerStyle?: ViewStyle;
  inputsContainerStyle?: ViewStyle;
  pinCodeContainerStyle?: ViewStyle;
  filledPinCodeContainerStyle?: ViewStyle;
  pinCodeTextStyle?: TextStyle;
  focusStickStyle?: ViewStyle;
  focusedPinCodeContainerStyle?: ViewStyle;
}

export const OTPInputComp: FC<IOTPInputComp> = ({ onChangeText, digits }) => {
  return (
    <OtpInput
      numberOfDigits={digits}
      focusColor='#E5770E'
      focusStickBlinkingDuration={500}
      onTextChange={(text: string) => onChangeText(text)}
      theme={{
        pinCodeContainerStyle: tw`h-14  w-14 rounded-lg border border-gray-300`, 
        filledPinCodeContainerStyle: tw`border border-[#E5770E]`,
        containerStyle: {
          gap: 10,
          paddingHorizontal: 40,
        },
      }}
    />
  );
};
