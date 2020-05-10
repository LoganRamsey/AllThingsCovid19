import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet, Button, Dimensions} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Category from './Category'



export default function Home({navigation}) {            
    const [info, setInfo] = useState({})    
        
      useEffect(() => {
        let getData = async() => {
          let response = await fetch("https://api.covid19api.com/summary")
          let obj = await response.json()        
          setInfo(obj)
        }
        getData()
      }, [])    
           
    const country = info.Global
    const viewGlobalData = () => {
      navigation.navigate('Data', {country})
    }

    const viewCountryData = (country) => {
      navigation.navigate('Data', {country})
    }
        
    return (
      <View style={styles.container}>   
          <Text style={{color:'white', marginTop: 10, marginLeft: 10}}>International cases</Text>                   
          <Category name='Global' action={viewGlobalData} loc={true}/>          
          <Text style={{color:'white', marginLeft: 10}}>Cases by country</Text>         
          <FlatList             
            data = {info.Countries}
            renderItem = {({item}) => (              
                <Category name={item.Country} code={item.CountryCode} action={() => viewCountryData(item)} loc={true}/>                            
            )}
            keyExtractor = {item => item.CountryCode}              
            removeClippedSubviews = {true}
            initialNumToRender = {12}
            maxToRenderPerBatch = {11}
            updateCellsBatchingPeriod = {50}
          />
      </View>           
          
    )
    
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexGrow:1,
      justifyContent: 'center',
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      paddingBottom: 10,
      backgroundColor: '#008B8B',
  },    
})
