export const CounterButton = (props) => {
  const {name,onClick,className} = props
  
  return(
    <button className={className} onClick={onClick}>{name}</button>
  )
}