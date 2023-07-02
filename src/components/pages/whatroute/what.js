import React from 'react'
import {Link} from 'react-router-dom'
import './what.css'

const What=()=>{
    return(
        <div class="what-div">
            <h1 class="what-head">What is Tabla?
            </h1>
            <p class="what-para">
            The tabla is a pair of  drums that are used in Hindustani classical music. The tabla is made up of two drums, the dayan (the right drum) and the bayan (the left drum). The dayan is smaller and higher-pitched than the bayan, and it is played with the right hand. The bayan is larger and lower-pitched than the dayan, and it is played with the left hand.
            The tabla is a very complex instrument, and it can be used to create a wide variety of sounds. The tabla player uses their hands, fingers, and wrists to create a variety of strokes, each of which has a specific name and sound.
            <br/>
            The tabla is an essential part of Hindustani classical music, and it is used in a variety of other genres, including folk music, film music, and dance music. The tabla is also becoming increasingly popular in Western music, and it is often used in jazz, fusion, and world music.
            The tabla is a very expressive instrument, and it can be used to communicate a wide range of emotions. The tabla player can use the tabla to create a sense of rhythm, melody, and harmony. The tabla can also be used to create a sense of space, time, and movement.
            <br/>
                            The tabla is a very challenging instrument to learn, but it is also a very rewarding instrument to play. The tabla can be used to express oneself in a unique and personal way.
                            The tabla is a very challenging instrument to learn, but it is also a very rewarding instrument to play. The tabla can be used to express oneself in a unique and personal way.
                               <br/>
                                Here are some of the most famous tabla players in the world:


                                Ustad Alla Rakha Khan

                                Ustad Zakir Hussain

                                Pandit Kishan Maharaj

                                Pandit  Swapan Chaudhari

                                Ustad Ahmed Jan Thirakwa

                                These are just a few of the many talented tabla players who have helped to shape the sound of Indian classical music. The tabla is a truly unique and versatile instrument, and it is sure to continue to be an important part of Indian music for many years to come.
                                </p> 
                                <div className='image'>
                                <a href="https://ibb.co/3hpJHNf"><img src="https://i.ibb.co/ggSnCTv/tabla-what.webp" alt="tabla-what" border="0" /></a>

                                </div>
                                       <div className='what-button-div'>
                 <Link to="/"><button class="back" type="button">Back</button></Link>  
        </div>   
      </div>
        
    )
}

export default What