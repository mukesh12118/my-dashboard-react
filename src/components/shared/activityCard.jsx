import SvgImageRender from "../../utils/svgRender";
import "./sharedstyle.scss"

export default function ActivityCard({ data }) {
    return (
        <div className="activity_main_container">
            <div className="activity_left">
                <div className={data?.imagesrc}>
                    <SvgImageRender height={25} width={25} imgName={data?.imagesrc} />
                </div>
                <h4>{data.orderTitle}</h4>
            </div>
            <div className="activity_right">
                <img src={require("../../assets/images/arrow-right.png")} alt="" />
            </div>
        </div>
    )
}
