import React,{Component} from 'react';

class AddTask extends Component{
    state ={
        content : ''
    }

    handleChange = (e) =>{
        this.setState({
            content : e.target.value
        })

    }

    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            content:''
        })
        
    }

    render(){
        return(
            <div className="addTask">
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Tasks:</label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>

        )
    }
}

export default AddTask;
