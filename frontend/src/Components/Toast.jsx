import React from 'react'

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-gray-800 text-white rounded-md shadow-lg">
      <p>{message}</p>
      <button className="ml-2 text-sm font-semibold" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default Toast;
