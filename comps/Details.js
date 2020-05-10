import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import moment from 'moment'
import Category from './Category'


export default function Details({ route, navigation }) {  
      return (             
        <View style={styles.container}>                        
            <Category name={route.params.country.Country || 'Global'} code={route.params.country.CountryCode} loc={false}/> 
            <View style={{backgroundColor:'#008B8B', height:Dimensions.get('screen').height-200, width: Dimensions.get('screen').width, justifyContent:'space-between', padding: 10}}>
                <Text style={{color:'white'}}>As of {moment(route.params.country.Date).format("LL")}</Text>
                <Text style={{color:'white'}}>New Confirmed cases: {route.params.country.NewConfirmed}</Text>
                <Text style={{color:'white'}}>Total Confirmed cases: {route.params.country.TotalConfirmed}</Text>
                <Text style={{color:'white'}}>New Deaths: {route.params.country.NewDeaths}</Text>
                <Text style={{color:'white'}}>Total Deaths: {route.params.country.TotalDeaths}</Text>
                <Text style={{color:'white'}}>New Recovered: {route.params.country.NewRecovered}</Text>
                <Text style={{color:'white'}}>Total Recovered: {route.params.country.TotalRecovered}</Text>                            
            </View>
        </View>            
      )        
}

const styles = StyleSheet.create({    
    container: {
        flex:1,    
        backgroundColor: '#008B8B',
        alignItems: 'flex-start',        
        justifyContent:'flex-start'
    }
})



