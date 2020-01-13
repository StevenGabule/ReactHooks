import React, {Component} from 'react';

class AppClass extends Component {
    state = {
        count: 0,
        isOn: false
    };

    componentDidMount() {
        document.title = `you have been clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `you have been clicked ${this.state.count} times`;
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    toggleLight = () => {
      this.setState(prevState => ({
          isOn: !prevState.isOn
      }))
    };

    render() {
        return (
            <>
                <h2>Counter</h2>
                <p>I was clicked by {this.state.count}</p>
                <button onClick={this.incrementCount}>Click me</button>
                <h2>Toggle Light</h2>
                <div onClick={this.toggleLight} style={{height: '50px', width: '50px', background: this.state.isOn ? "yellow" : "grey"}}/>
            </>
        )
    }

}

export default AppClass;
