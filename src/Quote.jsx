import React from 'react'
import './Quote.css'
import { useState } from 'react'
const Quote = () => {
  var quotes=[]
  const [quote,setQuote]=useState({
    text:"Hardwork is the key to success",
    author:"Aristotle"
  })
  async function loadquotes(){
    const data=await fetch("https://type.fit/api/quotes")
    quotes=await data.json();
    quotes[quotes.length-1].author='Aristotle,text-fit';
  
  }
function newQuote(){
  var x=Math.floor(Math.random()*quotes.length);
  if(x>quotes.length-1){
    x=1
  }
  else if(x<0){
    x=1
  }
  setQuote(quotes[x]);
}
loadquotes();
  return (
    <div className='main'>
      <h2>{quote?quote.text:"Hardwork is the key to success"}</h2>
      <div className="second">
      <p>- {quote?quote.author.split(',')[0]:"Aristotle"}</p>
      <button onClick={newQuote}>Refresh</button>
    </div>
    </div>
  )
}

export default Quote
