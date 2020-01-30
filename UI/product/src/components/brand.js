import React,{Component} from 'react';
import Axios from 'axios';

class Brand extends Component{
    constructor(props){
        super(props);
        this.state={
            brand:   [
                // {
                //     "name": "lenova",
                //     "data_created": "2019-12-24T10:16:07.667622Z",
                //     "last_modified": "2019-12-24T10:16:07.667675Z"
                // }
                
            ]

        }
    }
    componentDidMount(){
        Axios.get('http://127.0.0.1:8000/brand/')
        .then(res=>{
            this.setState({
                brand :res.data
            })
        })
    }

render(){
    return(
        <div>
            <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
              
            </tr>
                {this.state.brand
                .map((item,index)=>
                <tr key={index}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                
                 
                    
                </tr>
                )}
           </table>
           <div>
              Enter Brand:<input type="text"value={this.state.product} />
              <br/>
              <button>Add</button>
          </div>
           
        </div>

    )
}
}
export default Brand;