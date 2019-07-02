import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input , Toast, ToastBody, ToastHeader , Col } from 'reactstrap';




class TaskForm extends Component {
    constructor(props) {
        super(props);
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
                            <Form>
                                <FormGroup>
                                    <Label for="title">Tên sách</Label>
                                    <Input type="text" name="title" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="amount">Số lượng</Label>
                                    <Input type="text" name="amount" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Trạng thái</Label>
                                    <Input type="select" name="status" >
                                        <option>Được mua nhiều</option>
                                        <option>Bình thường</option>
                                        <option>Kém</option>
                                    </Input>
                                </FormGroup>
                                <div style={{ textAlign: "center" }}>
                                    <Button color="success">Lưu lại</Button>
                                    <Button color="danger">Hủy bỏ</Button>
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
