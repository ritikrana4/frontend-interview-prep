import React, { useState } from "react";

export const App = () => {
        const [rating,setRating] = useState(0);
        let stars = [1,2,3,4,5];
        const handleRatingClick = (item) => {
            setRating(item);
        }
    return (
        <>
        <div style={{display:"flex",gap:"5px"}}>
            {stars?.map(item=>{
                return (
                    <div onClick={(e)=>handleRatingClick(item)} style={{height:"20px",width:"20px",background:item<=rating?"red":"white",border:"1px solid black"}}></div>
                )
            })}
        </div>
        </>
    )
}