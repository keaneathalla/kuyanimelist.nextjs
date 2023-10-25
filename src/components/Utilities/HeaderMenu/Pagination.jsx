import React from "react"

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1)
    }
    scrollTop()
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1)
    }
    scrollTop()
  }

  // Validate the page and lastPage props
  const pageIsValid = page > 0 && page <= lastPage
  const lastPageIsValid = lastPage > 0

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page <= 1 ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handlePrevPage}
          disabled={!pageIsValid}>
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handleNextPage}
          disabled={!lastPageIsValid || page === lastPage}>
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination
