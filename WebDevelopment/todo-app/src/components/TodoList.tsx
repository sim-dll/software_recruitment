import { TodoItem } from './TodoItem'

export function TodoList({ items, toggleDone, onDelete }: any) {

  if (items.length == 0) {
    return <p className="text-gray-400 text-center py-3 text-sm">Nessuna task per ora</p>
  }

  return (
    <div className="mt-2">
      {items.map((it: any) => (
        <TodoItem 
          key={it.id} 
          item={it} 
          toggleDone={toggleDone} 
          elimina={onDelete} 
        />
      ))}
    </div>
  )
}
