import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SigIn from  '../pages/SignIn/SignIn';
import SigUp from  '../pages/SignUp/SignUp';

const Auth = createStackNavigator();

const AuthRoute: React.FC= ()=> (
  <Auth.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{backgroundColor:'#312e38'}
    }}
  >
    <Auth.Screen name="SigIn" component={SigIn}/>
    <Auth.Screen name="SigUp" component={SigUp}/>
  </Auth.Navigator>
)

export default AuthRoute;