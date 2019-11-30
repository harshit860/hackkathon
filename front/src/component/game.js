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

    book(game1){
        console.log(game1)
        Axios({
            method: "post",
            url: "http://127.0.0.1:5000/gamecount",
            data: {
                game:game1
            }
        })
            .then(resp => {
               console.log(resp)
            }
            )
            .catch(err => console.log(err))
    }

    
    render(){
        console.log(this.state)
     let disp = this.state.games1.map(a=>{
         return <div className="row container mt-2 card-body shadow-lg">
             <h5 className="col-xl-2">{a.audiname}</h5>
             <h5 className="col-xl-2">{a.game}</h5>
             <h5 className="col-xl-2">{a.count}</h5>
             <button className="btn btn-warning" onClick={()=>this.book(a.game)}>Book Slot</button>
         </div>
     })
        return (
            <div className="container">{disp}</div>
        )
    }
}
export default Game