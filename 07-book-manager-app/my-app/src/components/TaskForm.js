import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Toast, Alert, ToastBody, Col } from 'reactstrap';




class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            amount: '',
            status: 'None'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }
    // gan taskedit truong khi mount
    componentWillMount() {
        if (this.props.taskEdit) {
            let book = this.props.taskEdit;
            this.setState({
                id: book.id,
                name: book.name,
                amount: book.amount,
                status: book.status
            });

        }

    }

    // nhung props dc nhan sau khi da mount dau tien
    componentWillReceiveProps(nextProps){
       if(nextProps && nextProps.taskEdit){
        this.setState({
            id: nextProps.taskEdit.id,
            name: nextProps.taskEdit.name,
            amount: nextProps.taskEdit.amount,
            status: nextProps.taskEdit.status
        });
       }

       else if(nextProps && nextProps.taskEdit === null){
           this.setState({
                id: '',
                name: '',
                amount: '',
                status: 'None'
           });
       }

    }

    onChange(event) {
        let id;
        if (this.state.id === '') {
            id = Math.floor(Math.random() * 1000000) + 10000 + 'danuid';
        }
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            id: id ? id : this.state.id,
            [name]: value
        });
        console.log(this.state);

    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    // cach dung arrow function de ko can bind

    allRemove = () => {
        this.setState({
            id: '',
            name: '',
            amount: '',
            status: ''
        })
    };




    render() {

        const onExit = this.props.onExit;
        const taskEdit = this.state;
        let id = taskEdit.id;
        let title = id ? 'Cập nhật sách' : 'Thêm sách mới'
        return (

            <Col sm="4">
                <div className="p-3 bg-info my-2 rounded">

                    <Toast>
                        <Alert color="warning" style={{paddingBottom: '2rem'}}>
                            <p style={{float: 'left'}}>{title}</p> 
                             <p style={{float: 'right', margin: '0', cursor: 'pointer'}} onClick={onExit}>X</p>
                      </Alert>
                        

                        <ToastBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="title">Tên sách</Label>
                                    <Input type="text" name="name" value={this.state.name} onChange={this.onChange} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="amount">Số lượng</Label>
                                    <Input type="number" min="1" max="500" name="amount" value={this.state.amount} onChange={this.onChange} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Trạng thái</Label>
                                    <Input type="select" name="status" value={this.state.status} onChange={this.onChange} required>
                                        <option>Select</option>
                                        <option>Hot</option>
                                        <option>Medium</option>
                                    </Input>
                                </FormGroup>
                                <div style={{ textAlign: "center" }}>
                                    <Button type="submit" color="success" onSubmit={this.onSubmit}>Lưu lại</Button>
                                    <Button color="danger" onClick={this.allRemove} >Hủy bỏ</Button>
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
