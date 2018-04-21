import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap';

export default class AddDoctor extends  React.Component {

    constructor(props, context) {
    super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);

        this.state = {
            value: ''
            };
        }

    getValidationState() {
            const length = this.state.value.length;
            if (length == 42) return 'success';
            else if (length == 0) return 'warning';
            else if (length < 42) return 'error';
            return null;
    }

    handleChange(e) {
            this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
            <Row className="show-grid">
            <form style={{    margin: '50px',
    background: '#ffffff90',
    padding: '50px',
    borderRadius: '15px'}}>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Manage Doctors</ControlLabel>
                    <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter address"
                    onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Please be sure your address is an ethereum address .</HelpBlock>
                </FormGroup>
                <Button bsStyle="info" type="submit">Add Doctor</Button>
                </form>
            </Row>
        </div>);
    }
}
