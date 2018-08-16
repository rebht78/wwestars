import React, {Component} from 'react';

class SuperstarForm extends Component
{
    render() {
        return (
            <div>
                <div className="pa4 black-80">
                    <form className="measure center">
                        <legend className="f10 fw6 ph0 mh0">Update SuperStars</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f8">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" defaultValue={this.props.name}/>
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f8">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" defaultValue={this.props.email}/>
                        </div>
                        <div className="mt3">
                            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f8 dib">Update</button>
                        </div>
                        <div className="mt3">
                        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f8 dib">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SuperstarForm;