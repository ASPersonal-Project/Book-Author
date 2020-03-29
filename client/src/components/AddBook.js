import React,{useState} from 'react'
import {getAuthorQuery,addBookMutation,getBooksQuery} from '../queries/queries';
import {useQuery,useMutation} from '@apollo/react-hooks';




const AddBook = ()=> {
    const [formData,setFormData] = useState({name:'',genre:'',authorId:''})
    const {data,loading} = useQuery(getAuthorQuery);
    const [addBook,{data:dataR}] = useMutation(addBookMutation);
    //console.log(dataR);

    const {name,genre,authorId} = formData;
        const displayAuthor = () => {
            if(loading){
                return <option>Loading Authors...</option>
            }else{
                return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
            }
        }
        
        const onChange = (e) =>{
            setFormData({...formData,[e.target.name]:e.target.value})
        }

        const onSubmit = (e) => {
            e.preventDefault()
            //console.log(formData);
            addBook({variables:{name:name,genre:genre,authorId:authorId},refetchQueries:[{query:getBooksQuery}]})
        }
        
     
    return (
        <div>
            <form id="add-book" onSubmit={onSubmit}>
                <div className="field">
                    <label>Book name</label>
                    <input type="text" onChange={onChange} name="name" value={name}/>
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input type="text" onChange={onChange} name="genre" value={genre}/>
                </div>
                <div className="field">
                    <label>AuherId</label>
                    <select name="authorId" onChange={onChange} value={authorId}>
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
