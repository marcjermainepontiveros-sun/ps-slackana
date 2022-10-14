import React from 'react'

export interface CrownIcon {
  color?: string
}

export const CrownIcon: React.FC<CrownIcon> = ({ color = "#FFC107" }): JSX.Element => {
  return (
    <svg
      height="12"
      viewBox="0 0 406 311"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9941 187.453L0.549615 65.4486C0.187713 63.1778 0.333947 60.855 0.977785 58.6476L1.20015 57.8852C2.62265 53.0081 6.54591 49.2648 11.4844 48.0727C15.6093 47.0771 19.9633 47.9813 23.3506 50.537L95.6491 105.086C99.4461 107.95 104.073 109.5 108.829 109.5H109.097C112.641 109.5 116.125 108.597 119.223 106.876C122.036 105.313 124.449 103.12 126.274 100.469L190.197 7.5727C192.026 4.91542 194.59 2.84945 197.576 1.62812L197.779 1.54509C201.759 -0.0831249 206.226 -0.0461078 210.178 1.64784C213 2.8572 215.416 4.8505 217.139 7.39132L279.169 98.8513C281.674 102.545 285.15 105.477 289.213 107.324L289.623 107.511C292.508 108.822 295.639 109.5 298.808 109.5C303.483 109.5 308.039 108.024 311.825 105.282L388.91 49.4617C391.494 47.5906 394.791 47.0014 397.863 47.8615C402.378 49.1259 405.5 53.2418 405.5 57.9311V60.8656C405.5 61.6207 405.44 62.3746 405.321 63.1203L385.506 187.453C382.334 207.354 365.17 222 345.017 222H60.4831C40.3305 222 23.1659 207.354 19.9941 187.453Z"
        fill={color}
      />
      <path
        d="M380 252H25.5V270C25.5 292.644 43.8563 311 66.5 311H339C361.644 311 380 292.644 380 270V252Z"
        fill={color}
      />
    </svg>
  )
}
