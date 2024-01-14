import React from "react"

export default function Footer() {
    return (
        <div className="mt-10">
            <div className="prose prose-h1:text-[32px] prose-h1:leading-[24px] prose-h1:text-[#808080] prose-h1:font-light prose-h1:border-l-[2px] prose-h1:border-l-[#ecd422] prose-h1:pl-1.5 prose-h1:mb-0
                        prose-p:text-[18px] prose-p:leading-2 prose-p:text-[#808080] prose-p:font-light prose-p:mt-2 prose-p:mb-0">
                <h1>More to watch</h1>
                <p>This week's top TV and movies</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
                <button className="w-full md:w-[320px] border-[1px] border-[#e6e6e6] rounded text-[#e6e6e6] py-1 px-20">Watch Guide</button>
                <button className="w-full md:w-[320px] border-[1px] border-[#e6e6e6] rounded text-[#e6e6e6] py-1 px-20">Most Popular</button>
            </div>
        </div>
    )
}