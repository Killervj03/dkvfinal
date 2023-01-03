import { Link } from "react-router-dom";
import Idcard from "./IDcard";

export default class Component extends Component {

    print(){
        window.print();
    }


  render() {
<div>
  <Idcard/>
  <span className="print"
              onClick={this.print}>
               
               <Link to="/Idcard">
    <button Primary>PRINT</button>
    </Link>
    </span>
   
    
   
    </div> 

    
  }

}