import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import CardContext from '../../context/CardListContext'
import UserContext from '../../context/UserContext'

import Points from '../Points'
import Timer from '../Timer'
import User from '../User'
import Modal from '../Modal'
import Win from '../Win'
import Lose from '../Lose'

function InfoGame () {
  const { cardsList } = useContext(CardContext)
  const { user, setNextLevel } = useContext(UserContext)
  const [numberCards, setNumberCards] = useState(-1)
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState('00')
  const [endGame, setEndGame] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const history = useHistory()

  useEffect(() => {
    let timer = minutes * 60
    setInterval(() => {
      if (timer % 60 === 0) {
        setMinutes(n => (n -= 1))
        setSeconds('60')
      }

      if (timer === 0) {
        setHasWon(false)
        setEndGame(true)
      }

      timer -= 1
      setSeconds(seg => {
        let time = parseInt(seg)
        time -= 1

        if (time < 10) {
          return `0${time}`
        }

        return time
      })
    }, 1000)
  }, [])

  useEffect(() => {
    console.log(numberCards + 1)
    setNumberCards(cards => (cards += 1))
    if ((numberCards + 1) === 20) {
      setTimeout(() => {
        setEndGame(true)
        setHasWon(true)
      }, 1500)
    }
  }, [cardsList])

  const backToHome = () => {
    history.push('/')
  }

  const repeatLevel = () => {
    console.log('nana')
    setNextLevel(null)
    history.push('/newGame')
  }

  const next = () => {
    console.log('roku')
    history.push('newGame')
  }

  return (
    <div className="is-flex is-justify-content-space-between is-align-content-center">
      <Timer seconds={seconds} minutes={minutes} />
      <User user={user} />
      <Points points={numberCards} />
      {endGame &&
        <Modal>
          {hasWon
            ? <Win backToHome={backToHome} nextLevel={next} />
            : <Lose backToHome={backToHome} repeat={repeatLevel} />
          }
        </Modal>
      }
    </div>
  )
}

export default InfoGame
