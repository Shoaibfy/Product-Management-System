import React,{Component} from 'react';
import Axios from 'axios';





class Categories extends Component{
    constructor(props){
        super(props);
        this.state={
            categories:[

                // {
                //     "id": 8,
                //     "name": "oneplus",
                //     "parent_category": 11
                // },
                // {
                //     "id": 9,
                //     "name": "Apple",
                //     "parent_category": 8
                // }
            ]

        }
    }

    componentDidMount(){
        Axios.get('http://127.0.0.1:8000/category/')
        .then(res=>{
            this.setState({
                categories:res.data
            })
        })
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                    <th>ID</th>
            
                    <th>Name</th>
                    <th>PARENT_CATEGORY</th>
                    
                    
                    </tr>
                    {this.state.categories
                    .map((item,index)=>
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    {/* {console.log(item.parent_category)} */}
                    <td>{(item.parent_category) ? (item.parent_category.name): ""}</td>
                    </tr>)}
                </table>
                <div>
              Enter Category:<input type="text"value={this.state.product} />
              <br/>
              <button>Add</button>
          </div>
            </div>

        )
    }
}
export default Categories;