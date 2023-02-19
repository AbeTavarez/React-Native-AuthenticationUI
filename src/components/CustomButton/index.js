import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function CustomButton({
  onPress,
  text,
  type = 'primary',
  bgColor,
  fgColor
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {}
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
