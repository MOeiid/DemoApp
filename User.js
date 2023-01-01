import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Image, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native";

const User = (props) => {
    const {user} = {props};
    const navigate = useNavigation();
    return (
    <TouchableOpacity style={styles.wrapper} onPress={() =>{
        navigation.navigate('User', {user});

    }}>
        <Image source={{ uri: user.avatar_url }} style={styles.image}/>
        <View>
        <Text style={styles.userNameText}>{user.usernsme}</Text>
        <Text>{user.bio}</Text>
        <Text>Following: {user.following}</Text>
        <Text>Followers: {user.followers}</Text>
        </View>
    </TouchableOpacity>
    );
};

const style=StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderColor: '#bbb',
        borderEndWidth: 1,
        borderRadius: 20,
        padding: 10
    },
    userNameText: {
        fontWeight: 'bold'
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'whitr',
        borderRadius: 50,
        marginEnd: 10

    }
})

export default User;