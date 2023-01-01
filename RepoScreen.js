import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Repo from '../components/Repo';

const RepoScreen = (props) => {
    const { repo } =  props.route.params;
    return <View>
        <Repo item={repo} />
        <Text>other Stuff</Text>
    </View>;
};

export default RepoScreen;