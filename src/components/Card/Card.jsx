import { IoIosArrowDropright } from "react-icons/io";
import styles from './Card.module.css'

// eslint-disable-next-line react/prop-types
const Card = ({name, description, html_url}) =>{
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                    <span>Acesse o repositório</span>
                </div>
                <a href={html_url} target='_blak' rel='nopenner norefferer' className={styles.card_button}>
                    <IoIosArrowDropright />
                </a>
            </div>
        </section>
    )
}
export default Card