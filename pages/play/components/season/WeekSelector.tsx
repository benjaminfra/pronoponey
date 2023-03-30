import { Select, Button, HStack, Box } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useState, useEffect, useContext } from 'react'
import { IWeek } from '../../../../server/db/models/weekModel'
import { DateTime } from 'luxon'
import { ensure } from '../../../../helpers/types.helpers'
import { GamesContext } from '../../GameContextProvider'

interface WeekSelectorProps {
  weeks: IWeek[]
}

const findCurrentWeek = (weeks: IWeek[]): IWeek => {
  const today = DateTime.local()

  let minDifference = Number.POSITIVE_INFINITY
  let currentWeek: IWeek = weeks[0]
  weeks.forEach((week) => {
    const difference = Math.abs(
      DateTime.fromISO(week.date.toString()).diff(today).as('milliseconds')
    )
    if (difference < minDifference) {
      minDifference = difference
      currentWeek = week
    }
  })

  return currentWeek
}

const WeekSelector = ({ weeks }: WeekSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<IWeek>(
    findCurrentWeek(weeks)
  )

  const { getGames } = useContext(GamesContext)

  useEffect(() => {
    getGames(selectedOption.weekNumber)
  }, [selectedOption.weekNumber])

  const onSelect = (value: string): void => {
    setSelectedOption(
      ensure(weeks.find((week) => week.weekNumber.toString() === value))
    )
  }

  const onButtonClick = (isBack: boolean): void => {
    const currentIndex = weeks.findIndex((week) => week === selectedOption)
    if (isBack && currentIndex - 1 >= 0) {
      setSelectedOption(weeks[currentIndex - 1])
    } else if (!isBack && currentIndex + 1 <= 37) {
      setSelectedOption(weeks[currentIndex + 1])
    }
  }

  return (
    <HStack>
      <Box flex={1}>
        <Button disabled={!selectedOption} onClick={() => onButtonClick(true)}>
          <FiArrowLeft />
        </Button>
      </Box>
      <Box flex={8}>
        <Select
          placeholder="Journée"
          onChange={(e) => onSelect(e.target.value)}
          value={selectedOption?.weekNumber}
        >
          {weeks.map((week) => (
            <option key={week.weekNumber} value={week.weekNumber}>
              {`J-${week.weekNumber} (${DateTime.fromISO(
                week.date.toString()
              ).toLocaleString(DateTime.DATE_SHORT, { locale: 'fr' })})`}
            </option>
          ))}
        </Select>
      </Box>
      <Box flex={1}>
        <Button
          disabled={!selectedOption}
          onClick={() => onButtonClick(false)}
          float="right"
        >
          <FiArrowRight />
        </Button>
      </Box>
    </HStack>
  )
}

export default WeekSelector