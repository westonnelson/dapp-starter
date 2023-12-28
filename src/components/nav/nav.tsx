import styles from './nav.module.css'

export default function NavBar() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.linkStyle}>Inscriptions</div>
        <div className={styles.linkStyle}>Collections</div>
      </nav>
    </>
  );
}
