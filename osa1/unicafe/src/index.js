import React from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => {
    return (
        <tr><td>{props.text}</td><td>{props.number}</td></tr>
    )
}

const Statistics = (props) => {
    return (
        <table>
            <tbody>
                <Statistic text="hyvä" number={props.props.good} />
                <Statistic text="neutraali" number={props.props.neutral} />
                <Statistic text="huono" number={props.props.bad} />
                <Statistic text="keskiarvo" number={((props.props.good - props.props.bad) / props.props.inTotal).toFixed(1)} />
                <Statistic text="positiivisia" number={((props.props.good / props.props.inTotal)*100).toFixed(1)} />
            </tbody>
        </table>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            inTotal: 0
        }
    }

    clickButton = (param) => {
        return () => {
            this.setState({
                [param]: this.state[param] + 1,
                inTotal: this.state.inTotal + 1,

            })
        }
    }

    render() {
        const statistics = () => {
            if (this.state.inTotal === 0) {
                return (
                    <div>
                        <p>ei yhtaan palautetta annettu</p>
                    </div>
                )
            }
            return (
                <Statistics props={this.state} />
            )
        }

        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <Button handleClick={this.clickButton('good')} text="hyvä" />
                    <Button handleClick={this.clickButton('neutral')} text="neutraali" />
                    <Button handleClick={this.clickButton('bad')} text="huono" />
                </div>
                <h1>statistiikka</h1>
                <div>{statistics()}</div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
