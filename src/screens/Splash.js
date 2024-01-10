import { View, Text ,useWindowDimensions,ImageBackground, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    //import navigatin
    const navigation = useNavigation()



    const {height,width} = useWindowDimensions()

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Login1')
            
        }, 3000);

    },[])
  return (
    <View style={{
        flex:1
    }}>

    <View style={{
        justifyContent:'center',
        alignItems:'center',
        height:height,
        width:width
    }}>
    <ImageBackground source={require('../images/Splash.png')} style={{
        height:height,
        width:width,
        
    }}resizeMode='cover'>
    <ImageBackground source={require('../images/splash2.png')} style={{
        height:height,
        width:width,
        justifyContent:'center',
        alignItems:'center'
    }}>
    <Image source={require('../images/splash3.png')} style={{
        height:width/5,
        width:width/1.5,
        resizeMode:'contain'
    }}/>
    </ImageBackground>
    </ImageBackground>
    
    </View>
    
    </View>
  )
}

export default Splash