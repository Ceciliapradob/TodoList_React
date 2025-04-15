import { useState } from "react"
import Text from "../components/icons/Text"

const Form = ({ dateM, tasks, setTasks }) => {
  const [val, setVal] = useState("")

  const handleInput = (e) => {
    e.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      date: dateM,
      tasks: val,
      done: false
    }

    setTasks([...tasks, newTask])
    setVal("")
  }

  return (
    <section className="max-w-[450px] m-auto my-3 px-4">
    <div className="border border-white/30 rounded bg-white/10 backdrop-blur-sm flex items-center p-2">
      <span className="text-white mr-2"><Text/></span>
      <form onSubmit={handleInput} className="w-full">
        <input 
          className='w-full bg-transparent outline-none placeholder-white/70 text-white'
          type="text" 
          placeholder='Agregar una tarea...'
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      </form>
    </div>
  </section>
  
  )
}

export default Form