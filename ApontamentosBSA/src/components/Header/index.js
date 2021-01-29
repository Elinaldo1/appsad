import React from 'react';

import {
    Container, Top, Logo, Title, Description, Hello, Usern, SubItem
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Bsa_Logo.png';

export function Header({data}) {
    return (
        <Container>
            <Top>
                <SubItem>
                    <Logo source={logo} />
                    <Title>
                        <Hello>Boa Noite</Hello>
                        <Usern>{data.noteiro}</Usern>
                    </Title>
                </SubItem>
                <SubItem>
                    <Title>
                        <Hello>Turno</Hello>
                        <Usern>{data.turno}</Usern>
                    </Title>
                </SubItem>
                <SubItem>
                    <Title>
                        <Hello>Liberação</Hello>
                        <Usern>{data.unlock}</Usern>
                    </Title>
                </SubItem>
                <SubItem>
                    <Title>
                        <Hello>Fazenda</Hello>
                        <Usern>{data.farm}</Usern>
                    </Title>
                </SubItem>

                <SubItem>
                    <Title>
                        <Hello>Envios</Hello>
                        <Usern>{data.envios}</Usern>
                    </Title>
                </SubItem>

            </Top>
            <Description>Por onde podemos começar?</Description>
        </Container>
    );
}