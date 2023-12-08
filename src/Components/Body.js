import ResCard from "./ResCard";
import {resObj} from "../data/resObj";
import { useState } from "react";
const Body=()=>{

        const [res,setRes]=useState(resObj)
        console.log(res)
        console.log(setRes)
    return(
            <div className="body">
                    <div className="search-container">
                    
                            <div className="filter">

                 <button className="filter-btn"
                         onClick={()=>{
                              const x= res.filter(
                                (i)=>i.avgRating>=4
                                );
                                console.log(x)
                                
                              setRes(x);
                            }}
                            >
                                Top Rated Restaurants
                            </button>
                            </div>
                            
                            <div className="rest-container">
                                    {resObj.map((rest)=>(
                                            <ResCard resData={rest} key={rest.id}/> 
                                    ))}

                                    
                            </div>
                    </div>
            </div>

    );
};