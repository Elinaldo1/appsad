import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header } from '~/components/Header';

import {
  Container, ContentScroll, Tabs, TabsContainer, TabItem, TabText, Description
} from './styles';


const Main = ({ navigation }) => {

  const noteiro = navigation.getParam('noteiro');
  const farm = navigation.getParam('farm');
  const unlock = navigation.getParam('unlock');
  const turno = navigation.getParam('turno');
  const [envios, setEnvio] = useState('0');
  const items = {
    noteiro: noteiro,
    turno: turno,
    farm: farm,
    unlock: unlock,
    envios: envios
  };
  return(
    <Container>
      <ContentScroll>
        <Header data={items}/>
        <Tabs>
            <TabsContainer>
                <TabItem onPress={() => navigation.navigate('NewCarga')}>
                    <Icon name="local-shipping" size={24} color='#fff' />
                    <TabText>Nova carga</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="history" size={24} color='#fff' />
                    <TabText>Histórico</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="person-add" size={24} color='#fff' />
                    <TabText>Cadastros</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="assessment" size={24} color='#fff' />
                    <TabText>Ranking</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="assessment" size={24} color='#fff' />
                    <TabText>Percurso</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="assessment" size={24} color='#fff' />
                    <TabText>Conferir Nota</TabText>
                </TabItem>

            </TabsContainer>
            <Description>Temos algumas notas em aberto</Description>
            <TabsContainer>
                <TabItem>
                    <Icon name="local-shipping" size={24} color='#fff' />
                    <TabText>260</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="local-shipping" size={24} color='#fff' />
                    <TabText>262</TabText>
                </TabItem>
            </TabsContainer>
        </Tabs>
      </ContentScroll>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Menu Principal',
  
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


export default Main;