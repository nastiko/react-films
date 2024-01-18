import React from "react"

export default function NavBar() {
    return (
        <nav className="prose prose-h1:text-[32px] prose-h1:leading-[24px] prose-h1:text-[#808080] prose-h1:font-light prose-h1:pl-1.5 prose-h1:mb-0
                        prose-p:text-[18px] prose-p:leading-2 prose-p:text-[#808080] prose-p:font-light prose-p:mt-2 prose-p:mb-0">
            <div className="flex border-l-[2px] border-l-[#ecd422]">
                <h1>Fan favorites</h1>
                <img className="my-0" src="icons/arrow_right.svg" alt="Icon arrow right"/>
            </div>
            <p>This week's top TV and movies</p>
        </nav>
    )
}