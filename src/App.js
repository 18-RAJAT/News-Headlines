import React, { useState } from 'react'
import axios from 'axios';
import './App.css';
function App() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=095c8f5401a140548d69023b97c3eb81#")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <button className='btn' onClick={fetchNews}>Today's Headlines</button>
           
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img" alt="..." />

                    <div className="card-body">

                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      {/* <a href="#" className="btn btn-primary">Main</a> */}

                    </div>
                  </div>
                </div>
              );
            })
          }
           <footer>Created by - ® Rajat joshi</footer>
        </div>
      </div>
    </>
  )
}

export default App;