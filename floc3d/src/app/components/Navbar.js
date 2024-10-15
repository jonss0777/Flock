import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;