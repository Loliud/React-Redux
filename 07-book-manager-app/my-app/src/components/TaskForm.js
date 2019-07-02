import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input , Toast, ToastBody, ToastHeader , Col } from 'reactstrap';




class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: '',
            name: '',
            amount: '',
            status: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      
    }

    onChange(event){
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let id = Math.floor(Math.random() * 1000000) + 10000 + 'danuid';
        this.setState({
            id: id,
            [name]: value
        });

    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
   

    render() {
        return (

            <Col sm="4">
                <div className="p-3 bg-info my-2 rounded">
                    <Toast>
                        <ToastHeader>
                            <h4>
                                Thêm sách
                            </h4>
                        </ToastHeader>
                        <ToastBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="title">Tên sách</Label>
                                    <Input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="amount">Số lượng</Label>
                                    <Input type="number" min="1" max="500" name="amount"  value={this.state.amount} onChange={this.onChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Trạng thái</Label>
                                    <Input type="select" name="status" value={this.state.status} onChange={this.onChange}>
                                        <option>Select</option>
                                        <option>Hot</option>
                                        <option>Medium</option>
                                    </Input>
                                </FormGroup>
                                <div style={{ textAlign: "center" }}>
                                    <Button type="submit" color="success" onSubmit={this.onSubmit}>Lưu lại</Button>
                                    <Button color="danger"  >Hủy bỏ</Button>
                                </div>
                            </Form>
                        </ToastBody>
                    </Toast>
                </div>

            </Col>

        );
    }
}

export default TaskForm;
