import { ResponsiveCalendar } from '@nivo/calendar'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

interface CalendarProps {
  commits: {
    date: string
  }[]
}

const ProjectCalendar = ({ commits }: CalendarProps) => {
  const { colors } = useContext(ThemeContext)

  const tmp = new Map<string, number>()

  commits.forEach(commit => {
    if (!tmp.has(commit.date)) {
      tmp.set(commit.date, 1)
      return
    }

    tmp.set(commit.date, tmp.get(commit.date) + 1)
  })

  const data = Array.from(tmp.entries()).map(elm => {
    return {
      day: elm[0],
      value: elm[1]
    }
  })

  return (
    <ResponsiveCalendar
      data={data}
      from={data[data.length - 1].day}
      to={data[0].day}
      emptyColor="#1f202d"
      colors={['#f4d8db', '#c83e4d', '#a0323e', '#78252e']}
      margin={{ top: 0, right: 10, bottom: 0, left: 20 }}
      yearSpacing={10}
      monthBorderColor={colors.background}
      dayBorderWidth={1.5}
      monthBorderWidth={2.5}
      dayBorderColor={colors.background}
      theme={{
        textColor: colors.text
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left'
        }
      ]}
    />
  )
}

export default ProjectCalendar
