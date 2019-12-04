import React, { Component } from "react";
import List from './List';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.listElement = React.createRef();

    this.state = {
      sort: false,
      west : false,
      east : false,
      pg : false,
    };

    this.players =
    [
      {name : "James Harden", conference : "West", position : "PG", team : "Houston Rockets", stats : {ppg : 37.9, reb : 6.1, ast : 8.0}},
      {name : "Lebron James", conference : "West", position : "SF", team : "Los Angeles Lakers", stats : {ppg : 25.6, reb : 7.4, ast : 11.0}},
      {name : "Giannis Antetokounmpo", conference : "East", position : "F", team : "Milwaukee Bucks", stats : {ppg : 31.1, reb : 13.9, ast : 6.4}},
      {name : "Stephen Curry", conference : "West", position : "SF", team : "Golden State Warriors", stats : {ppg : 20.3, reb : 5.0, ast : 6.5}},
      {name : "Anthony Davis", conference : "West", position : "PF", team : "Los Angeles Lakers", stats : {ppg : 25.1, reb : 9.0, ast : 3.8}},
      {name : "Kawhi Leonard", conference : "West", position : "SF", team : "Los Angeles Clippers", stats : {ppg : 25.7, reb : 8.0, ast : 5.5}},
      {name : "Russel Westbrook", conference : "West", position : "PG", team : "Houston Rockets", stats : {ppg : 22.2, reb : 7.5, ast : 6.8}},
      {name : "Chris Paul", conference : "West", position : "PG", team : "Oklahoma City Thunder", stats : {ppg : 16.2, reb : 4.3, ast : 5.7}},
      {name : "Kevin Durant", conference : "East", position : "SF", team : "Brooklyn Nets", stats : {ppg : 26.0, reb : 6.4, ast : 5.9}},
      {name : "Luka Doncic", conference : "West", position : "PG", team : "Dallas Mavericks", stats : {ppg : 30.6, reb : 10.1, ast : 9.8}},
      {name : "Paul George", conference : "West", position : "SF", team : "Los Angeles Clippers", stats : {ppg : 25.0, reb : 6.3, ast : 4.7}},
      {name : "Kyrie Irving", conference : "East", position : "PG", team : "Brooklyn Nets", stats : {ppg : 28.5, reb : 5.4, ast : 7.2}},
      {name : "Joel Embiid", conference : "East", position : "PF", team : "Philadelphia 76ers", stats : {ppg : 21.0, reb : 11.8, ast : 2.9}},
      {name : "Damian Lillard", conference : "West", position : "PG", team : "Portland Trail Blazers", stats : {ppg : 27.3, reb : 4.9, ast : 7.5}},
      {name : "Ben Simmons", conference : "East", position : "PG", team : "Philadelphia 76ers", stats : {ppg : 12.9, reb : 6.7, ast : 8.3}},
      {name : "Al Horford", conference : "East", position : "PF", team : "Philadelphia 76ers", stats : {ppg : 14.5, reb : 7.3, ast : 4.1}},
      {name : "Bradley Beal", conference : "East", position : "SG", team : "Washington Wizards", stats : {ppg : 29.6, reb : 4.6, ast : 7.1}},
      {name : "Kristaps Porzingis", conference : "West", position : "PF", team : "Dallas Mavericks", stats : {ppg : 18.5, reb : 9.1, ast : 1.6}},
      {name : "Jimmy Butler", conference : "East", position : "SF", team : "Miami Heat", stats : {ppg : 18.9, reb : 5.4, ast : 6.7}},
      {name : "CJ McCollum", conference : "West", position : "SG", team : "Portland Trail Blazers", stats : {ppg : 22.1, reb : 4.6, ast : 3.9}}
    ];
  }

  onCheckedWest = () => {
    this.setState({ west: this.refs.west_check_box.checked});
  };

  onCheckedEast = () => {
    this.setState({ east: this.refs.east_check_box.checked});
  };

  onCheckedPG = () => {
    this.setState({ pg: this.refs.pg_check_box.checked});
  };

  onCheckedSort = () => {
      this.setState({ sort: this.refs.sort_check_box.checked});
  }

  onCheckedImages = () => {
    this.listElement.current.showImages(this.refs.images_check_box.checked);
  }

  onClickReset = () => {
    this.refs.west_check_box.checked = false;
    this.refs.east_check_box.checked = false;
    this.refs.pg_check_box.checked = false;
    this.refs.sort_check_box.checked = false;
    this.refs.images_check_box.checked = true;

    this.setState({ west: this.refs.west_check_box.checked});
    this.setState({ east: this.refs.east_check_box.checked});
    this.setState({ pg: this.refs.pg_check_box.checked});
    this.setState({ sort: this.refs.sort_check_box.checked});
    this.listElement.current.resetToDefault();
  }

  showPlayers() {
    const shouldSort = this.state.sort;
    const isWest = this.state.west;
    const isEast = this.state.east;
    const isPG = this.state.pg;
    const isAll = !this.state.west && !this.state.east && !this.state.pg;
    let result = [];
    if (isAll && !shouldSort) {
        return this.props.items;
    } else if (isAll && shouldSort) {
        result = this.players;
    } else {
        for (let i = 0; i < this.props.items.length; i++) {
            const currPlayer = this.props.items[i];
            if (isWest && isEast && isPG) {
                if (currPlayer.position === "PG") {
                    result.push(currPlayer);
                }
            } else if (isWest && isPG) {
                if (currPlayer.conference === "West" && currPlayer.position === "PG") {
                    result.push(currPlayer);
                }
            } else if (isEast && isPG) {
                if (currPlayer.conference === "East" && currPlayer.position === "PG") {
                    result.push(currPlayer);
                }
            } else if (isWest && isEast) {
                result.push(currPlayer);
            } else if (isWest) {
                if (currPlayer.conference === "West") {
                    result.push(currPlayer);
                }
            } else if (isEast) {
                if (currPlayer.conference === "East") {
                    result.push(currPlayer);
                }
            } else if (isPG) {
                if (currPlayer.position === "PG") {
                    result.push(currPlayer);
                }
            }
        }
    }
    
    if (shouldSort) {
        result = result.sort((a,b) => {return a.name.toLowerCase().localeCompare(b.name.toLowerCase());});
    }
    return result;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>NBA Players</h1>
        Filter by: <br></br>
        <label>
            <input type="checkbox" name="west" value="west" ref="west_check_box" onChange={this.onCheckedWest}/>
            Western Conference Players
        </label>
        <label>
            <input type="checkbox" name="east" value="east" ref="east_check_box" onChange={this.onCheckedEast}/>
            Eastern Conference Players
        </label>
        <label>
            <input type="checkbox" name="pg" value="pg" ref="pg_check_box" onChange={this.onCheckedPG}/>
            Point Guards
        </label><br></br><br></br>
        <label>
            <input type="checkbox" name="sort" value="sort" ref="sort_check_box" onChange={this.onCheckedSort}/>
            Sort Players Alphabetically by Name
        </label>
        <label>
            <input type="checkbox" name="images" value="images" defaultChecked={true} ref="images_check_box" onChange={this.onCheckedImages}/>
            Show Player Images
        </label><br></br><br></br>
        <button id="reset" onClick={this.onClickReset}>Reset to Default</button>
        <br></br><br></br><br></br>
        <List ref={this.listElement} items={this.showPlayers()} />
      </div>
    );
  }
}

export default Filters;
