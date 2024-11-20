export const getFileLink = (url, type = 'inline') => {
  const link = new URL(url)
  link.searchParams.append('contentDisposition', type)

  return link.toString()
}
