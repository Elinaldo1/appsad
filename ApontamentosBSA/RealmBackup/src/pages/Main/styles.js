import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#7159c1', '#9849c1'],
    start: { x: 0, y: 0},
    end: { x:1, y:1 }
})`
    padding-top: ${30 + getStatusBarHeight(true)}px;
    flex:1;
`;

export const Title = styled.Text`
    padding: 0 20px;
    color:#fff;
    font-size:32px;
    font-weight:bold;
`;

export const Form = styled.View`
    flex-direction:row;
    align-items:center;
    margin-top:10px;
    padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex:1;
    border-radius:2.5px;
    color: #333;
    background:#FFF;
    padding:12px 15px;
    border: 2px solid ${props => (props.error ? '#FF7272' : '#FFF')};
`;

export const Submit = styled.TouchableOpacity`
    background: #6bd4c1;
    margin-left: 10px;
    justify-content: center;
    border-radius: 4px;
    padding: 13px 15px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;