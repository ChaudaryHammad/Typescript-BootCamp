

type BoxProps = {
    heading:string,
    count:number
}

const Box = ({heading,count}:BoxProps) => {
  return (
<>
<div>Box</div>
    <h1>{heading}</h1>
    <p>{count}</p>
</>
  )
}

export default Box