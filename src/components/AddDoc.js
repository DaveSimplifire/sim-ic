
import { useState } from 'react'

const AddDoc = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [date_created, setDateCreated] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    if(!name) {
        alert('Please add a Document Name')
        return
    }
    onAdd({ name, date_created })
    setName('')
    setDateCreated('')
}

  return (
      <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
              <label>Document</label>
              <input 
                type='text' 
                placeholder='Add Document Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div className='form-control'>
              <label>Date Created</label>
              <input 
                type='text' 
                placeholder='Add Date Created'
                value={date_created}
                onChange={(e) => setDateCreated(e.target.value)}              
                   />
          </div>

          <input type='submit' value='Save Document' 
          className='btn btn-block' />

      </form>
  )
}

export default AddDoc;
