const Home = () => {
  return (
    <div>
      <main></main>
    </div>
  )
}

export default Home

// 'use client'
// import Image from 'next/image'
// import { client } from '@/lib/api-client'
// import { useState } from 'react'

// export default function Home() {
//   const [message, setMessage] = useState('Пусто')
//   const fetchServerHello = async () => {
//     const fetchData = async () => {
//       const res = await client.api.hello.$get()
//       if (res.ok) {
//         const data = await res.json()
//         setMessage(data.message)
//       }
//     }
//     fetchData()
//   }
//   return (
//     <div>
//       <main>
//         <div>{message}</div>
//         <button onClick={fetchServerHello}>Запрос к серверу</button>
//       </main>
//     </div>
//   )
// }
