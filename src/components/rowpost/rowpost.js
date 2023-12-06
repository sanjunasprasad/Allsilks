import React from 'react'
import { useEffect,useState } from 'react'
import YouTube from 'react-youtube';
import './rowpost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function Rowpost(props) {

  const [movies, setmovies] = useState([])
  const [urlId,setUrlId]=useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setmovies(response.data.results)
    }).catch(err=>{
      alert(err)
  })
  },[])


//autoplay
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };


  //video from youtube
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        if(response.data.results.length!==0)
        {
            setUrlId(response.data.results[0])
        }else{
            console.log(response.data)
        } 
    })
  }

  return (
    <div className='row'>
              <h2>{props.title}</h2>
              <div className='posters'>
                            {movies.map((obj)=>
                            <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                            )}
              
              </div>
              {urlId &&  <YouTube videoId={urlId.key} opts={opts}/>}   
    </div>
  )
}

export default Rowpost
