import styles from './card-grid.module.scss'
import Card from './card'

function CardGrid({ lecturas }) { 
  return (
    <div className={styles.card_grid}>
      {
        lecturas.map(lectura => (
          <Card 
            Responsive
            lectura={lectura}
            key={lectura.sys.id}
          />
        ))
      }
    </div>
  )
}

export default CardGrid
