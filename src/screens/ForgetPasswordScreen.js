import { View, Text, useWindowDimensions, TouchableOpacity, Image ,TextInput} from 'react-native'
import React from 'react'
import { BLACK, GRAY, PRIMARY, WHITE } from '../common/Colors'
import { useNavigation } from '@react-navigation/native'

const ForgetPasswordScreen = () => {
    const {height,width} = useWindowDimensions()
    
    const navigatin = useNavigation()
  return (
    <View style={{flex:1}}>
    <View style={{
        height:height
        
    }}>
    <TouchableOpacity style={{
        position:'absolute',
        top:54,
        flexDirection:'row'
    }} onPress={()=>{
        navigatin.goBack()
    }}>
    <Image source={require('../images/arrow-left.png')} style={{
        width:width/14,
        height:width/14,
        position:'absolute',
        left:16,
        resizeMode:'contain',
        
    }}/>
    <Text style={{
        position:'absolute',
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
    }}>Forgot Password</Text>

    <View style={{
        position:'absolute',
        top:154
    }}>
    <Text style={{
       
        left:16,
        color:BLACK,
        fontSize:16,
        fontWeight:"400"
    }}>Provide us the email id/ mobile of your account</Text>


    <Text style={{
       
        left:16,
        color:BLACK,
        fontSize:16,
        fontWeight:"400",
      
    }}>and we will send you an email/otp with</Text>

    

    <Text style={{
        left:16,
        color:BLACK,
        fontSize:16,
        fontWeight:"400",
       
    }}>instructions to reset your password.</Text>

    </View>




    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:265,
        left:16
    }}>Mobile Number / Email ID</Text>

    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:288,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='Mobile Number / Email ID' placeholderTextColor={GRAY}/>




    <TouchableOpacity style={{
        width:width/1.1,
        height:width/7,
        backgroundColor:PRIMARY,
        borderRadius:44,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:380,
        alignSelf:'center'
    }} onPress={()=>{
        navigatin.navigate('ResetPasswordScreen')
    }} >
    <Text style={{
        color:WHITE,
        fontSize:16,
        fontWeight:'600',
    }}> Send Instructions</Text>
    </TouchableOpacity>





    </View>
     
    </View>
  )
}

export default ForgetPasswordScreen