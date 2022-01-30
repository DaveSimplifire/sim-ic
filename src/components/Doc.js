import { FaTimes } from 'react-icons/fa';

const Doc = ({ doc, onDelete }) => {
  return (
    <div className='task'>
        <h3>
            {doc.name} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(doc.id)} />
        </h3>
        <p>Created on: {doc.date_created}</p>
  </div>
  )
}

export default Doc
