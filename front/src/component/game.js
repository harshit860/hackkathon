import React from 'react'
import Axios from 'axios'

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        Axios({
            method:"get",
            url:"http://127.0.0.1:5000/gamelist",

        })
        .then(resp =>console.log(resp))
        .catch(err => console.log(err))
    }
    render(){
        return (
            <div>in game</div>
        )
    }
}
export default Game