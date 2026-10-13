import { useState } from 'react'

export function TodoInput({ onAdd }: any) {
  const [testo, setTesto] = useState('')

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (testo.trim() === '') return;

    // if (testo == "") alert("inserisci testo");
    onAdd(testo);
    setTesto('');
  }

  return (
    <form onSubmit={handleAdd} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Cosa c'è da fare?"
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium"
      >
        Aggiungi
      </button>
    </form>
  );
}
