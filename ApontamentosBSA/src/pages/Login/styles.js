import styled from 'styled-components/native';
//import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  background: #00a436;
`;

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20, justifyContent: 'center', alignItems: 'center' , paddingTop: '10%'},
})`
    flex: 1;
    
`

export const Logo = styled.Image`
  margin: 30px 0;
`

export const Input = styled.TextInput`
  width: 90%;
  padding:10px 10px;
  border-radius:3px;
  background-color:#009330;
  margin: 2px 0;
  font-size:16px;
`


export const SelectLista = styled.Picker`
  width: 90%;
  color:#fff;
  background-color:#009330;
`

export const EnvolvePicker = styled.View`
  width: 90%;
  border-radius:3px;
  padding:2px 2px;
  background-color:#009330;
  margin: 2px 0;
  flex-direction:row;
  align-items:center;
`
export const Title = styled.Text`
  font-size:20px;
  color:#fff;
  font-weight:bold;
  margin-bottom:15px;
`

export const Lbutton = styled.TouchableOpacity`
  margin:10px 0;
  width:90%;
  padding:14px 10px;
  background-color:#007b27;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border-radius:3px;
`
export const Tbutton = styled.Text`
  font-size:16px;
  color:#fff;
  font-weight:bold;
  text-align:center;
`
