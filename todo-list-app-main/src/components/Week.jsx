import { getWeekTasks } from "../helpers/getWeekTasks"

const Week = ({ tasks }) => {
  const weekTasks = getWeekTasks(tasks)

  return (
    <section className="p-4 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-white">
      {
        weekTasks.map(item => (
          <div
            key={item.id}
            className="border border-white/10 rounded-xl bg-white/10 backdrop-blur-md p-2 text-left mb-2 flex justify-between gap-2 shadow hover:shadow-md transition duration-300"
          >
            {/* Fecha */}
            <div className="bg-white/10 border border-white/20 p-2 rounded-md min-w-[78px] text-center">
              <span className="text-sm uppercase font-semibold tracking-wide text-purple-200">{item.day}</span>
              <div className="flex justify-center items-center mt-1">
                <span className="text-3xl font-bold text-white">{item.numDay}</span>
                <span
                  style={{ writingMode: "vertical-lr" }}
                  className="text-xs font-light text-gray-300 ml-1"
                >
                  {item.month}
                </span>
              </div>
            </div>

            {/* Tareas */}
            <div className="flex flex-wrap gap-1 items-center justify-end grow">
              {
                item.tasks.map(task => (
                  <span
                    key={task.id}
                    className="bg-purple-500/30 text-white border border-purple-300 px-2 py-1 rounded-full text-sm max-w-[110px] truncate"
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

export default Week
