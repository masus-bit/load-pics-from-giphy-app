import * as React from 'react'
import { Properties } from '../header/header'

const Tags=(props:Properties)=>{
    const {tags, pictures}=props
    return(
        <React.Fragment>

        <div className="tags-container">
        {(tags as any).map((it:any,i:any)=>{
            return(
                <div className="tag-block">
                    <p className="tag-text">{it}</p>
                    {(pictures as any).map((item:any,index:any)=>{
                       return it===item.tag?<img src={item.data} alt="" className="picture"/>:null
                    })}
                
                </div>
            )
        })}
        </div>

        </React.Fragment>
    )
}
export default Tags