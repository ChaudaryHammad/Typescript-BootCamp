


type BoxProps = {
    heading:string,
    count:number,
    func1:()=>void,
    children:React.ReactNode
}

const Box = ({heading,count,func1,children}:BoxProps) => {
   
  return (
<>
<div>Box</div>
    <h1>{heading}</h1>
    <p>{count}</p>
    <button onClick={()=>{
        func1()
    
    }}>click me</button>

    <p>{children}</p>
    
</>
  )
}

export default Box