import React, { Component } from 'react';
import { Button, InputGroup, Input , Col } from 'reactstrap';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword: null
        }
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(event){
        
        this.setState({
            keyword: event.target.value
        });
    }

    onSearch = () =>{
        
        this.props.onSearch(this.state.keyword);
    }

    

    render() {
        return (

            <Col sm="6">
                <InputGroup>
                    <Input type="text" name="search" placeholder="Nhập từ khóa ..."  onChange={this.onChange}/>
                    <Button color="primary" onClick={this.onSearch}>Tìm</Button>
                </InputGroup>
            </Col>


        );
    }
}

export default Search;
