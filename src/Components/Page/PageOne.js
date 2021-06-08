import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function PageOne(){

    client.query({
    query: gql
        `query GetRates {
            rates(currency: "USD") {
            currency
            }
        }`
    })
    .then(result => {
        setList(result.data.rates || [])
    });


    const [count, setCount] = useState(12)
    const [list, setList] = useState([])
    console.log(setCount)
    return (
        <div>
            {count}
            <br />
            <div style={{width: '200px', maxHeight: '200px', overflowY: 'auto'}}>
                {
                    list.map((item, index) => {
                        return <div key={index}>{item.currency}</div>
                    })
                }
            </div>
        </div>
    )
}

export default PageOne