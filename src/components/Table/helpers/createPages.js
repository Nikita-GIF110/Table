export const createPages = (currentPage, pagesCount) => {
  const pages = []

  if (pagesCount > 5) {
    if (currentPage > 2) {
      for (let i = currentPage - 1; i <= currentPage + 2; i += 1) {
        pages.push(i)

        if (i === pagesCount) break
      }
    } else {
      for (let i = 1; i < 5; i += 1) {
        pages.push(i)

        if (i === pagesCount) break
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i)
    }
  }

  return pages
}
