import React, { Component } from 'react';
import { StyleSheet,Dimensions, Image,Text, View, TextInput, Button, Switch, TouchableOpacity, FlatList  } from 'react-native';
import MapView from 'react-native-maps'





export default class MyListView extends React.Component{

    state = {data:[]}


    componentDidMount(){
      this.fetchData();
    }

    fetchData = async ()=>{
        fetch("https://randomuser.me/api?results=100")
        .then((response) => response.json())
        .then((jsonResponse)=>{
            console.log(jsonResponse.results[0].name);
            this.setState({data:jsonResponse.results})
        }).catch((error) => console.log(error));
    }

    render(){
        return (
        <View style={styles.container}>
            <FlatList data={this.state.data} 
            ItemSeparatorComponent={FlatList.ItemSeparatorComponent}
            keyExtractor ={(item)=>item.email+""}
            renderItem={(item) =>
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri:item.item.picture.thumbnail}} style={styles.image}/>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.text}>{item.item.name.first+" "+item.item.name.last}</Text>
                        <Text>{item.item.email}</Text>
                    </TouchableOpacity>
                    <View
                    style={{
                        height:1,
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                    />
                </View>
                }>
            </FlatList>
        </View>)
    }

}
const styles = StyleSheet.create({
    container: {
    height:'100%',
    width:'100%',
    marginTop:10,
      justifyContent:'center',
      alignContent:'center'
    },
    image:{
        marginStart:15,

        height:40,
        width:40,
    },
    text:{
        fontWeight:'700'
    },
    row:{
        height:50,
        marginStart:15,
        marginEnd:20,
        width:"100%",
        justifyContent:'center',
        alignContent:'center'
    }
   
  });