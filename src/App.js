import React from 'react';
import {message, Input, Form, Button, Row, Col} from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.handChange = this.handChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handChange(type,e){
    if(type==="username"){
      this.setState({
        username: e.target.value
      })
    }
    if(type==="password"){
      this.setState({
        password: e.target.value
      })
    }
  }

  handleClick(){
    message.success(<span>{"username: "+this.state.username}{"   password: "+this.state.password}</span>)
  }

  render() {
    return (
        <div style={{marginTop:"20px"}}>
          <Row>
            <Col span={16}>
              <Form {...layout} >
                <Form.Item name={"username"} label={"账号"}>
                  <Input onChange={this.handChange.bind(this, 'username')} placeholder={"账号"}/>
                </Form.Item>
                <Form.Item label={"密码"}>
                  <Input.Password onChange={this.handChange.bind(this, 'password')} placeholder={"密码"}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button onClick={this.handleClick}>Submit</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
    );
  }

}

export default App;
