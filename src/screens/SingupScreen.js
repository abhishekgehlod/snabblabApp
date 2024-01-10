import { View, Text, useWindowDimensions,TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'

import { BLACK, GRAY, PRIMARY,WHITE } from '../common/Colors'
import { useNavigation } from '@react-navigation/native'

const SingupScreen = () => {
    const navigation = useNavigation()
    const {height,width} = useWindowDimensions()
  return (
    <View style={{
        flex:1
    }}>
    <View style={{
        height:height

    }}>
    <Text
    style={{
        position:'absolute',
        top:88,
        left:16,
        color:PRIMARY,
        fontSize:32,
        fontWeight:'800'
    }}
    >Signup</Text>


    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:165,
        left:16
    }}>Full Name</Text>

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
    }} placeholder='Full Name' placeholderTextColor={GRAY}/>


    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:254,
        left:16
    }}>Phone Number</Text>
    

    <View style={{
        flexDirection:'row',
        position:'absolute',
        top:277

    }}>
    <View style={{
        borderWidth:.5,
        width:width/4,
        height:width/8,
        left:16,
        justifyContent:'center',
        flexDirection:'row',
        borderColor:GRAY
    }}>
    <Text style={{
        color:BLACK,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'400',
        left:95

    }}>+91 IND</Text>

    <TextInput style={{
        height:width/8,
        width:width/1.8,
        borderWidth:.5,
        left:115,
        borderColor:GRAY
    }} placeholder='Phone Number' placeholderTextColor={GRAY}/>
    </View>
    </View>



    <Text style={{
        fontSize:14,
        fontWeight:400,
        color:BLACK,
        position:'absolute',
        top:343,
        left:16
    }}>Password</Text>

    <TextInput style={{
        borderWidth:1,
        width:width/1.2,
        height:width/8,
        position:'absolute',
        top:366,
        left:16,
        paddingHorizontal:10,
        borderColor:GRAY,
        fontSize:16,
        fontWeight:'400',
        borderRadius:4
    }} placeholder='Full Name' placeholderTextColor={GRAY}/>



    <Text style={{
        position:'absolute',
        top:450,
        left:16,
        fontSize:14,
        fontWeight:'500',
        color:BLACK
    }}>By signing up, I agree to<Text style={{
        fontSize:14,
        fontWeight:'500',
        color:'#51E3AA'
    }}> terms</Text></Text>


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
    }}  onPress={()=>{
        navigation.navigate("Home")
    }}>
    <Text style={{
        color:WHITE,
        fontSize:16,
        fontWeight:'600',
    }}> Send OTP</Text>
    </TouchableOpacity>


    <Text style={{
        position:'absolute',
        top:592,
       alignSelf:'center',
        fontSize:16,
        fontWeight:'400',
        color:BLACK
    }}>Already have an account? <Text style={{
        fontSize:16,
        fontWeight:'400',
        color:PRIMARY
    }}> Login</Text></Text>


    
    </View>
     
    </View>
  )
}

export default SingupScreen