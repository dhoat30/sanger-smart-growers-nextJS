import React from 'react'

function ArrowIcon({className, onClick}) {
  return (
    <svg
    onClick={onClick}
    className={className}
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20.9628"
      cy="20.3633"
      r="19.5"
      transform="rotate(-180 20.9628 20.3633)"
      fill="#FF9734"
      stroke="#FF9734"
    />
    <path
      d="M28 20.2602L28.3907 20.5722L28.6399 20.2602L28.3907 19.9481L28 20.2602ZM13 19.7602C12.7239 19.7602 12.5 19.984 12.5 20.2602C12.5 20.5363 12.7239 20.7602 13 20.7602L13 19.7602ZM23.3907 26.8316L28.3907 20.5722L27.6093 19.9481L22.6093 26.2075L23.3907 26.8316ZM28.3907 19.9481L23.3907 13.6888L22.6093 14.3129L27.6093 20.5722L28.3907 19.9481ZM28 19.7602L13 19.7602L13 20.7602L28 20.7602L28 19.7602Z"
      fill="#F7F7F7"
    />
  </svg>
  )
}

export default ArrowIcon