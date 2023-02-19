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
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { styles } from './styles';

export default function SignUpScreen() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { height } = useWindowDimensions();

  const onRegisterPressed = () => console.warn('sign in');
  const onSignInPressed = () => console.warn('signup');
  const onTermsPressed = () => console.warn('terms of use');
  const onPrivacyPressed = () => console.warn('privacy policy');

  return (
    <ScrollView showsVerticalScrollIndicator="false">
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
          secureTextEntry={true}
        />

        <CustomButton
          onPress={onRegisterPressed}
          text="Register"
          type="primary"
        />

        {/* TERMS OF USE AND PRIVACY INFO  */}
        <Text style={styles.terms}>
          By registering, you confirm that you accept our{' '}
          <Text onPress={onTermsPressed} style={styles.link}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text onPress={onPrivacyPressed} style={styles.link}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          onPress={onSignInPressed}
          text="Already have an account? Sign in"
          type="link"
        />
      </View>
    </ScrollView>
  );
}
