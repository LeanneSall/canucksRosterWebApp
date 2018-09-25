import  React from 'react';


const Searchbox = ({searchField, searchChange}) => {
    
    return (
        <div className="pa2">
            
            <input type='search' 
            placeholder='find' 
            className=' pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}
            />
        
        </div>
        )
}

export default Searchbox;