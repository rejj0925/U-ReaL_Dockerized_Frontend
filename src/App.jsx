import { useState } from 'react'
import githubLogo from './assets/github-mark.png'

function App() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://u-real.site/check-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error checking URL:", error)
    }
  }

  return (
    <div className='flex flex-row backdrop-blur-md bg-gradient-to-b from-gray-800 via-purple-300 to-purple-700 w-screen h-screen font-normal font-mono'>
      {/*Sidebar*/}
      <div className='w-48 bg-gray-900 bg-opacity-70 h-screen flex flex-col text-white backdrop-blur-md whitespace-nowrap shadow-md shadow-purple-300'>
        <div className='p-5 border-b border-gray-600 text-center'>
          <h1 className='text-2xl font-bold whitespace-nowrap cursor-default'>U-ReaL</h1>
        </div>
        <nav className='flex-1 p-1 text-xs italic'>
          <a href='https://chromewebstore.google.com/detail/iabipfaojgpkigjgddelbkhkdaibfhnd?utm_source=item-share-cb' target="_blank" className='flex justify-center p-1 hover:shadow-md bg-transparent hover:scale-90 transition-all duration-300 ease-in-out'>
            Install U-ReaL Extension
          </a>
        </nav>
        <div className='p-4 border-t border-gray-600 flex flex-row justify-center'>
          <a href="https://github.com/rejj0925/U-ReaL_Dockerized_Frontend" target="_blank" className=' w-10 h-10 flex items-center p-1 rounded bg-opacity-10'>
            <img src={githubLogo} alt="GitHub" className='filter invert hover:shadow-lg bg-slate-300 rounded-full hover:scale-75 hover:shadow-white transition-all duration-300 ease-in-out'/>
          </a>
        </div>
      </div>
      {/*Sidebar*/}



      <div className='flex-1 flex flex-col'>
        <div className='self-center text-5xl m-5 p-12 whitespace-nowrap cursor-default'>
          Welcome to U-ReaL
        </div>
      <form 
        className='flex flex-row gap-5 border-2 justify-center mx-auto p-5 backdrop-blur-lg bg-white bg-opacity-25 rounded-md'
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder='Enter the URL here' 
          className='p-2 border-2 rounded-md border-black min-w-96'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          type='submit'
          className='bg-[url(./assets/icon-128.png)] bg-cover border-black border-2 p-5 rounded-md hover:scale-75 hover:shadow-xl hover:shadow-purple-500 transition-all duration-300 ease-in-out'
        />
      </form>

      {result && (
        <div className="bg-white text-black rounded-md border mx-auto self-center my-5 p-5 transition-all duration-500 ease-in-out">
          <table className='text-justify self-center m-auto'>
            <tbody className='[&>tr]:border-b-2 [&>tr]:border-black [&>tr>td]:px-3 [&>tr>td]:capitalize'>
            <tr className='p-5'>
              <td>Status:</td>
              <td>{result.status}</td>
            </tr>
            <tr className='p-5'>
              <td>Message:</td>
              <td>{result.message}</td>
            </tr>
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  )
}

export default App
