import React, {useState} from "react";
import "./bootstrap.min.css";

const AppCalculator = () => {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [total, setTotal] = useState('');
    const [operator, setOperator] = useState(1);
    let value_;
    let operator_;

    const handleClick = event => {
        event.persist();
        value_ = event.target.textContent;
        setTotal(prev => `${prev}${value_}`)
    };

    const handleClickFormula = event => {
        let _first = Number(total);
        setFirstNum(_first);
        operator_ = event.target.value;
        setOperator(operator_);
        setTotal('');
    };

    const handleBackSpace = event => {

    };

    const handleClickEqual = event => {
        let second = Number(total);
        setSecondNum(second);

        let _get;

        if (Number(operator) === 1) {
            _get = Number(firstNum) + Number(secondNum);
        }

        if (operator === 2) {
            _get = Number(firstNum) - Number(secondNum);
        }

        if (operator === 3) {
            _get = Number(firstNum) * Number(secondNum);
        }

        if (operator === 4) {
            _get = Number(firstNum) / Number(secondNum);
        }
        setTotal(_get)
    }

    return (<>
        <div className="container w-25">
            <div className="row">
                <div className="col text-center">
                    <h1 className="bg-danger text-white">Basic Calculator</h1>
                    <table className={"table table-sm"}>
                        <thead>
                        <tr>
                            <td colSpan={"4"}>
                                <input type="text" className="form-control" value={total} readOnly/>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"7"}>7
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"8"}>8
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"9"}>9
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClickFormula}
                                        value={"1"}>+
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"4"}>4
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"5"}>5
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"6"}>6
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClickFormula}
                                        value={"2"}>-
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"1"}>1
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"2"}>2
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"3"}>3
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClickFormula}
                                        value={"3"}>x
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"."}>.
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClick} value={"0"}>0
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleBackSpace}
                                        value={"B"}>B
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClickFormula}
                                        value={"4"}>/
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={"2"}>
                                <button className="btn btn-lg btn-block btn-dark" onClick={handleClickEqual}>=</button>
                            </td>
                            <td colSpan={"2"}>
                                <button className="btn btn-lg btn-block btn-dark" onClick={() => {
                                    setTotal("");
                                    setFirstNum(0);
                                    setSecondNum(0);
                                }}>Clear
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>)
};

export default AppCalculator;