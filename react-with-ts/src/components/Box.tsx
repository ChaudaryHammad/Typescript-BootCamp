

type BoxProps = {
    heading:string,
    count:number,
    func1:()=>void
}

const Box = ({heading,count,func1}:BoxProps) => {
   
  return (
<>
<div>Box</div>
    <h1>{heading}</h1>
    <p>{count}</p>
    <button onClick={()=>{
        func1()
    
    }}>click me</button>
    
</>
  )
}

export default Box