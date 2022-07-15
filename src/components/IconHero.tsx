import * as React from 'react';
import { Image } from 'react-native';
import { ImageSourcePropType } from 'react-native';

interface IconHeroProps {
    size: number,
    source: ImageSourcePropType,
}
 
const IconHero: React.FC<IconHeroProps> = (props) => {
    return (  
        <Image style={{width: props.size, height: props.size,}} source={props.source} resizeMode="contain" />
    );
}
 
export default IconHero;