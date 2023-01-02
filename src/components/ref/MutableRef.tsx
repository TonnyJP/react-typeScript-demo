import React from "react"


export const MutableRef: React.FC = () => {
    const [timer, setTimer] = React.useState<number>(0);
    const intervalRef = React.useRef<number | undefined>(undefined);

    const stopTimer = () => {
        window.clearInterval(intervalRef.current)
    }

    React.useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, []);

    return(
        <div>
            HookTimer - {timer} -
            <button onClick={() =>stopTimer()}>Stop Timer</button>
        </div>
    )
}