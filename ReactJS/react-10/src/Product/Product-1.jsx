import React, { Component } from 'react'

class Product extends Component {
    state = {
        product_Name: 'RedMI Note 12 - 64 GB',
        price: 14999,
        qty: 1,
        image: ''
    }
    
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-8">
                        <table className='table'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th> Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td>{this.state.product_Name}</td>
                                    <td>{this.state.price}</td>
                                    <td><i className='fa fa-minus-circle'></i>{this.state.qty}<i className='fa fa-plus-circle'></i></td>
                                    <td>{this.state.qty * this.state.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product