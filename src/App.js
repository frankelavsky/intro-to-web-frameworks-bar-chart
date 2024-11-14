// import logo from './logo.svg';
import BarChart from './bar-chart';
import './App.css';

const data = [
  {
    "animal": "cat",
    "count": 3
  },
  {
    "animal": "dog",
    "count": 4
  },
  {
    "animal": "bird",
    "count": 2
  },
  {
    "animal": "fish",
    "count": 2
  }
]

function App() {
  return (
    <div className="App">
      <BarChart
        data={data}
      ></BarChart>
    </div>
  );
}

export default App;
