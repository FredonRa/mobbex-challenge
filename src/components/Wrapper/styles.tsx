import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#fff"
    },
    header: {
        position: "relative",
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        paddingVertical: 20,
    },
    back: {
        position: "absolute", 
        top: 10,
        left: 10, 
        zIndex: 1000, 
        width: 50, 
        height: 50, 
        alignItems: "center", 
        justifyContent: "center",
    }
})