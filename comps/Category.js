import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, Button, Card} from 'react-native';
import Flag from 'react-native-flags';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';


export default function Category(props, {navigation}) {                    
        if(props.loc) {
            return (
            <View style={styles.container}>            
                <View style={{flexDirection:'row', margin: 0, alignItems:'center', backgroundColor:'#008B8B'}}>
                    <Flag code= {props.code} size={32} style={{margin:10}}/>
                    <Text style={{flex:1, padding: 5, color:'white'}}>{props.name}</Text>                                  
                    <MaterialIcons name={'navigate-next'} size={32} color={'white'} alignSelf='flex-end' onPress={props.action}/>
                </View>              
            </View>            
            )    
        }
        else {
            return(
            <View style={styles.container}>            
                <View style={{flexDirection:'row', margin: 10, alignItems:'center'}}>
                    <Flag code= {props.code} size={32}/>
                    <Text style={{flex:1, padding: 5, color:'white'}}>{props.name}</Text>                                                      
                </View>              
            </View>                        
        )
    }        
}

const styles = StyleSheet.create({
    container: {    
        justifyContent: 'center',
        backgroundColor: '#008B8B',
        width: '100%',
        height: 50,
        shadowColor: 'grey',
        shadowOffset: {        
        }
    }
})