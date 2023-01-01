import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Repo = (props) => {
    const navigate = useNavigation();
    const {item} = repos;
    return (
        <TouchableOpacity style={styles.warpper} onPress={() => {
            navigation.navigate('Repo', { repo: item });

        }}>
            <Text style={styles.repoNameText}>{item.name}</Text>
            <Text style={styles.languageText}>{item.language || "No language"}</Text>
            <Text>Forks: {item.forks_count}</Text>
            <Text>Open Issues: {item.open_issues_count}</Text>
            <View style={styles.horizontalLine}/>
        </TouchableOpacity>
        )
};

const styles = StyleSheet.create({
    warpper: {
        marginVertical: 10,
    },

    repoNameText: {
        fontWeight: 'bold',
    },
    languageText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    horizontalLine: {
        height: 1,
    }
});

export default Repo;
