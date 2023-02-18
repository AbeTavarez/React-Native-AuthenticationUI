import { useState } from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView
} from 'react-native';

import logo from '../../../assets/images/Logo_1.png';
import CustomButton from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInputs';
import { styles } from './styles';

const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const onSignInPressed = () => console.warn('sign in');
  const onForgotPasswordPressed = () => console.warn('forgot password');
  const onSignInWithApple = () => console.warn('sign in apple');
  const onSignInWithFacebook = () => console.warn('sign in facebook');
  const onSignInWithGoogle = () => console.warn('sign in google');
  const onSignUpPressed = () => console.warn('signup');

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

        <CustomButton
          onPress={onSignInWithApple}
          text="Sign in with Apple"
          type="primary"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          onPress={onSignInWithFacebook}
          text="Sign in with Facebook"
          type="primary"
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />
        <CustomButton
          onPress={onSignInWithGoogle}
          text="Sign in with Google"
          type="primary"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />

        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create One"
          type="link"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
