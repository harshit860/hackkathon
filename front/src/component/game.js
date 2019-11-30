import React from 'react'
import Axios from 'axios'

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
                games1:[]
        }
    }
    componentDidMount(){
        Axios({
            method:"post",
            url:"http://127.0.0.1:5000/gamelist",
            data:{
                audi_name:this.props.match.params.id
            }
        })
        .then(resp =>{
        this.setState({
                games1:resp.data.games
        })
    }
        )
        .catch(err => console.log(err))
    }
    render(){
     let disp = this.state.games1.map(a=>{
         return <div className="row">
             <h4>{a.audiname}</h4>
         </div>
     })
        return (
            <div></div>
        )
    }
}
export default Game