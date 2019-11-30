import React from 'react'
import Axios from 'axios'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        Axios({
            method:"get",
            url:"http://127.0.0.1:5000/list"

        })
        .then(resp =>
            this.setState({
                list:resp.data.list
            }))
        .catch(err => console.log(err))
    }
    render(){
       let a= this.state.list.map(a=>{
        return <div className="row col-xl-8 border" >
                <div className="col-xl-3">{a.audiname}</div>
                 <div className="col-xl-3"></div>
        </div>
       })
        return(
            <div className="container">
                <div>{a}</div>
            </div>
        )
    }
}
export default Main;