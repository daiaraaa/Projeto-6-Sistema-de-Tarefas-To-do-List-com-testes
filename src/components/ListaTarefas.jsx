import React, { useState } from 'react';
import './styles.css'

const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [novatarefa, setNovaTarefa] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setNovaTarefa([...novatarefa, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div className="container">
          <h1 className="title">📝Lista de Tarefas</h1>
    
      <input 
        type="text" 
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)} 
        placeholder="Nova tarefa"
      />
    
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {novatarefa.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
