import { useEffect, useState } from "react";
import axios from 'axios';

function Home(){

    // assigning the API Data in this
    const [book, setBook] = useState([])

    // assigning the searched input Data in this
    const [search, setSearch] = useState([])

    // Fetching API
    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books",{headers : { 'Authorization': 'whatever-you-want' }})

        // store and set data
        .then(res => {
            const output = res.data.books
            setBook(output)
            // console.log(output)
        })

        // If error is there catch it
        .catch(err => {
            if(err.res.status === 404){
                console.log("error")
            }
        })
    },[])

    // to handle the search input and set the searched item
    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        
        if(input.trim() === ''){
            setSearch([])
        } else {
            const searchedName = book.filter(item => item.title.toLowerCase().includes(input))
            setSearch(searchedName)
        }
    }

    return(
        <div>
            <div className="Search">
                <div>
                <input type="text" placeholder="Search Books" onChange={handleChange} />

                {/* to show the searched items */}
                <div className="searched">
                {
                    search.map(item => (
                        <div key={item.id}>
                            <img src={item.imageLinks.smallThumbnail} alt="" />
                            <p>{item.title}</p>
                        </div>
                    ))
                }
                </div>
                </div>
            </div>

            {/* to show the fetched data */}
            <div className="grid">
            {
                book.map(function(element, index){
                    return(
                        <div className="content" key={index}>
                            <div>
                                <img className="image" src={element.imageLinks.smallThumbnail} alt="" />
                                <p>{element.title}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home;