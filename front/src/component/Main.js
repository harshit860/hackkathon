import React from 'react'
import Axios from 'axios'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
        Axios({
            method:"post",
            url:""

        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <div ></div>
                <div></div>
            </div>
        )
    }
}
export default Main;