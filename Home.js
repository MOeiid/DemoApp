import React, {useState} from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Form from "../components/FormFunctional";
import User from "../components/User";
import ReposList from "../components/ReposList";
// import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState (null);
    const [repos, setRepos] = useState ([]);
    return <SafeAreaView style={styles.wrapper}>


        <View style={styles.innerwrapper}>
        <Form setUser={setUser} setRepos={setRepos}/>
        {user ? ( <User user ={user} />) : null}
        </View>
        
        <ReposList repos={repos}/>

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




