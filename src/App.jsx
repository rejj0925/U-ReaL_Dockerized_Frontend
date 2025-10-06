import { useState } from 'react'

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
    <div className='flex flex-col bg-purple-500 w-screen h-screen'>
      <div className='self-center text-5xl m-5 border-2 p-12'>
        Welcome to U-Real
      </div>
      <form 
        className='flex flex-row gap-5 border-2 justify-center mx-auto p-5'
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder='Enter the URL here' 
          className='p-1 border-2 rounded-md border-black min-w-96'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          type='submit'
          className='bg-[url(./assets/icon-128.png)] bg-cover border-black border-2 p-5 rounded-md'
        />
      </form>

      {result && (
        <div className=" bg-white text-black rounded-md border mx-auto self-center my-5 p-5">
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
  )
}

export default App
