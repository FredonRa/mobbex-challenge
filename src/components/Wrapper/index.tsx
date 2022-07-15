import * as React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../constants/icons';
import IconHero from '../IconHero';
import { styles } from './styles';

interface WrapperProps {
    back?: boolean,
    title?: string
}
 
const Wrapper: React.FC<WrapperProps> = (props) => {
    const navigation = useNavigation();
    
    return (  
        <View>
            <StatusBar />
            <View style={styles.header}>
                <SafeAreaView>
                    {props.back && (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                            <IconHero 
                                size={26}
                                source={Icons.arrowBack}
                            />
                        </TouchableOpacity>
                    )}
                    <Text style={styles.title}>{props.title}</Text>
                </SafeAreaView>
            </View>
            <View style={styles.container}>
                {props.children}
            </View>
        </View>
    );
}
 
export default Wrapper;