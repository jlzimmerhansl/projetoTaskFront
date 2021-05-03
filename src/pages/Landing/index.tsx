import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import api from '../../services/api'

import LandingImage from '../../assets/images/landing.svg'

import {
  Container,
  Title,
  Subtitle,
  InsideContainer,
  InputBlock
} from './styles'

const Landing: React.FC = () => {
  const [nomeTime, setNomeTime] = useState('')
  const history = useHistory()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    api.post('/task/addTeam?nomeTime=', {
      nomeTime
    })

    console.log('time')
    console.log(nomeTime)
    alert('Cadastro efetuado com sucesso')

    history.push('/create-story')
  }

  return (
    <Container>
      <InsideContainer>
        <img src={LandingImage} alt="Landing" />
        <Title>PlanningHelper</Title>
        <Subtitle>Deixe sua planning mais organizada e rápida</Subtitle>
        <form onSubmit={handleSubmit} className="create-task-form">
          <InputBlock>
            <label htmlFor="nomeTime">Digite sua squad</label>
            <input
              id="nomeTime"
              value={nomeTime}
              onChange={event => setNomeTime(event.target.value)}
            />
          </InputBlock>
          <button className="confirm-button" type="submit">
            <FiArrowRight />
          </button>
        </form>
      </InsideContainer>
    </Container>
  )
}

export default Landing
