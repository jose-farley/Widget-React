import phone from '../../assets/phone.png'
import shield from '../../assets/shield.png'
import style from './Comment.module.css'
interface props {
    driver:string
}


export function Comment({driver}:props){
    return (
        <div className={style.containerComment}>
            <input className={style.inputComment} type="text" placeholder={`Enviar mensagem para ${driver}...`}/>

            <button>Publicar</button>
            <img className={style.phoneIcon} src={phone} />
            <img className={style.shieldIcon} src={shield} />
        </div>
    )
}