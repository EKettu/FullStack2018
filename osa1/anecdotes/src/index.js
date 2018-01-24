import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.getRandomInt(),
            votes: new Array(props.anecdotes.length).fill(0)
        }
    }

    getRandomInt() {
        const max = anecdotes.length
        return Math.floor(Math.random() * Math.floor(max));
    }

    clickButton = () => {
        return () => {
            this.setState({
                selected: this.getRandomInt()
            })
        }
    }

    vote = () => {
        return () => {
            const votes = [...this.state.votes]
            votes[this.state.selected] = (votes[this.state.selected] || 0) + 1
            this.setState({
                votes: votes
            })
        }
    }

    getMaximumIndex() {
        const max = (Math.max(...this.state.votes))
        return this.state.votes.indexOf(max);
    }

    render() {
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <p>has {this.state.votes[this.state.selected]} votes</p>
                <div>
                    <Button handleClick={this.vote()} text="vote" />
                    <Button handleClick={this.clickButton()} text="next anecdote" />
                </div>
                <div>
                    <h1>anecdote with most votes</h1>
                    {this.props.anecdotes[this.getMaximumIndex()]}
                    <p>has {this.state.votes[this.getMaximumIndex()]} votes</p>

                </div>
            </div>

        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)