import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Eryk-Luiz.png" alt="Eryk Luiz"/>

      <div>
        <strong>Eryk Luiz</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}