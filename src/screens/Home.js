import { View, Text, TextInput, useWindowDimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { BLACK, text } from '../common/Colors'

const Home = () => {
    const { height, width } = useWindowDimensions()
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height }}>
                <Text style={{
                    position: 'absolute',
                    top: 65,
                    left: 16,
                    color: BLACK,
                    fontSize: 24,
                    fontWeight: '700'
                }}>Setup Location</Text>

                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 111,
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderColor: text,
                    width: width / 1.1,
                    height: width / 7,
                    borderRadius: 4,



                }}>
                    <Image source={require("../images/search-normal.png")} style={{
                        width: width / 13,
                        height: width / 13,
                        top: 10,
                        left: 10,
                        resizeMode: 'contain'


                    }} />
                    <TextInput placeholder='Search for your city' placeholderTextColor={text} style={{

                        fontSize: 16,
                        fontWeight: '400',
                        paddingHorizontal: 20


                    }}>

                    </TextInput>

                </View>

                <Text style={{
                    position: 'absolute',
                    top: 192,
                    left: 16,
                    fontSize: 18,
                    fontWeight: '700',
                    color: BLACK
                }}>Top Cities</Text>



                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 240,

                }}>
                    <View>
                        <Image source={require('../images/delhi.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 18
                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 25
                        }}>Delhi</Text>
                    </View>
                    <View>
                        <Image source={require('../images/mumbai.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 50

                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 50
                        }}>Mumbai</Text>
                    </View>

                    <View>
                        <Image source={require('../images/bang.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 90

                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 90
                        }}>Bengaluru</Text>
                    </View>




                    <View>
                        <Image source={require('../images/chennai.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 120

                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 120
                        }}>Chennai</Text>
                    </View>

                </View>

                <View style={{
                    position: 'absolute',
                    top: 331,
                    flexDirection: 'row'
                }}>

                    <View>
                        <Image source={require('../images/hydrabad.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 18

                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 18
                        }}>Hydrabad</Text>

                    </View>

                    <View>
                        <Image source={require('../images/ahedabad.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 50

                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 35
                        }}>Ahmedabad</Text>

                    </View>


                    <View>
                        <Image source={require('../images/jaipur.png')} style={{
                            width: width / 7,
                            height: width / 7,
                            resizeMode: 'contain',
                            left: 75

                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: BLACK,
                            left: 80
                        }}>Jaipur</Text>

                    </View>
                </View>

                <Text style={{
                    position: 'absolute',
                    top: 455,
                    left: 16,
                    fontSize: 18,
                    fontWeight: '700',
                    color: BLACK
                }}>Other Cities</Text>
                <View style={{
                   
                }}>
                    
                        <Text style={{
                            position: "absolute",
                            top: 503,
                            left: 18,
                            fontSize: 16,
                            fontWeight: "400",
                            color: BLACK
                        }}>
                            Shimla
                        </Text>


                        <Text style={{
                            position: "absolute",
                            top: 550,
                            left: 18,
                            fontSize: 16,
                            fontWeight: "400",
                            color: BLACK
                        }}>
                            Patna
                        </Text>


                        <Text style={{
                            position: "absolute",
                            top: 597,
                            left: 18,
                            fontSize: 16,
                            fontWeight: "400",
                            color: BLACK
                        }}>
                            Delhi
                        </Text>




                        <Text style={{
                            position: "absolute",
                            top: 644,
                            left: 18,
                            fontSize: 16,
                            fontWeight: "400",
                            color: BLACK
                        }}>
                            Mumbai
                        </Text>



                        <Text style={{
                            position: "absolute",
                            top: 691,
                            left: 18,
                            fontSize: 16,
                            fontWeight: "400",
                            color: BLACK
                        }}>
                            jaipur
                        </Text>




                        <Text style={{
                            position: "absolute",
                            top: 738,
                            left: 18,
                            fontSize: 16,
                            fontWeight: "400",
                            color: BLACK
                        }}>
                            Ahmedabad
                        </Text>
                    
                </View>

            </View>

        </View>
    )
}

export default Home