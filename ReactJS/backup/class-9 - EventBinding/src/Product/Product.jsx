import React, { Component } from 'react'

class Product extends Component {
    state = {
        product_Name: 'RedMI Note 12 - 64 GB',
        price: 14999,
        qty: 1,
        image: 'https://rukminim1.flixcart.com/image/224/224/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=90'
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
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
                                    <td><img src={this.state.image} alt="" height="80px" /></td>
                                    <td>{this.state.price}</td>

                                    <td><i onClick={this.decrHandler} className='fa fa-minus-circle'></i>{this.state.qty}<i onClick={this.incrHandler} className='fa fa-plus-square'></i></td>
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