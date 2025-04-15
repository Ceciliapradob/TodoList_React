import { getYearTasks } from "../helpers/getYearTasks"

const Year = ({ tasks }) => {
  const tasksYear = getYearTasks(tasks)

  return (
    <section className="p-4 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-white rounded-lg">
      {
        tasksYear.map(item => (
          <div
            key={item.id}
            className="border border-white/10 rounded-xl bg-white/10 backdrop-blur-md p-2 text-left mb-2 flex justify-between gap-2 shadow hover:shadow-md transition duration-300"
          >
            {/* Año */}
            <div className="bg-white/10 border border-white/20 p-2 rounded-md min-w-[98px] text-center">
              <span className="text-3xl font-bold text-white">{item.year}</span>
            </div>

            {/* Tareas */}
            <div className="flex flex-wrap gap-2 items-center justify-end grow">
              {
                item.tasks.map(task => (
                  <span
                    key={task.id}
                    className="bg-purple-500/30 text-white border border-purple-300 px-2 py-1 rounded-full text-sm max-w-[98px] truncate"
                    title={task.tasks}
                  >
                    {task.tasks}
                  </span>
                ))
              }
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Year
