import React from 'react'
import './HomePage.css'
import oq from '../assets/OQ.png'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const templates=['Subscription Model','One-Time Purchase','Service Works']
  return (
    <>
    <div className='home-container'>
        <img width={'200px'} src={oq} alt="" />
        <h1>Mailix</h1>
        <h2>Choose your option</h2>
        <div className='options-container' >
            <button className='option'>
                <h3 style={{color:'white'}}>Create a new template</h3>
            </button>
            <button className='option'>
                <h3 style={{color:'white'}}>Edit your templates</h3>
            </button>
        </div>
        <h1>Select template</h1>
        <div className='templates'>
            {templates.map(temp=>(
                <button className='user-template'>
                <Link to={'/mailsender'}
                state={{ template: temp }}
                ><h2>{temp}</h2></Link>
            </button>))
            }
        </div>
        </div>    
    </>
  )
}

export default HomePage