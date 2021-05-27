import utils from '../../styles/utils.module.css'
import styles from './lectura.module.scss'
import NavigationBar from '../../components/navigation-bar'

function Lectura() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.header}>
        <h1 className={utils.title_medium}>El cazador de ovejas</h1>
        <h3 className={utils.subtitle_regular}>Augusto Reyes</h3>
      </div>
      <div className={styles.cover}>

      </div>
      <div className={[styles.body, utils.reading_regular].join(' ')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis turpis nec metus hendrerit fermentum a vel enim. Cras sagittis molestie quam mollis fermentum. Nam ac ultrices lacus. Nullam molestie ex et sem sodales auctor ut consequat tortor. Nullam felis augue, sagittis quis tincidunt non, ornare in dolor. Praesent consequat dictum neque sed dictum. Phasellus ut elit ut enim rutrum consectetur. Sed eros est, volutpat id risus egestas, luctus tincidunt leo. Aenean vestibulum aliquet tristique. <br /><br />

      In eget enim condimentum, sagittis ipsum quis, molestie tortor. Etiam lacus sem, egestas vel odio et, tempus elementum massa. Phasellus scelerisque feugiat ex, viverra venenatis nibh ornare vitae. Quisque venenatis efficitur sapien, non euismod neque. Maecenas sed ipsum nec mi condimentum luctus. Nam commodo dolor at sapien condimentum pulvinar. Ut commodo dignissim sem id dignissim. Quisque sed aliquam nulla, in ultrices nulla. Sed sapien mi, porttitor eget turpis id, ullamcorper fermentum ipsum. Etiam aliquam ante nec diam ullamcorper, at vestibulum nisl euismod. <br /><br />

      Etiam nisl ex, molestie ac accumsan non, facilisis vitae diam. Proin tempor urna ac turpis ornare sollicitudin. Sed ante nibh, viverra eu aliquet eu, ultrices vitae felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper augue vitae nibh pellentesque, eget fermentum nulla sollicitudin. Nunc vel risus non tortor gravida viverra. Phasellus ultrices magna sed velit tempor, a imperdiet enim fringilla. Duis dapibus fringilla quam, id tempus nulla tempor quis. Donec lobortis arcu vitae eros fringilla, nec consectetur nunc volutpat. Morbi vel purus faucibus, laoreet nibh sit amet, congue augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vulputate ante sit amet ultrices varius. Suspendisse tristique malesuada leo ut imperdiet. Sed finibus, turpis eu venenatis sagittis, ligula odio semper nisl, non pellentesque dolor orci vitae augue. In dictum massa leo, eget luctus metus tristique a. Proin in posuere felis, ac consequat elit.<br /><br />

      Duis quis tincidunt sem. Aenean scelerisque elit ut metus finibus vestibulum. In cursus tortor nec magna viverra, nec porttitor magna mollis. Sed a ligula id purus vehicula mattis. In hendrerit suscipit metus. Suspendisse fringilla nunc tortor, ac egestas enim auctor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /><br />

      Ut et arcu ante. Proin nec massa nibh. Ut vehicula libero at dui consequat malesuada. Curabitur elementum urna in risus facilisis commodo. Sed semper metus id nunc fringilla dictum. Duis ac tellus a velit rutrum tincidunt nec a tellus. In nulla tortor, condimentum egestas malesuada sit amet, vulputate ac lectus. Duis venenatis velit sed varius sagittis. Sed justo lacus, pharetra ut porttitor sed, viverra eu magna. Sed tempor mattis molestie. Vestibulum quis tempus velit.
      </div>
      <div className={styles.audio_player}>
        <img src='/assets/play.svg' alt='Reproducir'/>
      </div>
      <div className={styles.floating_button}>
      <img src='/assets/question.svg' alt='Ir a las preguntas'/>
      </div>
    </div>
  )
}

export default Lectura