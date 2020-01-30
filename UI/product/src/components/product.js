import React,{Component} from 'react';
import axios from 'axios';



class Product extends Component{
    constructor(props){
        super(props);
        this.state={
           product:[],
           
        }
    }


componentDidMount(){
    axios.get('http://127.0.0.1:8000/product/')
    .then(res=>{
        console.log(res.data)

        this.setState({
            
            product:res.data
        })
    })
}




render() 
{
    return(
        <div>
            
           <table>
            <tr>
               <th>NAME</th>
               <th>brand</th>
               <th>SPECIFICATION</th>
              
               {/* <th>last_modified</th>
               <th>specifications</th> */}
               
            </tr>
                {this.state.product
                .map((item,index)=>
                <tr key={index}>
                 
                 <td>{item.name}</td>
                 {/* <td>{item.brand}</td> */}
                <td>{item.specification.map((item,index)=><ol key={item}>{item}</ol>)}</td>
                 

                    
                </tr>
                )}
           </table>
         

        </div>

    )
}

}

export default Product;