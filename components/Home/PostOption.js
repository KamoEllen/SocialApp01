import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const PostOption = () => {
    return (
        <View 
        style={{
            paddingHorizontal:10
        }}
        >

            <View
            style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-around"
            }}
            >
                <View>
                    <TouchableOpacity>
                    <Image source={{ uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/c0.0.40.40a/p40x40/261146077_422992066116659_6682694448204413388_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeH-9Ntkhzj_3MC3euuSCzBTH2s9G3JX8pgfaz0bclfymLGAAiMZDlmfevB3vX0nLkpVWAy6HvOnw9h6Ef0iLZNT&_nc_ohc=DJUyvMXHyuEAX8OfGU5&_nc_ht=scontent.fdac99-1.fna&oh=a56947e3333cb5d0fd1575f10b595ab6&oe=61AC71BA"}} 
                    style={{
                        width:40,
                        height:40,
                        borderRadius:50,
                    }}
                     />
                   </TouchableOpacity>
                </View>
                  <View style={{
                      justifyContent:"flex-start"
                }}>
                      <TouchableOpacity>
                      <Image source={require("../../assets/placeholder.jpg")}
                       style={{
                           width:300,
                           height:50,
                           resizeMode:"contain"
                       }}
                      />
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity>
                      <Image source={require("../../assets/photo.jpg")} 
                      style={{
                          height:50,
                          width:50,
                          resizeMode:"contain"
                      }}
                      />
                      </TouchableOpacity>
                  </View>
            </View>

            <View style={{
                marginTop: -20
            }}>
                <TouchableOpacity>
                <Image source={require("../../assets/activity.jpg")} 
                 style={{
                     width:"100%",
                     resizeMode:"contain"
                 }}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostOption;

