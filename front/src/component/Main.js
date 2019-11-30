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
                 <div className="col-xl-3">{a.location}</div>
                <div className="col-xl-3"><img className="col-xl-12" src={a.img}></img></div>
        </div>
       })
        return(
            <div className="container">
                <div className="row col-xl-8">
                    <div className="col-xl-3">Playground Name</div>
                    <div className="col-xl-3">Location</div>
                    <div className="col-xl-3 ml-4">Thumbnail</div>
                </div>
                <div>{a}</div>
            </div>
        )
    }
}
export default Main;