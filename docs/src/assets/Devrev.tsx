import React from 'react'

interface DevrevProps {
    className?: string
    strokeWidth?: number
    size?: number
}

const Devrev: React.FC<DevrevProps> = ({ className = '', strokeWidth = 1, size = 16 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            width={size}
            height={size}
            viewBox="0 0 30 31"
            className={className}
            strokeWidth={strokeWidth || undefined}
            aria-hidden="true"
            focusable="false"
        >
            <path d="M12.7,24.2V12.1H25C25,5.5,19.4,0,12.7,0C5.9,0,0.4,5.5,0.4,12.1C0.4,18.7,5.9,24.2,12.7,24.2z M35.2,50V37.9
		h12.3c0-6.6-5.6-12.1-12.3-12.1s-12.3,5.5-12.3,12.1S28.5,50,35.2,50z M35.2,23.8L47.9,0.4H22.5L35.2,23.8z M25.4,26.2L12.7,49.6
		L0,26.2H25.4z"/>
        </svg>
    )
}

export default Devrev
