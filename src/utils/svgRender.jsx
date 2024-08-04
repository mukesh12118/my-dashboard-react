
import { ReactComponent as DashboardImgOne } from "../assets/images/bookings.svg"
import { ReactComponent as DashboardImgTwo } from "../assets/images/dasboard-img2.svg"
import { ReactComponent as DashboardImgThree } from "../assets/images/dashboard-img3.svg"
import { ReactComponent as DashboardImgFour } from "../assets/images/dashboard-img4.svg"
import { ReactComponent as GoalOne } from "../assets/images/order_Design.svg"
import { ReactComponent as GoalTwo } from "../assets/images/goal2.svg"
import { ReactComponent as GoalThree } from "../assets/images/goal3.svg"

export default function SvgImageRender({ imgName,height,width }) {

    const ImageObj = {
        DashboardImgOne,
        DashboardImgTwo,
        DashboardImgThree,
        DashboardImgFour,
        GoalOne,
        GoalTwo,
        GoalThree
    }

    const ResultImg = ImageObj[imgName]

    return (
        <ResultImg height={height || 'auto'} width={width || 'auto'}/>
    )
}