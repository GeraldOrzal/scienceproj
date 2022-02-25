
import React, { useState,useContext, useEffect,useRef } from 'react';
import './App.css';
import vid1 from './assets/vid1.mp4'
import vid2 from './assets/vid2.mp4'
import vid3 from './assets/vid3.mp4'
import vid4 from './assets/vid4.mp4'
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import earth from './assets/Planet0.png'
import sun1 from './assets/sun/Sun_00000.png'
import sun2 from './assets/sun/Sun_00001.png'
import sun3 from './assets/sun/Sun_00002.png'
import sun4 from './assets/sun/Sun_00003.png'
import sun5 from './assets/sun/Sun_00004.png'
import sun6 from './assets/sun/Sun_00005.png'
import sun7 from './assets/sun/Sun_00006.png'
import sun8 from './assets/sun/Sun_00007.png'
import sun9 from './assets/sun/Sun_00008.png'
import sun10 from './assets/sun/Sun_00009.png'
import sun11 from './assets/sun/Sun_00010.png'
import sun12 from './assets/sun/Sun_00011.png'
import sun13 from './assets/sun/Sun_00012.png'
import sun14 from './assets/sun/Sun_00013.png'
import sun15 from './assets/sun/Sun_00014.png'
import eye from './assets/eye.png'
import eye1 from './assets/eye1.png'
import eye2 from './assets/eye2.png'
import eyewhite from './assets/eyewhite.png'
import behind from './assets/behind.png'
import man from './assets/first.jpg'
import back from './assets/back.png'
import sky from './assets/Sky.png'
import bus from './assets/bus.png'
import roads from './assets/road&lamps.png'
import house from './assets/house.png'
import human0 from './assets/human/human.png'
import human1 from './assets/human/human0.png'
import human2 from './assets/human/human1.png'
import human3 from './assets/human/human2.png'
import human4 from './assets/human/human3.png'
import human5 from './assets/human/human4.png'
import human6 from './assets/human/human5.png'
import human7 from './assets/human/human6.png'
import human8 from './assets/human/human7.png'

import human0R from './assets/human/humanR.png'
import human1R from './assets/human/human0R.png'
import human2R from './assets/human/human1R.png'
import human3R from './assets/human/human2R.png'
import human4R from './assets/human/human3R.png'
import human5R from './assets/human/human4R.png'
import human6R from './assets/human/human5R.png'
import human7R from './assets/human/human6R.png'
import human8R from './assets/human/human7R.png'
import busstop from './assets/bustop.png'
import factory from './assets/factory.png'
import {AnimatedSprite,Stage,Container, Sprite,useTick} from '@inlet/react-pixi'
const sunSprites = [sun1,sun2,sun3,sun4,sun5,sun6,sun7,sun8,sun9,sun10,sun11,sun12,sun13,sun14,sun15]
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
          details={"Do you ever wonder why is it all happening, stronger storm are starting to form and many more natural calamitites that are going stronger and stronger as time pass by.Here in this part, it can give you the definition of climate change and what are its causes."}
          type="DEFINITION"
        />
        <Division
          title="Effects"
          vid={[vid1,vid2]}
          details={"This part will help you know what are the effects of climate change and how it really affects us."}
          type="EFFECTS"
          kind="video"
        />
        <Division
          title="Minigame"
          vid={[]}
          details={"I have some minigame for you that you can enjoy, where it can give you some tips that will help to slow down the process of climate change. "}
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
  const [isClick,setisClick] = useState(false)
  return(<div
    className='block definition'
    style={
      {
        backgroundImage:isClick?"none":"",
        backgroundColor:isClick?"white":"#191919"
      }
    }
  >
    <button
      onClick={()=>{
        setcurrent(undefined)
      }}
      style={{
        color:isClick?"black":"white"
      }}
    >BACK</button>
    {toDisplay=="meaning"?<Meaning/>:<></>}
    {toDisplay=='cause'?<Cause/>:<></>}
    <div
      className='bookmark'
    >

      <div
        onClick={()=>{
            setisClick(false)
            setToDisplay("meaning")
        }}
      >MEANING</div>
      <div
        onClick={()=>{
          setisClick(true)
          setToDisplay("cause")
      }}
      >SOME CAUSES</div>
    </div>


  </div>)
}
let i = 0
function Earth(props) {
  
  const [earthScale,setEarthScale] = useState({
    scale:[1,1],
    position:[0,0],
    zIndex:0
  })
  useTick((delta)=>{
    i += 0.005 * delta * delta;
    
    setEarthScale(prev=>{
      return{
          ...prev,
          position:[Math.sin(i) * 350,0]
      }
    })
    
    
  })
  return(
        <Sprite
                
                position={earthScale.position}
                image={earth}
                zIndex={0}
               
                
              />
  )
}
function Meaning(props){
  
  const [sunScale,setSunScale] = useState(false)

  
  return(
    <div
      className='meaning'
    >

        <h1>What is Climate Change?</h1>
        <p>
        Climate change is a change in the usual weather found in a place. This could be a change in how much rain a place usually gets in a year. Or it could be a change in a place's usual temperature for a month or season.

        Climate change is also a change in Earth's climate. This could be a change in Earth's usual temperature. Or it could be a change in where rain and snow usually fall on Earth.

Weather can change in just a few hours. Climate takes hundreds or even millions of years to change. (NASA)
    But because of our rampant actions, it results in speeding up the process of climate change and now we experience its devastating effects
        </p>
        <div>
            <p
              style={{
                display:sunScale?"block":"none"
              }}
              onMouseOver={()=>{
                setSunScale(true)
              }}
              
            >
              
            By the time the energy reaches the Earth, after traveling 150 million kilometers, or 93 million miles, it has diminished to 1,370 watts per square meter at the top of the atmosphere directly facing the sun.
            </p>
        </div>
        
        <Stage
          options={{
            height:"20%",
            width:"20%",
            backgroundAlpha:0
          }}
          
        >
          <Container
            position={[250,250]}
          >
            <Earth/>
            <AnimatedSprite
                images={sunSprites}
                animationSpeed={0.1}
                initialFrame={0}
                isPlaying={true}
                interactive={true}
                zIndex={1}
               mouseover={()=>{
                 setSunScale(true)
               }}
               mouseout={()=>{
                setSunScale(false)
               }}

            />
            
          </Container>
          
        </Stage>
    </div>

  )
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
          <h1>Too much consumption</h1>
          Because of our too much consumption, it also creates a tons of tons of trash that we all can see in areas like landfill where it emits mixtures of gasses that soon will reach our atmosphere and eventually block the sun ray from coming out.
          
          
      </div>
    </div>
    <div
      className='cause'
    >
    <div>
        <h1>Gasses emits from factories</h1>
        We all know how massive the gasses are that came from the factories and usually these kind of factories are the one that generates energy. These factories burns fossil fuels that produces carbon dioxide and it can cause a greenhouse effect in our environment. 
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
        <h1>Transportation</h1>
          Cars and other known transportation produces gasses from burning fossil fuels that we all know produce carbon dioxide.
          Imagine how many vehicles roaming the earth that produces this kind of gas. According to ClientEarth, the earth average temperature increased by 1c.
      </div>
    </div>
  </div>)
}
function Effects(props){
  const {setcurrent} = useContext(BlockContext)
  const [changeSprite,setChangeSprite] = useState(true)
  const ref= useRef()
  const stage = useRef()
  const beh = useRef()
  return(<div
    className='block effects'
    style={{
      backgroundColor:changeSprite?"white":"black"
    }}
  >
    <button

      style={{
        color:changeSprite?"black":"white"
      }}
      onClick={()=>{
        setcurrent(undefined)
      }}
    >BACK</button>
    <p>
      Some people especially businessmen do not care about the environment as long as they gain profit while other people perspective only focus on the bright side of their actions without thinking its consequences.
      Use the left mousebutton to see what are the consequences of disregarding our environment.
    </p>
    <Stage
      height={900}
      width={1000}
       options={{
        
        backgroundAlpha:0
      }}

      
      onMouseMove={(e)=>{
        ref.current.x = e.clientX
        ref.current.y = e.clientY
        ref.current.anchor.x = 1
        ref.current.anchor.y = 0.5
        
        
      }}
      onMouseDown={()=>{
        ref.current.play()
        
      }}
      
    >
         <Container
            position={[0,0]}
          >

            <Sprite
              image={man}
              height={900}
              width={1000}
              ref={stage}
            />
          {!changeSprite?<Sprite
              image={behind}
              height={900}
              width={1000}
              ref={beh}
            />:<></>}
            
            
            {changeSprite?<AnimatedSprite
              images={[eye,eye1,eye2]}
              height={200}
              width={500}
              position={[20,20]}
              ref={ref}
              initialFrame={0}
              animationSpeed={0.1}
              
              onFrameChange={(e)=>{
                
                if(e==2){
                  ref.current.stop()
                  
                  
                  
                  setTimeout(()=>{
                    setChangeSprite(false)
                    beh.current.mask = ref.current
                  },500)
                  
                }
              }}
            />:<Sprite
              image={eyewhite}
              height={200}
              width={500}
              ref={ref}
              isMask={true}
              
            />}
            
          </Container>
    </Stage>
  </div>)
}

function Man(props){
  const man = useRef()
  const cont = useRef()
  const sprites = [human0,human8,human7,human6,human5,human4,human3,human2,human1,human0R,human8R,human7R,human6R,human5R,human4R,human3R,human2R,human1R]

  const [orient,setorient] = useState({
    key:"RIGHT",
    ispress:false
  })
  function GetSpriteCenter(sprite){
      return [sprite.width / 2,sprite.height/2] 
  }
  function GetDistance(obj1, obj2){
    return Math.sqrt((Math.pow((obj2.position.x+GetSpriteCenter(obj2)[1])-obj1.position.x,2)+Math.pow(((obj2.position.y-GetSpriteCenter(obj2)[0])-obj1.position.y),2)))
  }
  useEffect(()=>{
    
    props.levels[3].current.visible = false;
    let ispress = false;
    let isEPress= false;
    let isorient = "RIGHT"
    let speed = 6;
    let activePlane="LEVEL1"
    props.IsDone(false)
    document.addEventListener("keydown",(e)=>{
      if(activePlane=="LEVEL1"&&GetDistance(man.current,props.levels[4].current)<=40){
        if(e.key=='e'&&!isEPress){
          props.PressE(true)
          
          isEPress = true;
          
        }
        props.IsNear(true)
        
        
       
      }else{
        props.IsNear(false)
      }  
      if(activePlane=="LEVEL3"&&GetDistance(man.current,props.levels[3].current)<=90){
        props.IsDone(true)
      }
      if(!ispress){

        
          if(e.key=="ArrowRight"){
            setorient(prev=>{
              return{
              ...prev,
              key:"RIGHT"
            }
          }
            )
            man.current.gotoAndPlay(9)
            isorient = "RIGHT" 
            
            
          }else{
            if(e.key=="ArrowLeft"){
              setorient(prev=>{
                return{
                ...prev,
                key:"LEFT"
              }}
              )
    
              man.current.gotoAndPlay(0)
              isorient = "LEFT" 
              
              
            }
          }
          ispress = true
          
      }
      
      if(isorient=="RIGHT"&&e.key=="ArrowRight"){
        
           
        
        if(man.current.position.x >=1000){
          switch (activePlane) {
            default:
            case "LEVEL1":
              props.levels[2].current.visible = false;
              props.levels[4].current.visible = false;
              
              activePlane= "LEVEL2"
              man.current.position.x = 9;  
              
              
              break;
            case "LEVEL2":
              
              props.levels[2].current.visible = false;
              props.levels[3].current.visible = true;
              
              activePlane= "LEVEL3"
              man.current.position.x = 9;  
              break;
            case "LEVEL3":

              
              break;
          }
        
        
        }
        man.current.position.x +=.5 * speed;
      }else{
        if(isorient=="LEFT"&&e.key=="ArrowLeft"){
              switch (activePlane) {
                default:
                case "LEVEL1":
                  if(man.current.position.x >= 9){
                      man.current.position.x -=.5 * speed;
                  }
                  
                  break;
                case "LEVEL2":
                  if(man.current.position.x<=0){
                    props.levels[2].current.visible = true;
                    props.levels[3].current.visible = false;
                    props.levels[4].current.visible = true;
                    activePlane= "LEVEL1"
                    man.current.position.x = 900;
                  }
                  man.current.position.x -=.5 * speed;
                  break;
                case "LEVEL3":
                  if(man.current.position.x<=0){
                    props.levels[2].current.visible = false;
                    props.levels[3].current.visible = false;
                    activePlane= "LEVEL2"
                    man.current.position.x = 900;
                  }
                  man.current.position.x -=.5 * speed;
                  break;
              }
            
              
            
          
        }
      }
    })
    document.addEventListener("keyup",(e)=>{
      
      if(e.key=="ArrowRight"){
        man.current.gotoAndStop(9)
      }else{
        if(e.key=="ArrowLeft"){
          man.current.gotoAndStop(0)
        }
      }
      ispress = false
    })
    
  },[])
  useTick((delta)=>{

  })
  
  return(
    <Container
    
      position={[0,500]}
      ref={cont}
    >
        <AnimatedSprite
          
          images={sprites}
          height={200}
          width={100}
          ref={man}
          
          animationSpeed={0.15}
          interactive={true}
          isPlaying={false}
          onFrameChange={(e)=>{
            if(orient.key=="RIGHT"){
              if(e==17){
                man.current.gotoAndPlay(9)
              }
            }else{
              
              if(e==8){
                
                man.current.gotoAndPlay(0)
              }
            }
          }}
      />    
    </Container>

  )
}
function Bus(props){
  const busref = useRef()
  
  const busspeed = 10;
  let move = true;
  let timeout = false;
  let moveonpause = false;
  let pos;
  // useEffect(()=>{
  //   busref.current.position=[-500,400]
  // },[busref])
  useTick((delta)=>{
    if(props.isStart){
      
      if(move){
        if(busref.current.position.x>=300&&!moveonpause){
          move = false
          
        }

        busref.current.position.x += 0.2  * busspeed* delta;
      }else{
        if(!timeout){
          pos = busref.current.position
          props.Man(false)
          busref.current.position = pos
          setTimeout(()=>{
            move = true
            moveonpause = true;
          },5000)
          timeout = true
        }
        
      }
      
    }
  })
  return(
    <Sprite
        image={bus}
        y={400}
        x={-500}
        width={500}
        height={400}
        ref={busref}
    />
  )
}
function MiniGame(props) {
  const {setcurrent} = useContext(BlockContext)
  const [busstopt,setbusstop] = useState({
    isnear:false,
    start:false
  })
  const level1 = useRef()
  const busStop = useRef()
  const level2 = useRef()
  const dialogue = ["Hi! You are here to help Gerald reached his workplace without doing any actions that can contribute to the climate change. PRESS ARROW KEYS TO MOVE","PRESS E TO WAIT FOR THE BUS","Congratulations!!! You guided Gerald into his destination without using any mode of transportation that uses fossil fuel.If your destination is just a few meters away you can just use a bike or take a walk. ","YOU FAILED"]
  const [diag,setDiag] = useState(dialogue[0])
  const houseref = useRef()
  const [manen,setmanen] = useState(true)
  const factoryref = useRef()
  return(<div
    className='block minigame'
  >
    <button
      onClick={()=>{
        setcurrent(undefined)
      }}
    >BACK</button>
    <Stage
      height={900}
      width={1000}
       options={{
        
        backgroundAlpha:0
      }}
      
    
    > 

      <Container
        
      >
          <Sprite
              image={sky}
              height={800}
              width={1000}
          />
          <Sprite
              image={back}
              height={800}
              width={1000}
          />
          
          <Container
            
          
          >
            <Sprite

            position={[500,200]}
            image={factory}
            height={400}
            ref={factoryref}
            
            width={500}
            />
            
            <Sprite

              position={[-50,200]}
              image={house}
              height={400}
              ref={houseref}
              width={500}
              />
            <Sprite
                position={[0,0]}
                image={roads}
                height={800}
                width={1000}
                ref={level1}
            />
            <Sprite
              image={busstop}
              
              position={[500,260]}
              width={500}
              ref={busStop}
              height={400}
            />

          </Container>
        {
          manen?<Man
          levels = {[level1,level2,houseref,factoryref,busStop]}
          IsDone={(d)=>{
            if(d){
              setDiag(dialogue[2])
            }
          }}
          IsNear={(d)=>{
            setbusstop(prev=>{
              return{
                ...prev,
                isnear:d
              }
            })
            if(d){
              setDiag(dialogue[1])
            }else{
              setDiag(dialogue[0])
            }
          }}
          PressE={(d)=>{
            setbusstop(prev=>{
              return{
                ...prev,
                start:true
              }
            })
          }}
        />  :<></>
        }

        <Bus
          isStart={busstopt.start}
          Man={(d)=>{
            setmanen(d)
            setDiag(dialogue[dialogue.length-1])
          }}

        />
        
              

      </Container>

    </Stage>

    <div
      className='popup'
      style={{
        left:0
      }}


    >
        {diag}   
    </div>
  </div>)
}

export default App;
