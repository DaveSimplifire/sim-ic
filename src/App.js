import { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Docs from './components/Docs';
import AddDoc from './components/AddDoc';
import { Editor } from '@tinymce/tinymce-react';


function App() {

  const [showAddDoc, setShowAddDoc] = useState(false)

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

// Add Document
const addDoc = (doc) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newDoc = { id, ...doc }
  console.log(newDoc)
  setDocs([...docs, newDoc])
}

// Delete Doc
const deleteDoc = (id) => {
  setDocs(docs.filter((doc) => doc.id !== id ))
}

  return (
    <div className="container">
      <Home />
      <Header 
        onAdd={() => setShowAddDoc 
        (!showAddDoc)} 
        showAdd={showAddDoc}
        />
      {showAddDoc && <AddDoc onAdd={addDoc} />}
      {docs.length > 0 ? (
        <Docs docs={docs} onDelete={deleteDoc} />
      ) : (
        'No Documents to show'
      )}
      <Footer />
    </div>
  )
  }

export default App
