type backgroundHeaderProps = {
    backgroundImage: string
}
const BackgroundHeader = ( {backgroundImage} : backgroundHeaderProps ) => {
  return (
    <div className="w-screen max-h-1/5 px-15">
      <img src={backgroundImage} className="h-screen w-screen"/>
    </div>
  )
}

export default BackgroundHeader