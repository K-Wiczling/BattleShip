import React, {Component} from "react";
import ErrorBox from "./ErrorBox";

class ErrorBoundries extends Component {
    constructor(props){
        super(props)
        this.state= {
            error: false,
            errorContent: ""
        }
    }
    componentDidCatch(e){
        this.setState({errorContent: e});
        this.setState({error: true});

    }
    render(){
        if(this.state.error){
            return(
                <ErrorBox errorTitle={this.props.child} errorContent={this.errorContent}/>
            );
        }else{
            return this.props.children;
        }
    }
}
export default ErrorBoundries;