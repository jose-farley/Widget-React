import { DriverInfo } from "../components/DriverInformation/DriverInfo";
import { DriverOnHisWay } from "../components/DriverOnTheWay/DriverOnTheWay";
import style from './DriverPage.module.css'
import { CommentSection } from "../components/CommentSection/CommentSection";
export function DriverPage(){
    return (
        <div className={style.container}>
            <div className={style.disc}></div>
            <DriverOnHisWay driverName="Fábio"/>
            <DriverInfo/>
            <CommentSection driver="Fábio" comments={['Já estou no local combinado.']}/>
        </div>
    )
}