import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const AppShowVerses = () => {

const [categories, setCategories] = useState(['king'])

const onAddCategory=( newCategory)=>{
   
    if( categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
}

  return (
    <>
        <h1>AppShowVerses</h1>
        <AddCategory 
            onNewCategory = {value=> onAddCategory(value)}
        />
            {categories.map(category => 
            <GifGrid  
                key={category} 
                category={category} />
        )
            }
    </>
  )
}
