import React from "react"

export const DomRef: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null!);

    React.useEffect(() =>{
        inputRef.current.focus()
    }, [])

    return(<div>
        <input type={"text"} ref={inputRef} />
    </div>)
}