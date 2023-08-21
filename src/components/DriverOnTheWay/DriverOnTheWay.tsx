import style from './DriverOnTheWay.module.css'

interface props {
    driverName:string
}
export function DriverOnHisWay({driverName}:props){
    return (
        <div className={style.containerInfo}>
            <p><strong className={style.title}>Encontre <strong className={style.name}>{driverName}</strong>  no local de partida</strong></p>
            <span className={style.subtitle}>Chega em 3 minutos (800 metros)</span>
        </div>
    )
}