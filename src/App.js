import React  from 'react';
import './App.css';
import Filters from './Filters'

const players =
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<Filters items={players}/>}
      </header>
    </div>
  );
}

export default App;
