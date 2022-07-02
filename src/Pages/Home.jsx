import React, { useEffect, useState } from 'react'
import Catalog from '../Components/Catalog'

function Home() {
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        const GetData = async () => {
            const response = await fetch('http://localhost:3003/catalog/');
            const data = await response.json();
            setRecipe(data);
        }
        GetData();
    }, []);

    return (
        <React.Fragment>
            <section className='container mx-auto pt-2'>
                { typeof recipe != 'undefined' ? <Catalog data={recipe} /> : '0' }
            </section>
        </React.Fragment>
    )
}

export default Home