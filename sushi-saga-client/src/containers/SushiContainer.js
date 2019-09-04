import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let displaySushi = props.sushiArray.slice(props.startNum, props.startNum + 4)

  // let handleClick = (e) => {
  //   let sushi = e.target
  //   sushi.eaten ? null : sushi.eaten = true
  //   console.log(sushi.eaten)
  // }
  return (
    <Fragment>
      <div className="belt">
        {
          displaySushi.map(sushi => <Sushi key={"sushi" + sushi.id} sushi={sushi} handleClick={props.handleClick} />)
        } 
        <MoreButton moreClick={props.moreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer