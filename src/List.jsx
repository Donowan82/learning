import { useState } from 'react'
export default function List({words}) {
    const [sortedWords, setSortedWords] = useState(words);
    const sortdWords = () => {
        const sorted = [...sortedWords].sort();
        setSortedWords(sorted);
      }
    return (
        <>
        <h1>Массив слов</h1>
        <ul>
          {sortedWords.map(word => <li key={word}>{word}</li>)}
        </ul>
        <button className='virtex' onClick={sortdWords}>Сортировать</button>
        </>
    )
}