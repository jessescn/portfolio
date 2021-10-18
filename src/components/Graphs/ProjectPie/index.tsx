import { ResponsivePie } from '@nivo/pie'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

type Data = {
    id: string,
    value: number
}

interface ProjectPieProps {
    data: Data[]
}

const ProjectPie = ({ data }: ProjectPieProps) => { 
  const { colors } = useContext(ThemeContext)
  const total = data.reduce((acc, curr) => acc + curr.value , 0)

  const formattedData = data.map((elm) => {
      return {
          ...elm,
          value: ((elm.value / total) * 100).toFixed(2)
      }
  })
  

  return (  
    <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        colors={{ scheme: 'category10' }}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.text}
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: -50,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 22,
                itemTextColor: colors.text,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 16,
                symbolShape: 'circle',
            }
        ]}
    />
)}

export default ProjectPie;