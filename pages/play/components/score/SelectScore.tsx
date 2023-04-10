import { NumberInput, NumberInputField } from '@chakra-ui/react'
import { useState } from 'react'

interface SelectStoreProps {
  saveProno: (value: number) => void
  pronosticScore?: number
}

const SelectScore = ({ saveProno, pronosticScore }: SelectStoreProps) => {
  const [score, setScore] = useState<number | undefined>(pronosticScore)

  const setPronostic = (value: number) => {
    setScore(value)
    saveProno(value)
  }

  return (
    <NumberInput
      min={0}
      max={9}
      defaultValue={score}
      borderColor={score === undefined || score === null ? 'red' : ''}
      onChange={(_v, value) => setPronostic(value)}
    >
      <NumberInputField
        placeholder={
          pronosticScore === undefined || pronosticScore === null ? '...' : ''
        }
        textAlign="center"
        padding="0"
      />
    </NumberInput>
  )
}

export default SelectScore
