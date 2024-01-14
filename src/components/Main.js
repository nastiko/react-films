import React from "react"

export default function Main(props) {
    //console.log(props.item)
    return (
        <div className="min-w-[175px] text-[14px] bg-[#23252c] mt-4 mb-8">
            <img className="w-full h-[262px]" src={`../img/${props.coverImg}`} alt={`${props.title}`}/>
            <div className="px-2">
                <div className="flex gap-2 mt-4 mb-1">
                    <img src="../icons/star.svg" alt="Icon star"/>
                    <span className="text-[#808080]">{props.stats.rating}</span>
                </div>
                <h1 className="text-[16px] text-[#e6e6e6] mb-6">{props.title}</h1>
                <button className="w-full bg-[#404040] text-[#357EC7] py-1">
                    Description
                </button>
                <div className="flex items-center justify-center py-3">
                    <img src="../icons/play.svg" alt="Icon play"/>
                    <span className="text-[#e6e6e6]">Trailer</span>
                </div>
            </div>
        </div>
    )
}