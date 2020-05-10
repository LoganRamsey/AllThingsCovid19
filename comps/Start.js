import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, Button, StatusBar} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { LinearGradient } from 'expo-linear-gradient';


export default function Start({navigation}) {           
    return (
      <LinearGradient
        colors={['#00FFFF', '#008B8B']}
        start ={[.9, 1.25]}
        end = {[.9, .9]}
        style={{
          flex: 1, 
          flexDirection: 'column',
           width: "100%",
          justifyContent: 'center', 
          marginTop: StatusBar.currentHeight          
        }}>        
              <Text style={{justifyContent:'center', alignSelf:'center', fontSize: 30, padding: 50, color: 'white'}}>All Things COVID-19</Text>                                    
              <View style={{width: 200, justifyContent:'center', alignSelf:'center', padding: 10}}>              
                <Button title={'learn more'} color={'#008B8B'} onPress={()=>WebBrowser.openBrowserAsync('https://www.cdc.gov/coronavirus/2019-ncov/index.html')}/>                                                
              </View>                      
        </LinearGradient>
    )  
}

