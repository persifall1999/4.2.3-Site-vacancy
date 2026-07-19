interface IconProps {
    size?: number | string;
}

export const ProfileIcon = ({ size = 18, ...props }: IconProps) => {
    return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path 
          d="M3.91797 16.599C4.16548 15.7752 4.67194 15.0532 5.36222 14.54C6.05249 14.0268 6.88982 13.7497 7.74997 13.75H11.75C12.6112 13.7497 13.4496 14.0274 14.1404 14.5418C14.8311 15.0562 15.3374 15.7798 15.584 16.605M18.75 9.75C18.75 14.7206 14.7206 18.75 9.75 18.75C4.77944 18.75 0.75 14.7206 0.75 9.75C0.75 4.77944 4.77944 0.75 9.75 0.75C14.7206 0.75 18.75 4.77944 18.75 9.75ZM12.75 7.75C12.75 9.40685 11.4069 10.75 9.75 10.75C8.09315 10.75 6.75 9.40685 6.75 7.75C6.75 6.09315 8.09315 4.75 9.75 4.75C11.4069 4.75 12.75 6.09315 12.75 7.75Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
    </svg>
    )
}

export const GeoIcon = ({ size = 16, ...props }: IconProps) => {
    return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 13 15" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M6.33333 8.33314C7.4379 8.33314 8.33333 7.43771 8.33333 6.33314C8.33333 5.22857 7.4379 4.33314 6.33333 4.33314C5.22876 4.33314 4.33333 5.22857 4.33333 6.33314C4.33333 7.43771 5.22876 8.33314 6.33333 8.33314Z" 
        stroke="#0F0F10" 
        strokeOpacity="0.3" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10.1047 10.1045L7.276 12.9331C7.02599 13.1829 6.68706 13.3232 6.33367 13.3232C5.98028 13.3232 5.64135 13.1829 5.39134 12.9331L2.562 10.1045C1.81615 9.35858 1.30823 8.40827 1.10246 7.37371C0.896695 6.33916 1.00233 5.26681 1.406 4.29229C1.80968 3.31777 2.49327 2.48483 3.37032 1.89881C4.24738 1.31279 5.27851 1 6.33334 1C7.38816 1 8.41929 1.31279 9.29635 1.89881C10.1734 2.48483 10.857 3.31777 11.2607 4.29229C11.6643 5.26681 11.77 6.33916 11.5642 7.37371C11.3584 8.40827 10.8505 9.35858 10.1047 10.1045Z" 
        stroke="#0F0F10" 
        strokeOpacity="0.3" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
    </svg>
    )
}

export const SearchIcon = ({ size = 16, ...props }: IconProps) => {
    return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z" 
        stroke="#0F0F10" 
        strokeOpacity="0.3" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    )
}