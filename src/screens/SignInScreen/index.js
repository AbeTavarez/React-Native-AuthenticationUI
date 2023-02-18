import { useState } from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';

import logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInputs';
import { styles } from './styles';

const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  return (
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
    </View>
  );
};

export default SignInScreen;
