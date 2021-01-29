import styled from 'styled-components/native';


export const Container = styled.View`
    align-items: center;
    align-content: center;
    padding: 20px 0 20px;
`;

export const Top = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

export const SubItem = styled.View`
    flex-direction: row;
`

export const Logo = styled.Image`
    width:30px;
    height:30px;
`;

export const Title = styled.View`
    flex-direction: column;
    margin-right:20px;
`;

export const Hello = styled.Text`
    color: #FFF;
    font-size: 10px;
`;

export const Usern = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight:bold;
`;

export const Description = styled.Text`
    margin-top:10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const Back = styled.View`
    flex-direction:row;
    margin-right:20px;
    position:absolute;
    top:0;
    left:10px;
`