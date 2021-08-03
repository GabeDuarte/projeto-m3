import React, {useState, useEffect} from 'react'
import './App.css'


function App(){
  const [chamada, setChamada] = useState(['Gabriel', 'Marcos', 'Luana', 'Vanessa', 'David']);
  const [input, setInput] = useState('');

  useEffect(()=> {localStorage.setItem('alunos', JSON.stringify(chamada))}, [chamada]);
  useEffect(()=>{const chamadaStorage = localStorage.getItem(chamada)
    if (chamadaStorage){
      setChamada(JSON.parse(chamadaStorage))
    }
  
  }, [] );

  function handleAdd(){
    setChamada([...chamada, input])
    setInput('')
  }

  return (
    <>
    <div className='main'>
      <ul>
        <h1>Alunos da blue, turma 2:</h1>
        {chamada.map((aluno)=> (
          <li key={aluno}>{aluno}</li>
        ))}
      </ul>
      <div className='input'>
        <input placeholder='nome do aluno' type='text' value={input} onChange={(a)=> setInput(a.target.value)}/>
        <button type='button' onClick={handleAdd}>Cadastrar aluno</button>
      </div>
    </div>
    </>
  )

}

export default App;