export function TodoItem({ item, toggleDone, elimina }: any) {
  return (
    <div className="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-200 rounded mb-2">
      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          checked={item.completed} 
          onChange={() => toggleDone(item.id)}
          className="cursor-pointer"
        />
        <span className={item.completed ? "line-through text-gray-400" : "text-gray-700"}>
          {item.text}
        </span>
      </div>
      
      <button 
        onClick={() => elimina(item.id)}
        className="text-red-500 hover:text-red-700 text-sm font-semibold px-1"
      >
        Elimina
      </button>
    </div>
  )
}
