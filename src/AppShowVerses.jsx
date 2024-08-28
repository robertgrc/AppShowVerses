import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const AppShowVerses = () => {

const [categories, setCategories] = useState(['fear of God','seed of god', 'Mesias'])

const onAddCategory=( newCategory)=>{
    console.log(newCategory)
    setCategories([newCategory, ...categories])
}

  return (
    <>
        <h1>AppShowVerses</h1>
        {/*Listado de Imagenes*/}
        <AddCategory 
            // setCategories={setCategories} 
            onNewCategory = {value=> onAddCategory(value)}
        />
        <ol>
            {categories.map(category => {
                return <li key={category}>{category} </li>
            })}
        </ol>
    </>
  )
}
