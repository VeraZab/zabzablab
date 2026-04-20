export default function PaintSwatchIcon({ width = 32, height = 32 }: { width?: number; height?: number }) {
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
            <rect x="2" y="5" width="6" height="15" rx="1.5" />
            <rect x="9" y="3" width="6" height="15" rx="1.5" />
            <rect x="16" y="5" width="6" height="15" rx="1.5" />
            <line x1="2" y1="16" x2="8" y2="16" />
            <line x1="9" y1="14" x2="15" y2="14" />
            <line x1="16" y1="16" x2="22" y2="16" />
        </svg>
    )
}
