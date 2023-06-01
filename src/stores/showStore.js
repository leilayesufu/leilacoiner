import axios from 'axios';
import { create } from 'zustand';
import { useParams } from 'react-router-dom';


const showStore = create((set) => ({
    graphData: [],
    data: null,

    reset: () => {
        set({graphData:[], data: null})
    },
     
    fetchData: async (id) => {
       


        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=7`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`),
        ])
        const graphData = graphRes.data.prices.map((price)=>{
            const[timestamp, prices]= price
            const date = new Date(timestamp).toLocaleDateString("en-us")
            return {
                Date: date,
                Price: prices,
            }
        })
        set({graphData})
        set({data: dataRes.data})
      
    }
}));




export default showStore;