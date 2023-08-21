import style from './DriverInfo.module.css'
import driver from '../../assets/driver.png'
import car from '../../assets/car.png'

export function DriverInfo(){
    return (
        <div className={style.containerInfo}>
            <div className={style.containerImgs}>
                <div className={style.driverContainer}>
                    <img className={style.driverImg} src={driver}/>
                    <div className={style.driverNote}>
                        <span>5,0</span>
                    </div>
                    <span className={style.driverName}>Fábio D.</span>
                </div>
                <img src={car} className={style.carImg} />
            </div>

            <div className={style.containerCarInfo}>
                <strong>BCD0D19</strong>
                <span>Honda Civic Roxo</span>
            </div>
        </div>
    )
}