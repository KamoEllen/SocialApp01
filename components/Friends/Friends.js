import React from 'react'
import { View, Text, Image, TouchableOpacity, Button, Pressable } from 'react-native'
import { USERS } from '../../Data/Users'

const FRIENDS = [
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/243403850_3035534363371815_7205757866599024076_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGbOEiKk-rOYI-UeXDlu0AtVA7opS4z_CJUDuilLjP8IpbVfev_s6a13MIOV-Rd4OXipOR4sIOdbDoN_BaSi-2o&_nc_ohc=Jq5mLyjvKk8AX_l4bI8&_nc_ht=scontent.fdac99-1.fna&oh=c9ef8b5f83af3add3467c4645bf39968&oe=61AF23E8",
        username:"Faysal Ahmed",
        time:"1year ago"
    },
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/245822590_392138282404783_2981428033947817653_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEeLca61taTUgMuT-BCtCCMZtgr78SWqW1m2CvvxJapbRVZr5b2VJo9KlNoobURgL72efir0e2cEuKhegwJw0-C&_nc_ohc=li-mYEICaWAAX_pYWOp&_nc_ht=scontent.fdac99-1.fna&oh=392f554254dc30655e2a2b78b7d49f1d&oe=61AE1348",
        username:"Hasib Rahman",
        time:"1week ago"
    },
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/102558349_279690263412071_5384766928753588932_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEvZTqtd90UUOnEgo7s37XQ6uCNJtmIIG_q4I0m2Yggb-_RxYHmDBT4-k89-3a5f6svfOff-7aa1U4aB8hDXC1b&_nc_ohc=GB7knabHHRAAX9vPd6u&_nc_ht=scontent.fdac99-1.fna&oh=c466857e3160c38a1aee2b61c32d56d5&oe=61D09847",
        username:"Ayondrila Maria",
        time:"1day ago"
    },
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/241515153_395316378870047_3595172867108220092_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeELkHg666F-cYKP06HDKpPBLq4lO9oXSpguriU72hdKmErK85sRmMVK2brnaHxdEp6n3X_cRFyPUzPhsuZyaBUw&_nc_ohc=QcOT5TeFkDcAX-TQwaa&_nc_ht=scontent.fdac99-1.fna&oh=14e47977af332d454ff0ef2c29b3c513&oe=61AF5C7A",
        username:"Fatima Hussain",
        time:"1year ago"
    },
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/175644309_123836896469159_355894588096474757_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGNFVGKUHZ75hlxMXE87ojfIl9EBGvME3YiX0QEa8wTds6aSnuA5iMzNBWKosNOGT7P9PrBbt2lCXki0pwrOr7p&_nc_ohc=ThAKMr_3qWwAX_Rof_E&tn=BRkT4253YD7ex5s1&_nc_ht=scontent.fdac99-1.fna&oh=ee79154fabc6fbf7a45f5208e97b9ef9&oe=61CED8AC",
        username:"Tanmi Akand",
        time:"2hr ago"
    },
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/245822590_392138282404783_2981428033947817653_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEeLca61taTUgMuT-BCtCCMZtgr78SWqW1m2CvvxJapbRVZr5b2VJo9KlNoobURgL72efir0e2cEuKhegwJw0-C&_nc_ohc=li-mYEICaWAAX_pYWOp&_nc_ht=scontent.fdac99-1.fna&oh=392f554254dc30655e2a2b78b7d49f1d&oe=61AE1348",
        username:"Hasib Rahman",
        time:"1week ago"
    },
    {
        profile_img:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/243403850_3035534363371815_7205757866599024076_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGbOEiKk-rOYI-UeXDlu0AtVA7opS4z_CJUDuilLjP8IpbVfev_s6a13MIOV-Rd4OXipOR4sIOdbDoN_BaSi-2o&_nc_ohc=Jq5mLyjvKk8AX_l4bI8&_nc_ht=scontent.fdac99-1.fna&oh=c9ef8b5f83af3add3467c4645bf39968&oe=61AF23E8",
        username:"Faysal Ahmed",
        time:"1year ago"
    },
]


const Friends = () => {
    return (
        <View>
            <View style={{
                justifyContent:"space-between",
                flexDirection:"row",
                paddingRight:20,
                paddingTop:5
            }}>
            <Text style={{
                paddingLeft:20,
                fontSize:20,
                fontWeight:"900"
            }}>Friends</Text>
            <TouchableOpacity>
            <Text style={{
                color:"blue"
            }}>
                See All
            </Text>
            </TouchableOpacity>
            </View>
            {FRIENDS.map((friend,index) =>(
                  <View style={{
                      flexDirection:"row",
                      alignItems:"center",
                  }}>
                     {/* Left */}
                     <View style={{
                         paddingVertical:5,
                         paddingLeft:10
                     }}>
                         <Image source={{uri: friend.profile_img}} 
                         style={{
                             width:90,
                             height:90,
                             borderRadius:50
                         }}
                         />
                     </View>
                     {/* Right */}
                     <View style={{
                         flexDirection:"column",
                         flex:1
                     }}>
                         <View style={{
                             flexDirection:"row",
                             justifyContent:"space-between",
                             alignItems:"center",
                             flex:1,
                             paddingHorizontal:10
                         }}>
                             <View>
                                 <Text>{friend.username}</Text>
                                </View>
                                <View>
                                <Text>{friend.time}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{
                                    flexDirection:"row",
                                    paddingLeft:10
                                }}>
                                    <View>
                               <Pressable titleSize={15}>
                                   <Text style={{
                                       backgroundColor:"#1A6ED8",
                                       paddingHorizontal:20,
                                       paddingVertical:8,
                                       color:"#fff",
                                       borderRadius:8,
                                       fontSize:15
                                   }}>Confirm</Text>
                               </Pressable>
                                </View>
                                <View style={{marginLeft:20}}>
                                <Pressable titleSize={15}>
                                   <Text style={{
                                       backgroundColor:"#D8DADF",
                                       paddingHorizontal:20,
                                       paddingVertical:8,
                                       color:"#000",
                                       borderRadius:8,
                                       fontSize:15
                                   }}>Delete</Text>
                               </Pressable>
                                </View>
                                </View>
                             </View>
                         </View>
                    </View>
            ))}
        </View>
    )
}

export default Friends
