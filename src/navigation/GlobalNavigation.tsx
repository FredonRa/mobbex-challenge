import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import { HOME_PRODUCTS, HOME_PRODUCT_DETAIL } from '../constants/routes';

const Stack = createStackNavigator();

const GlobalNavigation: React.FC = () => {
    return (  
        <Stack.Navigator screenOptions={{ header: () => null}}>
            <Stack.Screen name={HOME_PRODUCTS} component={Products} />  
            <Stack.Screen name={HOME_PRODUCT_DETAIL} component={ProductDetail} />
        </Stack.Navigator>
    );
}
 
export default GlobalNavigation;