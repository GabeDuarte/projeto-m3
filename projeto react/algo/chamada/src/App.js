// useMemo é um 'metodo/função' que usamos para melhorar o desempenho de nossa aplicação por retornar um 'valor' que já foi calculado na primeira inicialização, como uma 'memoria cache'.





import React, {useState, useEffect, useMemo, useCallback} from 'react'
import './App.css'

function App(){
  const [chamada, setChamada] = useState(['Gabriel', 'Marcos', 'Luana', 'Vanessa', 'David']);
  const [input, setInput] = useState('');
  const [titulo, setTitulo] = useState('Chamada - Blue turma 02')
  const totalAlunos = useMemo(()=> chamada.length, [chamada]);

  useEffect(()=> {localStorage.setItem('alunos', JSON.stringify(chamada))}, [chamada]);
  useEffect(()=>{const chamadaStorage = localStorage.getItem(chamada)
    if (chamadaStorage){
      setChamada(JSON.parse(chamadaStorage))
    }
  
  }, [] );

  const handleAdd = useCallback(()=>{
    setChamada([...chamada, input])
    setInput('')
  })

  return (
    <body>
    <div>
      <h1>{titulo}</h1>
      <h3>A turma tem {totalAlunos} alunos.</h3>
      <div className='lista'>
        <ul>
          <h1>Alunos:</h1>
          {chamada.map((aluno)=> (
            <li key={aluno}>{aluno}</li>
          ))}
        </ul>
        <div className='input'>
          <input placeholder='nome do aluno' type='text' value={input} onChange={(a)=> setInput(a.target.value)}/>
          <button type='button' onClick={handleAdd}>Cadastrar aluno</button>
        </div>
      </div>
    </div>
    </body>
  )

}

export default App;