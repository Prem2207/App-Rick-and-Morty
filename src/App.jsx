import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import HeaderInfo from './components/HeaderInfo'
import Loading from './components/Loading'

import ResidentsInfo from './components/ResidentsInfo'



function App() {
  const [appLocation, setAppLocation] = useState({})
  const [inputValue, setInputValue] = useState("search by number from 1 to 126")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => {
        setIsLoading(false)
        setAppLocation(res.data)
      })
  }, [])


  const searchId = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${inputValue}`)
      .then(res => setAppLocation(res.data))
  }

  console.log(appLocation)
  return (
    <div className="App">

      {
        isLoading ? <Loading /> : (
          <>


            <div className='header--imput'>
              <div className='header--imput-info'>

                <input style={{ height: "3rem", width: "60%", border: "none" }} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button style={{ height: "3rem", width: "5%", backgroundColor: "white", border: "none" }} onClick={searchId}>Search</button>

              </div>

            </div>
            <HeaderInfo appLocation={appLocation} />

            
            <ul >
              {
                appLocation.residents?.map(location => (
                  <ResidentsInfo url={location} key={location} />
                ))
              }
            </ul>
            
          </>


        )
      }



    </div>

  )
}

export default App
