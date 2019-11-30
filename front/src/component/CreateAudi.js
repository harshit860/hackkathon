import React from 'react'
import Axios from 'axios'

class CreatAudi extends React.Component{
    constructor(props){
        super(props)
        this.state={
                audi:"",
                img:""
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    add(){
        Axios({
            method:"post",
            url:"http://127.0.0.1:5000/create",
            data:{
                audiname:this.state.audi,
                img:this.state.img
            }

        })
        .then(resp =>console.log(resp))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className="container">
                <div className="row col-xl-12 mt-4">
                    <label>Enter Stadium or Auditoriam name</label>
                    <input name="audi" onChange={(e)=>this.handleChange(e)}></input>
                </div>
                <div className="row col-xl-12 mt-4">
                    <label>Enter Stadium or Auditoriam Image</label>
                    <input name="img"  onChange={(e)=>this.handleChange(e)}></input>
                </div>
                <button className="mt-3 btn btn-dark" onClick={()=>this.add()}>Add Place</button>
            </div>
        )
    }
}
export default CreatAudi