import React, {Component} from 'react';
import ActionButton from './ActionButton';
import './SuperstarForm.css';

class SuperstarForm extends Component
{
    constructor() {
        super();
        this.state = {
            name:'',
            email:''
        }
    }
    componentDidMount()
    {
        this.setState({name: this.props.name});
        this.setState({email: this.props.email});
    }
    nameChange = (event) => {
        this.setState({name: event.target.value});
    };
    emailChange = (event) => {
        this.setState({email: event.target.value});
    };
    render() {
        return (
            <div>
                <div className="pa4 black-80">
                    <form className="measure center">
                        <h2 className="f10 fw6 ph0 mh0">{this.props.title}</h2>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f8">Name</label>
                            <input onChange={this.nameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" defaultValue={this.props.name}/>
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f8">Email</label>
                            <input onChange={this.emailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" defaultValue={this.props.email}/>
                        </div>
                        
                            <div className="updatebtn">
                                <ActionButton btnText={this.props.btnText} clickhandler={this.operationButtonClicked}/>
                            </div>
                            <div>
                                <ActionButton btnText="Cancel"/>
                            </div>
                        
                       
                    </form>
                </div>
            </div>
        );
    }
    operationButtonClicked = () => {
        alert("Name: "+this.state.name);
        alert("Email: "+this.state.email);
    }
}

export default SuperstarForm;