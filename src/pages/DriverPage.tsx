import { DriverInfo } from "../components/DriverInformation/DriverInfo";
import { DriverOnHisWay } from "../components/DriverOnTheWay/DriverOnTheWay";
import style from './DriverPage.module.css'
import { Comment } from "../components/Comment/Comment";
export function DriverPage(){
    return (
        <div className={style.container}>
            <div className={style.disc}></div>
            <DriverOnHisWay driverName="Fábio"/>
            <DriverInfo/>
            <Comment driver="Fábio"/>
        </div>
    )
}