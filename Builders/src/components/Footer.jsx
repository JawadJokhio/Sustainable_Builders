export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Sustainable Builders</p>
      <p>sustainablebuilders3@gmail.com</p>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: "1px solid var(--border-subtle)",
    marginTop: 120,
    padding: 40,
    textAlign: "center",
    color: "var(--text-muted)",
  },
};
