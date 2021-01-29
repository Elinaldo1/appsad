import styled from 'styled-components/native';
//import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  background: #00a436;
`;


export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: '5%' },
})`
    flex: 1;
    
`
export const Tabs = styled.View`
  flex:1;
  align-content: center;
`;

export const TabsContainer = styled.View`
  flex-wrap: wrap;
  align-items: center;
  flex:1;
  flex-direction: row;
  justify-content: center;
`;

export const Description = styled.Text`
    margin-top:10px;
    margin-bottom:10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-align:center;
`;

export const TabItem = styled.TouchableOpacity`
  width: 45%;
  height: 80px;
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
  margin-left: 6px;
  margin-bottom: 6px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;