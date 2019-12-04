import React, {Component} from 'react';

class Stats extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showStats : false
        }

    }

    onCheckedStats = () => {
        this.setState({showStats : this.refs.stats_check_box.checked});
    }

    resetToDefault = () => {
        this.refs.stats_check_box.checked = false;
        this.setState({showStats : false});
    }

    render() {
        const style = {
            textAlign : "center",
            margin : "auto",
        }
        if (this.state.showStats) {
            return (
                <React.Fragment>
                    <label>
                    <input type="checkbox" name="stats" value="stats" ref="stats_check_box" onChange={this.onCheckedStats}/>
                    Show Stats
                    </label>
                    <table style={style}>
                        <tbody>
                            <tr>
                                <th>Points Per Game</th>
                                <th>Rebounds Per Game</th>
                                <th>Assists Per Game</th>
                            </tr>
                            <tr>
                                <td>{this.props.items.player.ppg}</td>
                                <td>{this.props.items.player.reb}</td>
                                <td>{this.props.items.player.ast}</td>
                            </tr>
                        </tbody>
                    </table>
                </React.Fragment>
            )
        }
        return (
            <label>
            <input type="checkbox" name="stats" value="stats" ref="stats_check_box" onChange={this.onCheckedStats}/>
            Show Stats
            </label>
        );
    }
}

export default Stats;