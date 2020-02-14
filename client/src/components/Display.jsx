import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import Card from './Card';

export default class Display extends Component{
    constructor(props){
        super(props);
        this.state={
            players:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(response =>{
            // console.log(response.data);
            this.setState({
                players: response.data
            });
        })
        .catch(error =>{
            console.log(error);
        });
    }
    render(){
        return this.state.players.map(player =>{
            return <Card player={player} key={player.id}/>;
        });
    }
}