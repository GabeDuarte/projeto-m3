import React, {useState, useEffect, useMemo, useCallback} from 'react';
import './App.css';

function App(){
  // tarefas  -> nome do state
  // setTarefas -> função para atualizar o valor do state
  const [tarefas, setTarefas] = useState([]);

  const [nome, setNome] = useState('To Do List - 03/08/2021');

  const [input, setInput] = useState('');

  useEffect(()=> {localStorage.setItem('tarefas', JSON.stringify(tarefas))}, [tarefas]);
  useEffect(()=> {const tarefasStorage = localStorage.getItem('tarefas'); 

  if (tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage));
  }
}, []);

  const handleAdd = useCallback(()=>{
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);

  return (
    <>
    <div classname='main'>
      <ul>
      <h2>{nome}</h2>
        {tarefas.map((tarefa)=>(
          <li key= {tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>Você tem: {totalTarefas} tarefas</strong>
      <br></br>
      <br></br>
      <input placeholder='Insira novas tarefas' type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Adicionar</button>
    </div>
    </>

  )
}



export default App;