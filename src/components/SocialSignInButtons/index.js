import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

export default function SocialSignInButtons() {
  const onSignInWithApple = () => console.warn('sign in apple');
  const onSignInWithFacebook = () => console.warn('sign in facebook');
  const onSignInWithGoogle = () => console.warn('sign in google');
  return (
    <>
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
    </>
  );
}
