import React, {Component, setState} from "react";  
import Card from "../components/card";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

class Restaurants extends Component {  
    constructor(){
        super()
        this.state = {
            list: [
                {
                    name:"Very Long Name Restaurants Number 1 In List", 
                    categories:"Thai",
                    isOpen:true,
                    price: "$$$$",
                    rating: "★★★★☆"                
                },
                {
                    name:"Restaurant 2", 
                    categories:"Seafood",
                    price: "$",
                    isOpen:false,
                    rating:"★★★☆☆"                
                },
                {
                    name:"Restaurant 3", 
                    categories:"Japanese",
                    price: "$$$",
                    isOpen:true,
                    rating:"★★★★☆"                
                },
                {
                    name:"Restaurant 4", 
                    categories:"Italian",
                    price: "$$",
                    isOpen:true,
                    rating:"★★★★☆"                
                },
                {
                    name:"Restaurant 5", 
                    categories:"American",
                    price: "$",
                    isOpen:false,
                    rating:"★★★☆☆"                
                },
                {
                    name:"Restaurant 6", 
                    categories:"Mexican",
                    price: "$$$",
                    isOpen:true,
                    rating:"★★★★☆"                
                },
                {
                    name:"Restaurant 7", 
                    categories:"Steakhouses",
                    price: "$$",
                    isOpen:true,
                    rating:"★★★☆☆"                
                },
                {
                    name:"Restaurant 8", 
                    categories:"Mexican",
                    price: "$$$$",
                    isOpen:true,
                    rating:"★★★☆☆"                
                },
            ],
            action: "",
            name: "",
            categories: "",
            price: "",
            rating: "",
            selectedItem: null,
            isOpen: null,
            modal:false
        }
        this.state.restaurants = this.state.list
    }   

    Detail = (item) => {
        // menampilkan komponen modal
        this.setState({
            modal: true,
            name: item.name,
            categories: item.categories,
            price: item.price,
            isOpen: item.isOpen,
            rating: item.rating,
            selectedItem: item
        })
    }

    Close(){
        this.setState({
            modal: false
        })
    }

    render(){
        return(
            <div className="container-none">
                <hr/>
                    <div className="contents">
                        <tr>
                            <td>
                                <div className="filter">
                                    Filter By: 
                                </div>
                            </td>
                            <td>
                                <div className="border-bottom mx-3">
                                    <input type="checkbox" className="checkbox" />
                                    <label for="chkSuccess">
                                        Open Now
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="border-bottom mx-3">
                                    <select className="border-0">
                                        <option value="">Price </option>
                                        <option value="4">$$$$</option>
                                        <option value="3">$$$</option>
                                        <option value="2">$$</option>
                                        <option value="1">$</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div className="border-bottom mx-3">
                                    <select className="border-0" >
                                        {this.state.restaurants.map(item => (
                                            <option key={this.state.restaurants} value={this.state.categories}>
                                                {item.categories}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </div>
                <hr/>
                <div className="contents">
                    <h4>All Restaurants</h4>
                    <div className="row">
                        { this.state.restaurants.map( (item, index) => (
                            <Card
                            name={item.name}
                            categories={item.categories}
                            price={item.price}
                            isOpen={item.isOpen}
                            rating={item.rating}
                            onDetail={ () => this.Detail(item)}
                            />
                        )) }
                    </div>
                </div>
                <Modal show={this.state.modal} onHide={this.closeModal}>
                    <div className="modal-content">
                        <div className="modal-header">
                            {this.state.name}
                            <button className="btn btn-danger" onClick={() => this.Close()}>
                                X
                            </button>
                        </div>
                        <div className="modal-body">
                            
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}  
export default Restaurants;  