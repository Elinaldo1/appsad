import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import NewCarga from '~/pages/NewCarga';


const Routes = createAppContainer(
    createStackNavigator({
      Login: Login,
      Main: Main,
      NewCarga: NewCarga,
    })
  );

export default Routes;