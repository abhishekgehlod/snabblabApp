import { View, Text, useWindowDimensions,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import { BLACK, GRAY, PRIMARY, WHITE, text } from '../common/Colors'
import { useNavigation } from '@react-navigation/native'

const ResetPasswordScreen = () => {
    const navigation = useNavigation()

    const {height,width} = useWindowDimensions()
  return (
    <View style={{
        flex:1
    }}>
    <View style={{height:height}}>
    <TouchableOpacity style={{
        position:'absolute',
        top:54,
        flexDirection:'row'
    }} onPress={()=>{
        navigation.goBack()
    }}>
    <Image source={require('../images/arrow-left.png')} style={{
        width:width/14,
        height:width/14,
        position:'absolute',
      
        left:16,
        resizeMode:'contain',
        
    }}/>
    <Text style={{
      
        left:46,
        fontSize:16,
        fontWeight:'400',
        color:BLACK
    }}>Back</Text>

    </TouchableOpacity>



    
    <Text style={{
        position:'absolute',
        top:98,
        left:16,
        fontSize:32,
        fontWeight:'800',
        color:PRIMARY
    }}>Reset Password</Text>

    <Text style={{
        position:'absolute',
        top:154,
        left:16,
        fontSize:16,
        fontWeight:'400',
        color:text
    }}>Enter OTP and change password</Text>




    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:217,
        left:16
    }}>OTP</Text>

    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:240,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='OTP' placeholderTextColor={GRAY}/>



    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:306,
        left:16
    }}>New Password</Text>

    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:329,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='New Password' placeholderTextColor={GRAY}/>



    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:395,
        left:16
    }}>Confirm Password</Text>

    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:418,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='Confirm Password' placeholderTextColor={GRAY}/>




    <TouchableOpacity style={{
        width:width/1.1,
        height:width/7,
        backgroundColor:PRIMARY,
        borderRadius:44,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:510,
        alignSelf:'center'
    }} >
    <Text style={{
        color:WHITE,
        fontSize:16,
        fontWeight:'600',
    }}> Reset Password</Text>
    </TouchableOpacity>

    <Text style={{
        position:'absolute',
        top:600,
        color:PRIMARY,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'700'
    }}>Resend OTP</Text>
    </View>
    
    </View>
  )
}

export default ResetPasswordScreen