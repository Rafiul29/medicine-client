

const SectionTitle = ({title,subtitle}) => {
  return (
    <div className="text-center space-y-2 ">
      <h3 className='text-xl  text-cyan-400 tracking-wider'>{title}</h3>
      <h2 className='text-2xl font-bold tracking-wider'>{subtitle}</h2>
    </div>
  )
}

export default SectionTitle