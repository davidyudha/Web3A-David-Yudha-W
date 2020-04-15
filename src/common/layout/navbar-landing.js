import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item>
            <Link to="/">Profile</Link> 
        </Menu.Item>
        <Menu.Item>
          <Link to="/portofolio">Shop</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/blog/articleID">Blog Detail</Link>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
