import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInputs';
import { styles } from './styles';

export default function ForgotPasswordScreen() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = () => navigation.navigate('NewPassword');
  const onBackToSignInPressed = () => navigation.navigate('SignIn');

  return (
    <ScrollView showsVerticalScrollIndicator="false">
      <View style={styles.container}>
        <Text style={styles.title}>Reset your Password</Text>

        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton onPress={onSendPressed} text="Send" type="primary" />

        <CustomButton
          onPress={onBackToSignInPressed}
          text="Back to Sign in"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
