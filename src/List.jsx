import React, {Component} from 'react';
import Stats from './Stats';

class List extends Component {
  constructor(props) {
    super(props);
    this.myRef = [];
    this.state = {
      showImages : true
    };
  }

  showImages = (showImages) => {
    this.setState({showImages : showImages});
  }

  resetToDefault = () => {
    this.setState({showImages : true});
    for (let i = 0; i < this.props.items.length; i++) {
      this.myRef[i].resetToDefault();
    }
  }

  renderList = () => {
    let result = [];
    for (let i = 0; i < this.props.items.length; i++) {
        const currPlayer = this.props.items[i];
        const firstName = currPlayer.name.split(' ')[0];
        const lastName = currPlayer.name.split(' ')[1];
        const key = firstName + "_" + lastName;
        const source = './' + firstName + '_' + lastName + '.png';
        const imageElement = this.state.showImages ? <img key={"img" + source} src={require("" + source)} alt={key}></img> : null;
        const tmp = 
        <React.Fragment key={"fragment" + i}>
            {imageElement}<br></br>
            <Stats ref={(ref) => { this.myRef[i] = ref; return true; }} key={"stats" + source} items={{player : currPlayer.stats, showStats: this.state.showStats}}></Stats>
            <div key={"div" + source} ><b>{"Name:"}</b> {currPlayer.name} <b>{" Conference:"}</b> {currPlayer.conference} <b>{" Team:"}</b> {currPlayer.team} <b>{" Position :"}</b> {currPlayer.position}</div>
        </React.Fragment>;
        result.push(tmp);
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default List; 