export default function registerLayout({ children }) {
    return (
        <section>
            {children}
            <footer>
                Powered by next application here.
            </footer>
        </section>
    );
}