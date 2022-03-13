export const formatProjectName = (projectName: string) => {
  const formatted = projectName
    .split('-')
    .filter(str => str !== '')
    .map(str => {
      return str[0].toUpperCase() + str.substring(1)
    })
    .join(' ')

  return formatted
}

export const formatDate = (date: string) => {
  const dt = new Date(date)
  const year = dt.getFullYear()
  const day = dt.getDate()
  const month = dt.getMonth()

  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`
}

export const formatLocaleDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })
}
