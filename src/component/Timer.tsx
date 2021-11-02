import React, {useEffect, useState} from 'react'

type PropsType = {
    reset: () => void
    user: string
}

const initialSeconds = 5

export const Timer: React.FC<PropsType> = ({reset, user}) => {
    const [seconds, setSeconds] = useState(initialSeconds)
    useEffect(() => {
        setSeconds(initialSeconds)
        let timerId = setInterval(function() {
            console.log('tick')
            setSeconds((prev) => prev - 1)},1000)
        return () => {
            console.log('clear')
            clearInterval(timerId)
        }
    }, [user])

    if (seconds === 0){
        reset()
    }
    return <div>
        00:{seconds}
    </div>
}