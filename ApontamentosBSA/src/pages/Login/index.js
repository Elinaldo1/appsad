import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
//
import logo from '~/assets/Bsa_Logo.png';

import {
  Container, ContentScroll, Logo, Input, SelectLista, EnvolvePicker, Title, Lbutton, Tbutton
} from './styles';



const Login = ({ navigation }) => {
  const [noteiro, setNoteiro] = useState('');
  const [turno, setTurno] = useState('');
  const [farm, setFarm] = useState('');
  const [unlock, setUnlock] = useState('');
  return(
  
  <Container>

    <ContentScroll>
      <Logo source={logo} />
      <Title>Por favor, identifique-se</Title>
      <EnvolvePicker>
        <SelectLista
          selectedValue={noteiro}
          onValueChange={(itemValue) => setNoteiro(itemValue)}>
          <SelectLista.Item label="Noteiro" value="none" />
          <SelectLista.Item label="Adriel Isac Andrade Mendes" value="Adriel" />
          <SelectLista.Item label="Desire Noally" value="Desire" />
          <SelectLista.Item label="Jonas Jhonny" value="Jonas" />
        </SelectLista>
        <Icon name="person" size={16} color="#fff" />
      </EnvolvePicker>
      <EnvolvePicker>
        <SelectLista
          selectedValue={turno}
          onValueChange={(itemValue) => setTurno(itemValue)}>
          <SelectLista.Item label="Turno" value="none" />
          <SelectLista.Item label="A" value="A" />
          <SelectLista.Item label="B" value="B" />
          <SelectLista.Item label="C" value="C" />
        </SelectLista>
        <Icon name="watch-later" size={16} color="#fff" />
      </EnvolvePicker>
      <EnvolvePicker>
        <Input placeholder="Ticket Fazenda" placeholderTextColor="white" onChangeText={setFarm} />
        <Icon name="landscape" size={16} color="#fff" />
      </EnvolvePicker>
      <EnvolvePicker>
        <Input placeholder="Liberação" placeholderTextColor="white" onChangeText={setUnlock} />
        <Icon name="lock-open" size={16} color="#fff" />
      </EnvolvePicker>
      <Lbutton onPress={() => navigation.navigate('Main', {
        noteiro: noteiro,
        turno: turno,
        farm: farm,
        unlock: unlock
      })}>
        <Tbutton>Próximo</Tbutton>
        <Icon name="keyboard-arrow-right" size={16} color="#fff" />
      </Lbutton>
    </ContentScroll>
  </Container>
);
}

Login.navigationOptions = {
  title: 'BSA Apontamentos',
  headerStyle: {
    backgroundColor: '#00a436',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    }
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },

}

export default Login;