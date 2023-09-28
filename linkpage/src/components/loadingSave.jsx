const LoadingSave = ({size = "26px", borderSize = "4px", spinColor = "#FF4A00"}) => {
  const spinner = {
    position:"relative",
    width:size,
    height:size,
    border:borderSize + " solid #F2F4F7",
    borderTop:borderSize + " solid " + spinColor,
    borderRadius:"50%",
    animation:"spin 1s linear infinite"
  }
  return (
    <div style={spinner} />
  )
}

export default LoadingSave;