import Link from 'next/link';

export default function Custom404() {

  return (

        <div className={styles.section0}>
            <h1>Oops.. Something happened</h1>
            <Link href='/'><button className={styles.secondaryButton}>Go Homepage</button></Link>
        </div>

  );
}

