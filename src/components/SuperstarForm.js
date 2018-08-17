import React, {Component} from 'react';
import ActionButton from './ActionButton';
import './SuperstarForm.css';

class SuperstarForm extends Component
{
    render() {
        return (
            <div>
                <div className="pa4 black-80">
                    <form className="measure center">
                        <h2 className="f10 fw6 ph0 mh0">Update SuperStars</h2>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f8">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" defaultValue={this.props.name}/>
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f8">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" defaultValue={this.props.email}/>
                        </div>
                        
                            <div className="updatebtn">
                                <ActionButton btnText="Update"/>
                            </div>
                            <div>
                                <ActionButton btnText="Cancel"/>
                            </div>
                        
                       
                    </form>
                </div>
            </div>
        );
    }
}

export default SuperstarForm;