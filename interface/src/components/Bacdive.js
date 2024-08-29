import React from 'react'
import data from '../data/bakteri.json'
import { Link } from 'react-router-dom'

const Bacdive = () => {
  return (
    <div>
        <h2>Name and taxonomic classification</h2>
        {/* Bacdive */}
        <p>List Bacteria</p>
        <ul>
        {data.map((category, index) => (
          <li key={index}>
            <Link to={`/bacdive/${category.nama}`}>{category.nama}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bacdive