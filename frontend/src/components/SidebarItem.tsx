import type React from "react";

interface SidebarItemProps{
    icon: React.ReactElement;
    text: string;
    setFilter: (filter: React.SetStateAction<string>) => void;
    filter: string;
}

export function SidebarItem({icon, text, setFilter, filter}: SidebarItemProps){

    function clicker(typeSent: string){
        try{
            if(filter === typeSent){
                setFilter("");
                return;
            }
            setFilter(typeSent);
        }catch(e){
            console.log(e);
        }
    }

    return(
        filter === text.toLowerCase() ? (<div className="flex items-center gap-3 p-2 hover:bg-purple-800 bg-purple-800/30 rounded-md cursor-pointer transition-colors" onClick={() => clicker(text.toLowerCase())}>
            {icon}
            <span className="text-md font-medium text-gray-200 hidden md:inline">{text}</span>
        </div>): 
        (<div className="flex items-center gap-3 p-2 hover:bg-purple-800/30 rounded-md cursor-pointer transition-colors" onClick={() => clicker(text.toLowerCase())}>
            {icon}
            <span className="text-md font-medium text-gray-200 hidden md:inline">{text}</span>
        </div>)
    )
}