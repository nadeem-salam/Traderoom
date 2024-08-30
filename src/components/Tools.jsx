const Tool = () => {
    return (
      <div className='flex justify-between items-center bg-black w-full px-4 py-2'>
        <div className="text-white text-xl flex items-center">
          <span className="text-green-500 font-bold">envato</span>
          <span>market</span>
        </div>
        <div>
          <button className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors">Buy now</button>
        </div>
      </div>
    )
  }
  
  export default Tool;