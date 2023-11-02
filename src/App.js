import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>


    </div>
  );
}

// function LoadCountry() {
//   const [countries, setCountry] = useState([])
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => setCountry(data))

//   }, [])
//   return (
//     <div>
//       <h1>World tour</h1>
//       <h3>All countries :{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} capital={country.capital} population={country.population} region={country.region}></Country>)
//       }

//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Capital: {props.capital}</h3>
//       <h4>Region: {props.region}</h4>
//       <h4>population: {props.population}</h4>


//     </div>
//   )
// }

export default App;
