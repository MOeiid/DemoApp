import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import User from "../components/User";

const Home = (props) => {
    const { user } =  props.route.params;
    return <SafeAreaView style={styles.wrapper}>


        <View style={styles.innerwrapper}>
            {user ? <User user ={user} /> : null}
            <Text>other Stuff</Text>
        </View>
        

    </SafeAreaView>
}


const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,

    },
    innerwrapper: {
        padding: 20,
    },
})

export default Home;