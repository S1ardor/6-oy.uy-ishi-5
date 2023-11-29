import { useEffect, useState } from "react";
import './Main.css';
import { MainCard } from "./MainCard";

export const Main = () => {
    const [ countris, setCountris ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const feachData = async () => {
        try{
            setLoading(true);
               let url = 'https://restcountries.com/v3.1/all';

               if(search.trim()){
                url = `https://restcountries.com/v3.1/name/${search}`;
               }

                 const response = await fetch(url);

               if(response.ok) {
                const data = await response.json();
               setCountris(data);
        }
        }finally {
            setLoading(false);
        }
    };
    
    const hendlSearch = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        feachData();
    }, [search]);
    console.log(countris);

    if(loading) {
        return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    }

  return (
    <div>
        <div className="container">
            
                <div className="search_inp">
                <input value={search} onChange={hendlSearch} className="inp" type="text" placeholder="Search..."/>
                </div>

                <div className="boxex">
                    {
                        countris.map((country, index) => (
                            <MainCard key={index} countryData={country}/>
                        ))
                    }
                </div>

        </div>
    </div>
  )
}
