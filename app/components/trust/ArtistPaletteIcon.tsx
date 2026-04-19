/**
 * Hand-finished palette mark for the homepage trust strip.
 * Outline adapted from Tabler Icons (MIT); paint dabs are custom fills on currentColor.
 */
export default function ArtistPaletteIcon({ className }: { className?: string }) {
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
                d="M12 21a9 9 0 0 1 0-18c4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828-.844.75-1.989 1.172-3.182 1.172h-2.5a2 2 0 0 0-1 3.75 1.3 1.3 0 0 1-1 2.25"
                stroke="currentColor"
                strokeWidth={1.15}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="8.5" cy="10.5" r="1.2" fill="currentColor" opacity={0.52} />
            <circle cx="12.5" cy="7.5" r="1.2" fill="currentColor" opacity={0.38} />
            <circle cx="16.5" cy="10.5" r="1.2" fill="currentColor" opacity={0.45} />
        </svg>
    )
}
