import React, {useState, useEffect} from "react";
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from "react-native";

const Form = (props) => {
    const {isloading, setIsloadind} = useState(false);
    const {input, setInput} = useState('')
    const fetchUserDats = async () => {
      setIsloadind(true);
      try{
        const userResponse = await  fetch ('https://api.githup.com/users/' + input);
        const user = await userResponse.json();
        const reposResponse = await fetch ('https://api.githup.com/users/' + input + '/repos/');
        const repos = await reposResponse.json();
        props.setRepos(repos)
        props.setUser(user);
        setIsloadind(false);

      } catch(err){
          console.log('err', err);

      }

    }


    useEffect(() => {
      console.log("mounting");
      return() => {
        console.log("unmounting");
      };
    }, []);

    useEffect(() => {
      console.log("updating");
    }, [isloading]);



    return (

      <View>
        <TextInput
          style={Styles.input}
          value={input}
          placeholder="Enter your username"
          onChangeText={(val) => {
            setInput(val);
          }}
        />
        <View style={Styles.button}>
        <Button
          title="Done" 
          onPress={() => {
            if (input) {
              fetchUserData();
            }
      
          }}
        />
        </View>
        {isloading ? <ActivityIndicator /> : null}
      </View>
        );


};

const Styles = StyleSheet.create({
  input: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  button: {
    margin: 10
  }

});

export default Form;
