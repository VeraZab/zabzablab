import type { Metadata } from "next";
import styles from "../../styles/resize-recolor-request.module.css";

export const metadata: Metadata = {
    title: "Resize/Recolor Request",
    description: "Submit a request to resize or recolor a design.",
};

export default function ResizeRecolorRequestPage() {
    return (
        <main style={{ maxWidth: 960, margin: "0 auto" }}>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfESGLdPoJFJxVXwNQBQ2HS0z-HgZ6ZVfI62neur2y5BQvUiw/viewform?embedded=true"
                width="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                title="Spoonflower Resize/Recolor Request Form"
                className={styles.iframe}
            >
                Loading…
            </iframe>
        </main>
    );
}


