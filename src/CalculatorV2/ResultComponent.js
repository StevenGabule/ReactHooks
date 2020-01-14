import React, { Component} from 'react';

class ResultComponent extends Component {
    render() {
        let { result } = this.props;
        return (
            <div className={"result"}>
                <p className={"large bg-dark text-white p-3"} style={{fontSize: "24px", fontWeight: "bold"}}>{result}</p>
            </div>
        )
    }
}

export default ResultComponent;