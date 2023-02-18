import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry
}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
