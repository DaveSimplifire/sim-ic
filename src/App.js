import { useState } from 'react';
import Header from './components/Header';
import Docs from './components/Docs'

function App() {

  const [docs, setDocs] = useState([
    {
        id: 1,
        name: "Employment Contract",
        date_created: "2022/01/06" 
    },
    {
        id: 2,
        name: "Non Disclosure Agreement",
        date_created: "2022/01/08" 
    },
    {
        id: 3,
        name: "Purchase Order",
        date_created: "2022/01/012" 
    },
  ]
)

// Delete Doc
const deleteDoc = (id) => {
  setDocs(docs.filter((doc) => doc.id !== id ))
}

  return (
    <div className="container">
      <Header title='Documents' />
      <Docs docs={docs} onDelete={deleteDoc} />
    </div>
  )
  }

export default App
