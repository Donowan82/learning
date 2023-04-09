import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  const words = ["Эвкалипт", "Банксия", "Каллистемон", "Акация", "Телопея", "Гревиллея", "Анигозантос", "Валенбергия строгая", "Ксерохризум"];
 

  const fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi', 'lemon', 'pear', 'grape', 'watermelon', 'pineapple']


  const names = [
    'Кирилл',
    'Георгий',
    'Борис',
    'Виктория',
    'Дарья',
    'Егор',
    'Захар',
    'Жанна',
    'Абрам',
    'Ирина'
    
  ];


  const autoList = ['Maserati', 'Audi', 'Nissan', 'BMW', 'Ford', 'Skoda', 'Toyota', 'Opel'];



  const city = ['Луганск', 'Киев', 'Львов', 'Николаев', 'Запорожье', 'Хмельницкий', 'Полтава', 'Одесса'];


  const games = ['Arma 3', 'GTA 5', 'Atlas', 'New World', 'Rust', 'Rainbow Six Sage', 'Anno 1800'];



  return (
    <div className="App">
      < List words={words}/>
      < List words={fruits}/>
      < List words={names}/>
      < List words={autoList}/>
      < List words={city}/>
      < List words={games}/>
    </div>
  )
}

export default App
