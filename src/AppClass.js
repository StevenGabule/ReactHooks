import React, {Component} from 'react';

class AppClass extends Component {
    state = {
        count: 0,
        isOn: false,
        x: null,
        y: null
    };

    componentDidMount() {
        document.title = `you have been clicked ${this.state.count} times`;
        window.addEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseMove = event => {
        this.setState({
            x: event.pageX,
            y: event.pageY
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `you have been clicked ${this.state.count} times`;
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
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
                <h2>Mouse positions</h2>
                <p>X position: {this.state.x}</p>
                <p>Y position: {this.state.y}</p>
            </>
        )
    }

}

export default AppClass;
