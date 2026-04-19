/**
 * Four-point sparkle (compass star) — stroke outline to match ArtistPaletteIcon
 * and read consistently with the Radix trust-row icons (thin filled silhouettes).
 */
export default function DiamondShineIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                d="M12 2l2.83 7.17L22 12l-7.17 2.83L12 22l-2.83-7.17L2 12l7.17-2.83L12 2z"
                stroke="currentColor"
                strokeWidth={1.15}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
