import React, { useEffect, useState } from 'react'
import Catalog from '../Components/Catalog'
import Call from '../Api/CallAPI';

function Home() {
    const [recipe, setRecipe] = useState();
    
    useEffect(() => {
        const GetData = async () => {
            const data = await Call("http://localhost:3003/catalog/");
            setRecipe(data);
        }
        GetData();
    }, []);

    return (
        <React.Fragment>
            <section className='container mx-auto pt-2'>
                { recipe ?  <Catalog data={recipe} /> : 'Loading' }
            </section>
        </React.Fragment>
    )
}

export default Home