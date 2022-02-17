
import React, { useState,useContext, useEffect } from 'react';
import './App.css';
import vid1 from './assets/vid1.mp4'
import vid2 from './assets/vid2.mp4'
import vid3 from './assets/vid3.mp4'
import vid4 from './assets/vid4.mp4'
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import {AnimatedSprite,Stage,Container} from '@inlet/react-pixi'
const BlockContext = React.createContext()
function App() {
  const [current,setcurrent] = useState()
  const value = {
      setcurrent
  }
  return (
    <div className="App">
      <BlockContext.Provider
          value={value}
      >
      <div 
        className='divisioncont'
        style={{
          top:current!=undefined?"-100%":"0%"
        }}
      >
        <Division
          title="Definition"
          vid={[vid3,vid4]}
          details={"Ano nakita nyo sa maikling skit nayon? Makikita natin ang don ang laganap na nangyayari ngayon dito sa mundo na mas kilala sa tawag na climate change.Alam nyo ba na ang climate change ay isang natural na phenomena sa mundo ngunit ng dahil sa mga activitibidad ng mga tao ay mas mapabilis ang proseso nito at nagdudulot ito ng malaking epekto sa ating mundo."}
          type="DEFINITION"
        />
        <Division
          title="Effects"
          vid={[vid1,vid2]}
          details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          type="EFFECTS"
          kind="video"
        />
        <Division
          title="Minigame"
          vid={[]}
          details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          type="MINIGAME"
          
        />
      </div>

      {current=="DEFINITION"?<Definition
      
      />:<></>}
      {current=="EFFECTS"?<Effects
      
      />:<></>}
      {current=="MINIGAME"?<MiniGame
      
      />:<></>}
      </BlockContext.Provider>

    </div>
  );
}

function Division(props) {
  const [isHover,setisHover] = useState()
  const [vidplaying,setVidPlaying] = useState(props.vid[0])
  const {setcurrent} = useContext(BlockContext)
  const[getClick,setgetClick] = useState(false)

  return(<div
    
    className={'division'}
    onClick={()=>{
      setcurrent(props.type)
      
    }}
    
  >
    <h1
      style={{
        fontSize:isHover?"70px":"50px",
        
        
      }}
    >{props.title}</h1>
    <p
      style={{
        top:isHover?"0%":"-100%"
        
      }}
    >
      {props.details}
    </p>
  <video
      width='100%'
      height='100%'
      muted
      onMouseEnter={(e)=>{
        e.target.play()
        setisHover(true)
        
        
      }}
      onPlaying={(e)=>{
        setInterval(()=>{
          if(e.target.currentTime>=5){
            
            if(props.vid[1]==vidplaying){
              setVidPlaying(props.vid[0])
              e.target.play()
              return  
            }
            setVidPlaying(props.vid[1])
            e.target.play()
          }
        },1000)
      }}
      onMouseLeave={(e)=>{
        e.target.currentTime = 0
        setVidPlaying(props.vid[0])
        e.target.pause()
        setisHover(false)
      }}
      src={
        vidplaying
      }
    ></video>
  </div>)
}
function Definition(props){
  const {setcurrent} = useContext(BlockContext)
  const [toDisplay,setToDisplay] = useState("meaning")
  return(<div
    className='block definition'

  >
    <button
      onClick={()=>{
        setcurrent(undefined)
      }}
    >BACK</button>
    {toDisplay=="meaning"?<div
      className='meaning'
    >
        What is Climate Change?
    </div>:<></>}
    {toDisplay=='cause'?<Cause/>:<></>}
    <div
      className='bookmark'
    >

      <div
        onClick={()=>{
            setToDisplay("meaning")
        }}
      >MEANING</div>
      <div
        onClick={()=>{
          setToDisplay("cause")
      }}
      >CAUSE</div>
    </div>


  </div>)
}

function Cause(props){
  useEffect(()=>{
    
  },[])
  return(<div
    className='images'
    
  >
    <div
      className='cause'
    >
      
        <img
          src={pic1}
        />
      
      <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    <div
      className='cause'
    >
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      
        <img
          src={pic2}
        />
      
    </div>
    <div
      className='cause'
    >
      
        <img
          src={pic3}
        />
      
      <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
  </div>)
}
function Effects(props){
  const {setcurrent} = useContext(BlockContext)
  return(<div
    className='block effects'
  >
    <button
      onClick={()=>{
        setcurrent(undefined)
      }}
    >BACK</button>

  </div>)
}
function MiniGame(props) {
  const {setcurrent} = useContext(BlockContext)
  return(<div
    className='block minigame'
  >
    <button
      onClick={()=>{
        setcurrent(undefined)
      }}
    >BACK</button>

  </div>)
}

export default App;
