import styles from './footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <p>EUR = 7,53450</p>
        <p>Zabranjeno je usluživanje, odnosno dopuštanje konzumiranja alkoholnih pića, drugih pića i/ili napitaka koji sadržavaju alkohol u ugostiteljskom objektu osobama mlađim od 18 godina.</p>
        <ul>
          <li>KAKTUS, obrt za ugostiteljstvo</li>
          <li>Vl. Patricija Čekada</li>
          <li>OIB: 69063400420</li>
        </ul>
      </footer>
)
export {Footer};