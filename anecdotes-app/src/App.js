import React, {useState } from "react";

//Main App Component
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  //initial state
  const [selected, setSelected] = useState(0)
  const [voteArr, setVotes] = useState([...Array(anecdotes.length).fill(0)])
  const setRandomAnecdote = () => {
    const ranNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(ranNum)
  }
 
  const voteHandler = () => {
    //copy the last state of voteArr
    const voteArrCopy = [...voteArr]
    //Get current anecdotes index and add 1
    voteArrCopy[selected] += 1
    //set the new vote array state
    setVotes(voteArrCopy)
  }
  console.log(voteArr)
  //get the most votes
  let highestVote = 0
  let highestIndex
  for (let i = 0; i < voteArr.length; i++){
    if (voteArr[i] > highestVote) {
      highestVote = voteArr[i]
      highestIndex = i
    }
  }
  console.log(highestIndex)
  console.log(highestVote)
  
  return (
    <div>
      <h1>Anecdotes of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteArr[selected]} votes</p>
      <button onClick={voteHandler}>Vote</button>
      <button onClick={setRandomAnecdote}>Next Anecdotes</button>
      <div>
        <h2>Anecdotes with most Votes</h2>
        <p>{anecdotes[highestIndex]}</p>
        <p>has { highestVote} votes</p>
      </div>
    </div>
  )
}

export default App;