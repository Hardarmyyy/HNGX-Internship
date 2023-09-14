import axios from 'axios';



function App() {

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk4ODc0YjQxMzJmYmI3NTlhNjlhZmVjNWI5Y2Q0YyIsInN1YiI6IjY1MDIxM2Y4ZTBjYTdmMDBhZTNmZWI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3L8oPIq8nu5EzTCorf8-Vb53S0nwjYI584QpCxiYl0s'
  }
}

  axios
  .request(options)
  .then(function (response) {
  console.log(response.data);
  })
  .catch(function (error) {
  console.error(error);
  });

    return (
      <>
        
      </>
    )
  }

export default App
