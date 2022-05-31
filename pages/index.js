import Head from 'next/head'
import GetJokes from '../component/GetJokes'

export default function Home() {
  return (
     
    <div className="homepage">
      <h1><span>SILLY</span> JOKES INTEGRATED WITH API</h1>
      <GetJokes />
    </div>
  )
}
