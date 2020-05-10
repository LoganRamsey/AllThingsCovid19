import React from 'react';
import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native'

export default function Header({navigation}) {
    const openMenu = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return (    
        <View style={styles.header}>                 
            <View style= {styles.menu}>
                <Ionicons name="ios-menu" size= {25} color={"#0F8CFF"}  onPress={openMenu}/>                        
            </View>
            <View style={styles.title}>
                <Text>All Things COVID-19</Text>
            </View>                        
        </View>        
    );
}

const styles = StyleSheet.create({
    header: {        
        width: Dimensions.get("screen").width-50,
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: StatusBar.currentHeight                       
    },    
})