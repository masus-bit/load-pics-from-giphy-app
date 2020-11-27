import * as React from 'react'
import {Properties} from '../header/header'
const Main=(props:Properties)=>{
    const {pictures}=props
    console.log(pictures)
return(
    <React.Fragment>

        <div className="main-container">
        {(pictures as any).map((it:any,i:any)=>{
            
            return(
            <div className="pic-block" key={it.data}>
                <img src={it.data} key={it.data} alt="as" className="picture"/>
            </div>
            )
        })}
        </div>

    </React.Fragment>
)

}
export default Main