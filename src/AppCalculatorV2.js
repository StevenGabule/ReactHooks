import React, {Component} from 'react';
import ResultComponent from "./CalculatorV2/ResultComponent";
import KeyPadComponent from "./CalculatorV2/KeyPadComponent";
import "./bootstrap.min.css"

class AppCalculatorV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if (button === "=") {
            this.calculate();
        } else if (button === "C") {
            this.reset();
        } else if (button === "CE") {
            this.backspace();
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        let checkResult = '';
        if (this.state.result.includes('---')) {
            checkResult = this.state.result.replace('---', '+')
        } else {
            checkResult = this.state.result;
        }
        try {
            this.setState({
                // eslint-disable-next-line no-eval
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className={"container w-25"}>
                <div className={"row"}>
                    <div className="col">
                        <h1>Simple Calculator</h1>
                        <ResultComponent result={this.state.result}/>
                        <KeyPadComponent onClick={this.onClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppCalculatorV2;