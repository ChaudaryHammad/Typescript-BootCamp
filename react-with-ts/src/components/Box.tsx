

type BoxProps = {
    heading:string,
    count:number
}

const Box = ({heading}:{heading:string}) => {
  return (
<>
<div>Box</div>
    <h1>{heading}</h1>
</>
  )
}

export default Box