import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated} from 'react-native';

const img = 'https://lh3.googleusercontent.com/proxy/qAiT-zUDfXhf0REC0neyxAzEL4cdXwDXtVPaAt5xWHvkV1jh49efcQOeu6jwmZ9VOeOOXr0prm9TuoV6B4ATfTh-n9jhDrkN3UL0ntPYi5_1SwjxGVlowzPaxxc_1vKvReedM8NCW5GxFoMpXA'
export default class LoadingScreen extends React.Component {
    render(){
      return (
        // <ImageBackground style={{flex:1, justifyContent: "center", alignItems:'flex-end'}} source={require("../assets/loading.gif")}>            
        // </ImageBackground>
        <View style={styles.container}>
          <ImageLoader
          style={styles.image}
          source={{uri: img}}
          />
        </View>
      )
    }
}

class ImageLoader extends React.Component {
  state = {
    opacity: new Animated.Value(0.01),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (      
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008B8B'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});


