import styles from './Car.module.css'

const Car = ({car}) => {
  return (
    <div className={styles.card}>
        <h1>{car.name}</h1>
        <p>{car.km}</p>
        <p>{car.color}</p>
    </div>
  )
}

export default Car