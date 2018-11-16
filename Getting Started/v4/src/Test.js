import React ,{Component} from 'react';

export default class Test extends Component{
state = {
    button1 : null,
    test_id : null
       
}

componentDidMount(){
    console.log(this.props);
    let id = this.props.match.params.test_id;
    this.setState({
        test_id:id
    })

}
handleClick = (e) => {
    let flag = this.state.button1 ? false : true
    this.setState({
            [e.target.id] : flag
        });
    }

render(){

    // let displayElement;
    // if(this.state.button1){
    //     displayElement = <h1 >YesButton</h1>
    // }else{
    //     displayElement = <h1>NoButton</h1>
    // }


    
    return (
       
        <div>
            <div>
                <h4>{this.state.test_id}</h4>
                {/* <button id="button1" onClick={this.handleClick}>Button 1</button>
            </div>
            <div>
                <h1>Display</h1>
                { displayElement } */}
            </div>
            
        </div>
    )
}    

}
