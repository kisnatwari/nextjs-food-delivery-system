"use client"

import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

const endingDate:Date = new Date('2023-9-21');

const CountDown = () => {
    const [showCounter, setShowCounter] = useState<boolean>(false);
    useEffect(() => {
        setShowCounter(true);
    }, [])
  return (
    <div>
        {
            showCounter && <Countdown date={endingDate}/>
        }
    </div>
  )
}

export default CountDown