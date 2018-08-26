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
        let buttonText = "";
        if (this.props.location.pathname === "/create")
        {
            buttonText = "Create Superstar";
        }
        else
        {
            buttonText = "Edit Superstar";
        }
        return (
            <div>
                <div className="pa4 black-80">
                    <form className="measure center" onSubmit={this.operationButtonClicked}>
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
                                <ActionButton btnType="submit" btnText={buttonText}/>
                            </div>
                            <div>
                                <ActionButton btnType="reset" btnText="Reset"/>
                            </div>
                        
                       
                    </form>
                </div>
            </div>
        );
    }
    operationButtonClicked = (event) => {
        event.preventDefault();
        if (!this.state.name)
        {
            alert("Superstar Name cannot be left blank!");
            return false;
        }
        else if (!this.state.email)
        {
            alert("Superstar Email cannot be left blank!");
            return false;
        }
       fetch(
           'http://localhost:3020/api/superstars', {
        method:'POST',
        headers: {
            'Accept':'Application/json',
            'content-type':'application/json'
        },
        body: JSON.stringify(
            {
                name:this.state.name,
                email:this.state.email
            }
        )}
     ).then(response => {
         console.log(response);
     }).then(data => {
        console.log(data);
     });
     return true;
    }
}

export default SuperstarForm;