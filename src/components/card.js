import React from "react"
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
 
class card extends React.Component{
    constructor() {
        super()
        this.state = { isGreen: true }
    }
    render(){
        var isGreen = this.state.isGreen
        var isOpen
        const categories =  this.props.categories.toUpperCase();
        if(this.props.isOpen === true){
            isOpen = "OPEN NOW";
            isGreen = true;
        }else{
            isOpen = "CLOSED";
            isGreen = false;
        }
        return (
            <div className="col-lg-3 col-sm-12 px-2 pb-5">
                <div className="card border-0 card-body p-1">
                    <img className="card-img-top bg-black bg-cover w-10" 
                    height="200" alt=""/>
                    <h5>
                        { this.props.name }<br/>
                        {this.props.rating}
                    </h5>
                    <tr className="mt-auto pb-4">
                        <td className="left">
                            <h6>
                                {categories} • {this.props.price} 
                            </h6>
                        </td>
                        <td className="right">
                            <h6>
                                <FontAwesomeIcon icon={faCircle} style={{color: isGreen ? 'mediumspringgreen' : 'red' }}/> {isOpen}
                            </h6>
                        </td>
                    </tr>
                    <button className="btn mt-auto"
                    onClick={this.props.onDetail}>
                        LEARN MORE
                    </button>
                </div>
            </div> 
        )
    }
}
export default card;