import { 
    View, 
    Text,
    useWindowDimensions,
    TextInput,
    Image,
    TouchableOpacity
 } from 'react-native'
import React from 'react'
import { BLACK, GRAY, PRIMARY, WHITE } from '../common/Colors'
import { useNavigation } from '@react-navigation/native'

const Login2 = () => {
    const navigation = useNavigation()
    const {height,width} = useWindowDimensions()
  return (
    <View style={{
        flex:1
    }}>
    <View style={{
        height:height

    }}>
    <Text style={{
        fontSize:32,
        fontWeight:800,
        color:PRIMARY,
        position:'absolute',
        top:88,
        left :16
    }}>Login</Text>



    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:165,
        left:16
    }}>Mobile Number / Email ID</Text>

    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:188,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='Mobile Number / Email ID' placeholderTextColor={GRAY}/>



    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:254,
        left:16
    }}>Password</Text>



    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:277,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='Password' placeholderTextColor={GRAY}/>



    <Text style={{
        position:'absolute',
        top:339,
        left:16,
        color:PRIMARY,
        fontSize:16,
        fontWeight:'400'
    }} onPress={()=>{
        navigation.navigate('ForgetPasswordScreen')
    }}>Forgot Password?</Text>

    <View style={{
        position:'absolute',
        top:394,
        flexDirection:'row'
        
    }}>
    <Image source={require("../images/checkbox.png")} style={{
        width:width/14,
        height:width/14,
        position:'absolute',
        left:16,
        resizeMode:'contain'
    }}/>
    
    <Text style={{
        position:'absolute',
        left:47,
        color:BLACK,
        fontSize:14,
        fontWeight:'400'
    }}>Remember me for 30 days</Text>
    </View>




    <View style={{
        position:'absolute',
        top:435,
        flexDirection:'row'
        
    }}>
    <Image source={require("../images/checkbox1.png")} style={{
        width:width/14,
        height:width/14,
        position:'absolute',
        left:16,
        resizeMode:'contain'
    }}/>
    
    <Text style={{
        position:'absolute',
        left:47,
        color:BLACK,
        fontSize:14,
        fontWeight:'400'
    }}>Login with OTP instead of password</Text>
    </View>




    <TouchableOpacity style={{
        width:width/1.1,
        height:width/7,
        backgroundColor:PRIMARY,
        borderRadius:44,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:503,
        alignSelf:'center'
    }} >
    <Text style={{
        color:WHITE,
        fontSize:16,
        fontWeight:'600',
    }}> Login</Text>
    </TouchableOpacity>


    <Text style={{
        position:'absolute',
        top:592,
        color:BLACK,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'400'
    }}>Don’t have an account? <Text style={{
        color:PRIMARY,
        fontSize:16,
        fontWeight:'400'
    }}> Signup</Text></Text>






    </View>
    
    </View>
  )
}

export default Login2