import { Select } from '@chakra-ui/react'

const options = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '+',
    label: '+',
  },
]

interface SelectStoreProps {
  saveProno: Function
  isAwayTeam?: boolean
}

const SelectScore = ({ saveProno, isAwayTeam }: SelectStoreProps) => {
  return (
    <Select
      textAlign="center"
      onChange={(e) => saveProno(e.target.value, isAwayTeam)}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default SelectScore
