import { Properties, Arra } from "./components/header/header";

export const group=(pictures:Properties)=>{
const tagArr=(pictures as any).map((it:any,i:number)=>{
return it.tag
})
const newArray = tagArr.filter((it:any, i:any)=> {
    return tagArr.indexOf(it) == i;
});
return newArray
}
