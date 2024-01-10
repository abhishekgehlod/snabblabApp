import { View, Text ,useWindowDimensions, Image, StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { BLACK, PRIMARY, SECONDRY, WHITE } from '../common/Colors'
import { useNavigation } from '@react-navigation/native'

const Login1 = () => {
    const navigation = useNavigation()
    const {height,width}= useWindowDimensions()
  return (
    <View style={{flex:1}}>
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        height:height
        
    }}>
    <Image source={require('../images/snabb.png')} style={{
        height:width/6,
        width:width/1.5,
        resizeMode:'contain'
    }}/>
    <Image source={require('../images/Frame.png')} style={{
        height:width/2,
        width:width/1.5,
        resizeMode:'contain',
        marginTop:20

    }} />

    <Text style={{
        color:BLACK,
        fontSize:20,
        fontWeight:'700'
    }}>Book Tests and find best Labs </Text>
    <Text style={{
        color:BLACK,
        fontSize:20,
        fontWeight:'700',
        

    }}>near you at suitable price</Text>
    <TouchableOpacity style={{
        width:width/1.2,
        height:width/8,
        backgroundColor:PRIMARY,
        borderRadius:44,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }} onPress={()=>{
        navigation.navigate("Login2")
    }}>
    <Text style={{
        color:WHITE,
        fontSize:16,
        fontWeight:'600',
    }}> Login</Text>
    </TouchableOpacity>


    <TouchableOpacity style={{
        width:width/1.2,
        height:width/8,
        backgroundColor:SECONDRY,
        borderRadius:44,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }} onPress={()=>{
        navigation.navigate('SingupScreen')
    }}>
    <Text style={{
        color:WHITE,
        fontSize:16,
        fontWeight:'600',
    }}> Create New Account</Text>
    </TouchableOpacity>
    </View>
     
    </View>
  )
}

export default Login1

// const styles = StyleSheet.create({
//     textStyle :{
//         fontSize:20,
//         fontWeight:700

//     }
// })