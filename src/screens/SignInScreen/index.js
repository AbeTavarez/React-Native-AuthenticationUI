import { useState } from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/images/Logo_1.png';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInputs';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { styles } from './styles';

export default function SignInScreen() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  // Event Handlers =========
  const onSignInPressed = () => {
    //TODO: Validate user
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator="false">
      <View style={styles.container}>
        <Image source={logo} style={{ ...styles.logo, height: height * 0.3 }} />
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton onPress={onSignInPressed} text="Sign In" type="primary" />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type="link"
        />

        <SocialSignInButtons />

        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create One"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
