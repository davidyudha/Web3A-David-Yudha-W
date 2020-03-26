import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Rate, Avatar, Timeline, Tag } from 'antd';

const { Header, Content, Footer } = Layout;
const cardData = [
  {
    title:"Lazarus Kumbara",
    job:"FrontEnd Dev",
    rate:4.5,
    education:["Ilmu Komputer Universitas Indonesia","Diploma Komputer dan Sistem Informasi Universitas Gadjah Mada"]
  },
  {
    title:"Iskandar Soebagjo",
    job:"BackEnd Dev",
    rate:4,
    education:["Informatika Bina Nusantara University","Diploma Informatika Universitas Sebelas Maret"]
  },
  {
    title:"Widjaja Putri",
    job:"UI/UX Designer",
    rate:4.5,
    education:["Graphic Design University of San Fransisco","Desain Komunikasi Visual Institut Seni Indonesia Yogyakarta"]
  }
]
class App extends React.Component{
  state = {
    order: 4
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    })
  }
  
  handleMinus= () => {
    if (this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      }) 
    }
  }
  render(){
    return(
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item>Data Nama dan Pekerjaan</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="site-layout-content">
            <div className="site-card-wrapper">
              <Row gutter={16}>
                {cardData.map(data => 
                      <Col span={8}>
                        <Card title={'Profil'} bordered={false}>
                          <Card><Tag color="#293462">Name</Tag><br />{data.title}</Card>
                          <Card><Tag color="#00818a">Job</Tag><br />{data.job}</Card>
                          <Card><Tag color="#ec9b3b">Performance</Tag><br /><Rate allowHalf defaultValue={data.rate} /></Card>
                          <Card><Tag color="#f7be16">Education</Tag><br />
                            <Timeline>
                               <Timeline.Item>{data.education[0]}</Timeline.Item>
                               <Timeline.Item>{data.education[1]}</Timeline.Item> 
                            </Timeline>
                          </Card>
                          <Card><Tag color="#1eb2a6">Give Your Score To Him/Her !</Tag>
                          <br />
                          Berikan nilai dari 1-10
                          <div className="counter">
                              <button className="minus" onClick={this.handleMinus}>-</button>
                              <input className="input" type="text" value={this.state.order}/>
                              <button className="plus" onClick={this.handlePlus}>+</button><br />
                              <p>Your score : {this.state.order}</p>
                          </div>
                          </Card>
                        </Card>
                      </Col>    
                )}
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
  }
export default App;
