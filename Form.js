import React from "react";
import { View, TextInput, Button, ActivityIndicator } from "react-native";


class Form extends React.Component {
    state = {isloading: false};

    componentDidMount(){
      console.log("mounting")
    }

    componentDidUpdate() {
      console.log("updating")
    }

    componentWillUnmount() {
      console.log("ummouting");
    }

    render() {
        return
         <View>
            <TextInput placeholder="Enter your username" />
            <Button 
              title="Done" 
              onPress={() => {
                this.setState ({ isloading: true });

                setTimeout( ()=>{
                    this.setState ({ isloading: false });
                }, 3000);

                
              }}
            />
            {this.state.isloading ? <ActivityIndicator /> : null}
         </View>
    }
}
export default Form;