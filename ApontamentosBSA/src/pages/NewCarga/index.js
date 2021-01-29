import React , { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Bsa_Logo.png';


import {
    Container, ContentScroll, Logo, Input, SelectLista, EnvolvePicker,
    MainTitle, Lbutton, HeaderC, Lvbutton, Lobutton, Tbutton, CircleBig,
    Top, SubItem, Title, Hello, Usern, SubItemF, EnvolvePickerMini,
    EnvolvePickerMed, EnvolveRow, EnvolvePickerMax, Lista, HeaderList, ItemList, PX, OP, COL, ACTIONS, ACTIONST, Description, CX
} from './styles';


const NewCarga = () => {
    const [carga, setCarga] = useState(false);


    const [cavalinho, setCavalinho] = useState('');
    const [motorista, setMotorista] = useState('');
    const [trela1, setTrela1] = useState('');
    const [trela2, setTrela2] = useState('');

    //dados temporários
    const [initialId, setInitialId] = useState(1);
    const [npxtrator, setNpxtrator] = useState('none');
    const [noptrator, setNoptrator] = useState('none');
    const [ncaixastrator, setNcaixastrator] = useState('none');
    const [npxcolhedora, setNpxcolhedora] = useState('none');
    const [nopcolhedora, setNopcolhedora] = useState('none');

    const [cargas, setCargas] = useState(null);
  


    function handledNewcarga() {
        const Cargaatual = {
            id: initialId,
            pxtrator: npxtrator,
            optrator: noptrator,
            caixas: ncaixastrator,
            pxcolhedora: npxcolhedora,
        };
        const iaId = initialId + 1;
        if(cargas === null){
            const cargas2 = [Cargaatual];
            console.tron.log(Cargaatual);
            console.tron.log(cargas2);
            setCargas(cargas2);
            setInitialId(iaId);
        }else{
            const cargas2 = cargas;
            cargas2.push(Cargaatual);
            console.tron.log(Cargaatual);
            console.tron.log(cargas2);
            setCargas(cargas2);
            setInitialId(iaId);
        }
        
    }

    function handleRemove(removeto){

        var cargas2 = cargas;

        var filtered = cargas2.filter(function(item) { 
            return item.id !== removeto;  
        });

        console.tron.log(filtered);

    }

    if(carga){
        return(
            <Container>
                <ContentScroll>

                    <HeaderC>
                        <Lvbutton>
                            <Icon name="local-shipping" size={16} color="#fff" />
                            <Tbutton>{cavalinho}</Tbutton>


                        </Lvbutton>
                        <Lobutton>
                            <Icon name="person" size={16} color="#fff" />
                            <Tbutton numberOfLines={1}>{motorista}</Tbutton>
                        </Lobutton>
                    </HeaderC>

                    <EnvolveRow>
                        <EnvolvePickerMini>
                            <SelectLista
                                selectedValue={npxtrator}
                                onValueChange={(itemValue) => setNpxtrator(itemValue)}>
                                <SelectLista.Item label="PX" value="none" />
                                <SelectLista.Item label="288" value="288" />
                                <SelectLista.Item label="293" value="293" />
                                <SelectLista.Item label="105012" value="105012" />
                            </SelectLista>
                        </EnvolvePickerMini>

                        <EnvolvePickerMed>
                            <SelectLista
                                selectedValue={noptrator}
                                onValueChange={(itemValue) => setNoptrator(itemValue)}>
                                <SelectLista.Item label="Operador Trator" value="none" />
                                <SelectLista.Item label="Jose Batista" value="6500" />
                            </SelectLista>
                            <Icon name="person" size={16} color="#fff" />
                        </EnvolvePickerMed>

                        <EnvolvePickerMini>
                            <SelectLista
                                selectedValue={ncaixastrator}
                                onValueChange={(itemValue) => setNcaixastrator(itemValue)}>
                                <SelectLista.Item label="CX" value="none" />
                                <SelectLista.Item label="1" value="1" />
                                <SelectLista.Item label="2" value="2" />
                            </SelectLista>
                        </EnvolvePickerMini>

                    </EnvolveRow>

                    <EnvolveRow>

                        <EnvolvePickerMini>
                            <SelectLista
                                selectedValue={npxcolhedora}
                                onValueChange={(itemValue) => setNpxcolhedora(itemValue)}>
                                <SelectLista.Item label="PX" value="none" />
                                <SelectLista.Item label="167" value="167" />
                            </SelectLista>
                        </EnvolvePickerMini>

                        <EnvolvePickerMax>
                            <SelectLista
                                selectedValue={nopcolhedora}
                                onValueChange={(itemValue) => setNopcolhedora(itemValue)}>
                                <SelectLista.Item label="Operador Colhedora" value="none" />
                                <SelectLista.Item label="Altino Ferreira Lima" value="6555" />
                            </SelectLista>
                            <Icon name="person" size={16} color="#fff" />
                        </EnvolvePickerMax>

                    </EnvolveRow>
                    <Lbutton onPress={() => handledNewcarga()}>
                        <Tbutton>Adicionar</Tbutton>

                        <Icon name="add" size={16} color="#fff" />
                    </Lbutton>


                    <Description>Cargas Lançadas</Description>
                    
                    <HeaderList>
                        <PX>Trator</PX>
                        <OP>Operador</OP>
                        <COL>Col.</COL>
                        <CX>CX</CX>
                        <ACTIONS><ACTIONST>Del</ACTIONST></ACTIONS>
                    </HeaderList>

                    <Lista
                        keybordShouldPersistTaps="handled"
                        data={cargas}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (

                        <ItemList>
                            <PX>{item.pxtrator}</PX>
                            <OP>{item.optrator}</OP>
                            <COL>{item.pxcolhedora}</COL>
                            <CX>{item.caixas}</CX>
                            <ACTIONS onPress={() => handleRemove(item.id)}><Icon name="remove-circle" size={16} color="#fff" /></ACTIONS>
                        </ItemList>

                        )}
                    />
                        
                </ContentScroll>
            </Container>
        );
        
    }else{
        return(
            <Container>
                <ContentScroll>
                    <CircleBig><Icon name="local-shipping" size={20} color="#fff" /></CircleBig>
                    <MainTitle>Equipamento de Carga</MainTitle>
                    <EnvolvePicker>
                        <SelectLista
                                selectedValue={cavalinho}
                                onValueChange={(itemValue) => setCavalinho(itemValue)}>
                                <SelectLista.Item label="Cavalinho" value="none" />
                                <SelectLista.Item label="262" value="262" />
                                <SelectLista.Item label="263" value="263" />
                                <SelectLista.Item label="265" value="265" />
                            </SelectLista>
                        <Icon name="local-shipping" size={16} color="#fff" />
                    </EnvolvePicker>
                    <EnvolvePicker>
                        <SelectLista
                                selectedValue={motorista}
                                onValueChange={(itemValue) => setMotorista(itemValue)}>
                                <SelectLista.Item label="Motorista" value="none" />
                                <SelectLista.Item label="UILKER GOMES DO CARMO" value="UILKER GOMES DO CARMO" />
                                <SelectLista.Item label="VICENTE CAETANO DE SOUZA" value="VICENTE CAETANO DE SOUZA" />
                            </SelectLista>
                        <Icon name="person" size={16} color="#fff" />
                    </EnvolvePicker>
                    <EnvolvePicker>
                        <Input placeholder="Trela 01" placeholderTextColor="white" />
                        <Icon name="view-column" size={16} color="#fff" />
                    </EnvolvePicker>
                    <EnvolvePicker>
                        <Input placeholder="Trela 02" placeholderTextColor="white" />
                        <Icon name="view-column" size={16} color="#fff" />
                    </EnvolvePicker>
                    <Lbutton onPress={() => setCarga(true)}>
                        <Tbutton>Próximo</Tbutton>

                        <Icon name="keyboard-arrow-right" size={16} color="#fff" />
                    </Lbutton>
                </ContentScroll>
            </Container>
        );
    }
}


NewCarga.navigationOptions = {
    title: 'Nova Carga',
    
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
  
  
  export default NewCarga;