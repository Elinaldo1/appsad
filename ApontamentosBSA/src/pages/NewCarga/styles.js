import styled from 'styled-components/native';
//import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';


export const Container = styled.View`
  flex: 1;
  background: #00a436;
`;

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20, justifyContent: 'center', alignItems: 'center' , paddingTop: '5%'},
})`
    flex: 1;
    
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

export const EnvolvePickerMini = styled.View`
  min-width: 55px;
  width: 15%;
  border-radius:3px;
  background-color:#009330;
  margin: 2px 5px;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

export const EnvolvePickerMed = styled.View`
  width: 55%;
  min-width:180px;
  border-radius:3px;
  margin: 2px 5px;
  background-color:#009330;
  margin: 2px 0;
  flex-direction:row;
  align-items:center;
  
  justify-content:center;
`
export const EnvolvePickerMax = styled.View`
  width: 74%;
  min-width:220px;
  border-radius:3px;
  margin: 2px 5px;
  background-color:#009330;
  margin: 2px 0;
  flex-direction:row;
  align-items:center;
  
  justify-content:center;
`


export const EnvolveRow = styled.View`
  flex-direction:row;
  align-content: center;
  justify-content: center;
`

export const MainTitle = styled.Text`
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

export const Lvbutton = styled.View`
  margin:10px 0;
  width:22%;
  padding:14px 10px;
  background-color:#007b27;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  border-radius:3px;
`

export const Lobutton = styled.View`
  margin:10px 0px;
  margin-left:5px;
  width:66%;
  padding:14px 10px;
  background-color:#007b27;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  border-radius:3px;
`

export const Tbutton = styled.Text`
  font-size:16px;
  color:#fff;
  font-weight:bold;
  text-align:center;
`

export const CircleBig = styled.View`
  background-color:#007b27;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:60px;
  height:60px;
  border-radius:30px;
  margin-top:24px;
`
export const HeaderC = styled.View`
  flex:1;
  flex-direction:row;
`

export const Top = styled.View`
    padding-top:30px;
    flex:1;
    flex-direction: row;
    align-content:center;
    align-items:center;
    padding-left:5%;
    justify-content: center;
`

export const SubItemF = styled.View`
    flex-direction: row;
    width:23%;
    min-width:85px;
    margin-left:15px;
    padding-right:12%;
`

export const SubItem = styled.View`
    flex-direction: row;
    width:18%;
    min-width:60px;
`

export const Logo = styled.Image`
    width:30px;
    height:30px;
`

export const Title = styled.View`
    flex-direction: column;
    margin-right:2%;
`

export const Hello = styled.Text`
    color: #FFF;
    font-size: 10px;
`

export const Usern = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight:bold;
`
export const Description = styled.Text`
    margin-top:10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const Lista = styled.FlatList.attrs({
  contentContainerStyle: { justifyContent: 'center', alignItems: 'center' }
})`
    flex:1;
    width:100%;
`
export const HeaderList = styled.View`
    flex:1;
    width:100%;
    align-items:center;
    flex-direction:row;
    padding:5px 0;
    margin-top:10px;
    background-color: rgba(0,0,0,0.1);
    border-radius:3px;
    align-items:center;
`
export const ItemList = styled.View`
    flex-direction:row;
    padding:5px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #fff;
    align-items:center;
`

export const PX = styled.Text`
  color: #FFF;
  margin:5px;
  width:15%;
  border-right-width: ${StyleSheet.hairlineWidth}px;
  border-right-color: #fff;
`
export const OP = styled.Text`
  color: #FFF;
  margin:5px;
  width:35%;
  border-right-width: ${StyleSheet.hairlineWidth}px;
  border-right-color: #fff;
`
export const COL = styled.Text`
  color: #FFF;
  margin:5px;
  width:15%;
  border-right-width: ${StyleSheet.hairlineWidth}px;
  border-right-color: #fff;
`
export const CX = styled.Text`
  color: #FFF;
  margin:5px;
  width:7%;
  border-right-width: ${StyleSheet.hairlineWidth}px;
  border-right-color: #fff;
`

export const ACTIONS = styled.TouchableOpacity`
  margin:5px;
  width:10%;
  text-align:center;
  justify-content:center;
  align-items:center;
`

export const ACTIONST = styled.Text`
  color: #FFF;
  text-align:center;
`