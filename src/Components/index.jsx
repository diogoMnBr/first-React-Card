import posterImg from "../assets/foto1.jpg"
import styles from "./styles.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Star Wars Poster" />
            <div>
                <h2 className={styles.title}>Pôster do Filme</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem reiciendis voluptas eveniet deleniti quasi esse ut nisi quisquam, perferendis expedita repellat sed architecto voluptatum labore fuga! Laboriosam quisquam porro veritatis expedita quos, maiores doloremque, est nesciunt quas, voluptates iste magnam quo illo? Consequatur fugit quibusdam tempora nobis sint sapiente. Minus consequuntur quibusdam illum magnam consequatur reiciendis ut temporibus voluptas, quos possimus officiis distinctio libero ad quas sequi.
                </p>
                <button className={styles.button}>COMPRAR AGORA</button>
            </div>
        </div>
    )
}