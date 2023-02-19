import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInputs';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { styles } from './styles';

export default function SignUpScreen() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();

  // Events Handlers =========
  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onTermsPressed = () => {
    //TODO: Create page and add page to navigation
    navigation.navigate('TermsOfUse');
  };
  const onPrivacyPressed = () => {
    //TODO: Create page and add page to navigation
    navigation.navigate("PrivacyPolicy'");
  };

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
