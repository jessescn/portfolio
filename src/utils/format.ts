export const formatProjectName = (projectName: string) => {
  const formatted = projectName.split('-').map(str => {
    if (str) {
      return str[0].toUpperCase() + str.substring(1)
    }}).join(' ')

  return formatted;
}