export default function SampleCardIcon({ width = 32, height = 32 }: { width?: number; height?: number }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <rect x="6" y="13" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.15" />
            <line x1="12" y1="13" x2="18" y2="13" />
            <line x1="12" y1="16" x2="16" y2="16" />
        </svg>
    )
}
