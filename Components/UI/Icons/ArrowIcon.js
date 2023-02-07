import React from 'react'

function ArrowIcon({ className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="30" height="30" viewBox="0 0 39 39" fill="none">
      <path d="M14.4785 32.37L25.0735 21.775C26.3248 20.5238 26.3248 18.4763 25.0735 17.225L14.4785 6.63" stroke="#3d2f00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}

export default ArrowIcon