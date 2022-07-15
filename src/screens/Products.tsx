import * as React from 'react';
import Wrapper from '../components/Wrapper';
import { Text } from 'react-native'

interface ProductsProps {
    
}
 
const Products: React.FC<ProductsProps> = () => {
    return (  
        <Wrapper title={"Productos"}></Wrapper>
    );
}
 
export default Products;