import React from 'react'
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';


const getAuthorQuery = gql`
{
    authors{
        name
        id
    }
}
`

const AddBook = ()=> {
    const {data,loading} = useQuery(getAuthorQuery)
        const displayAuthor = () => {
            if(loading){
                return <option>Loading Authors...</option>
            }else{
                return data.authors.map(author => <option key={author.id}value={author.id}>{author.name}</option>)
            }
        }
     
    return (
        <div>
            <form id="add-book">
                <div className="field">
                    <label>Book name</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>AuherId</label>
                    <select>
                        <option>Select author</option>
                        {displayAuthor()}
                    </select>
                </div>
                <button>+</button>
            </form>
            
        </div>
    )
}

export default AddBook
