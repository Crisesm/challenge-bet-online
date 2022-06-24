import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { API_HOST } from "../../constants.js"
import { useDispatch } from "react-redux"
import { SET_GAMES_DATA } from "../../Redux/Actions/action"
import CircularProgress from '@mui/material/CircularProgress'
import GamesList from './Components/GamesList/GamesList'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'



const Home = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getPersonFromApi = () => {
    let request = axios.get(
       API_HOST + "/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/d543204847b3d9896f0ce15d244bb89160fe0f86/games.json"
    )
    request.then((response) => {
      if (response.data) {
        console.log(response.data)
        dispatch({ type: SET_GAMES_DATA, payload: response.data })
        setLoading(false)
      } else {
        setError(true)
      }
    }).catch(error => {
      setError(true);
      setLoading(false)
    }
    )
  }

 

  useEffect(() => {

    getPersonFromApi()

  });

  return (
    <div>
      <div>
        <Header/>
        {loading ?
          <div className='container-item-home'>
             <CircularProgress />
          </div>
          :
          (error ?
            <p>error! something went wrong ;(</p>
            :
            <div>
              <GamesList/>
            </div>
          )
        }
        <Footer/>
      </div>
    </div>
  )
}
export default Home;