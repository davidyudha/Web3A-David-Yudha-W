import React, { Component, Fragment } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

class PortofolioComponent extends Component{
    state ={
        order: 1
    }

    handlePlus = () => {
            this.setState({
                order : this.state.order + 1
            })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order : this.state.order - 1
            })
        }
    }
    render(){
        return(
            <Fragment>
                <div className="header">
                    Produk Merchandise Wizarding World
                </div>
                <div className="troley">
                    <p className="troley-cart">Total Belanja : {this.state.order} </p>
                </div>
                <div className="card">
                    <div className="img-thumb-product">
                        <img src="https://s1.bukalapak.com/img/65863474481/original/14de00cb97a4032c869a363b60e4be25b_bayar_di_tempat_buku_noteb.png" alt="Notebook Harry Potter"/>
                    </div>
                    <p className="product-name">Notebook Harpot</p>
                    <p className="product-price">Rp. 15.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input className="input" type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PortofolioComponent;