import React from 'react'
import PropTypes from 'prop-types'
export default function Rectangle(props) {
  return (
    <div className={props.clsName} style={{height:props.ht, width:props.wd, backgroundColor:props.bgColor,
                  border:props.border, borderRadius:props.borderRd, position:props.pos,
                  margin:props.margin}}>
      <p style={{color:'white',textAlign:'center'}}>{props.word}</p>
      <a className='same' style={{fontSize:'40px',color:'white',position:'absolute',bottom:'0',right:'0'}} href='https:google.com'>
        <ion-icon  name="arrow-forward-circle-outline"></ion-icon>
        </a>
    </div>
  )
}
