import React from "react";
import SvgImageRender from "../../utils/svgRender";
import ActivityCard from "../shared/activityCard";
import "./dashboard.scss"
import CustomTable from "../shared/customTable";
import RatingRow from "../shared/ratingRow";
import { v4 as uuidv4 } from 'uuid';
import ColumnChart from "./columnChart";
import { ProfitChart } from "./circleChart";
export default function Dashboard() {

    const orderList = [
        { label: "Total orders", total: 75, percent: 3, position: "upward", path: 'DashboardImgOne' },
        { label: "Total Delivered", total: 70, percent: 3, position: "downwards", path: 'DashboardImgTwo' },
        { label: "Total Cancelled", total: "05", percent: 3, position: "upward", path: 'DashboardImgThree' },
        { label: "Total Revenue", total: "12K", percent: 3, position: "downwards", path: 'DashboardImgFour' },
    ]

    const goalList = [
        { imagesrc: "GoalOne", orderTitle: "Goals", },
        { imagesrc: "GoalTwo", orderTitle: "Popular Dishes", },
        { imagesrc: "GoalThree", orderTitle: "Menus", },
    ]

    const tableheaders = [
        { label: "Customer", key: 'name', styleClass: 'follower' },
        { label: "Order No.", key: 'orderNo', styleClass: "" },
        { label: "Amount", key: 'amount', styleClass: "" },
        { label: "Status", key: 'status', styleClass: 'status' },
    ]

    const tableData = [
        { name: "Wade Warren", orderNo: 15478256, amount: "124.00", status: "Delivered" },
        { name: "Jane Cooper", orderNo: 48965766, amount: "365.02", status: "Delivered" },
        { name: "Guy Hawins", orderNo: 15478256, amount: "45.00", status: "Cancelled" },
        { name: "Kristin Watson", orderNo: 15478256, amount: "65.00", status: "Pending" },
        { name: "Cody Fisher", orderNo: 15478256, amount: "545.00", status: "Delivered" },
        { name: "Savannah Nguyen", orderNo: 15478256, amount: "528.00", status: "Delivered" },
    ]

    const feedbackArr = [
        { name: "Jenny Wilson", rating: 4, desc: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies' },
        { name: "Denny hady", rating: 4, desc: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service' },
        { name: "Devon Lane Wilson", rating: 4, desc: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies' },
        { name: "Denny hady", rating: 4, desc: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service' },
        { name: "Jenny Wilson", rating: 4, desc: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies' },
        { name: "Denny hady", rating: 4, desc: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service' },
        { name: "Devon Lane Wilson", rating: 4, desc: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies' },
        { name: "Denny hady", rating: 4, desc: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service' },
        { name: "Jenny Wilson", rating: 4, desc: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies' },
    ]


    return (
        <div className="mains_mains">
            <div className="main_grid grid1">
                <div className="left_grid ">

                    <div className="hanging_main">
                        {orderList.map((item, i) => {
                            const { label, total, percent, position, path } = item;
                            return (
                                <div className="grid_subs" key={uuidv4()}>
                                    <div className={`dashboard_hanging_images ${path}`}>
                                        <SvgImageRender height={25} width={25} imgName={path} />
                                    </div>
                                    {/* <img src={require('../../assets/images/bookings.svg')} alt={label} /> */}
                                    <p className="card_p">{label}</p>
                                    <div className="flex-main">
                                        <h4>{total == '12K' ? '$' + total : total}</h4>
                                        <div className="percent_aa">
                                            <img src={require(`../../assets/images/${position == 'upward' ? 'arrow-green.png' : 'arrow-red.png'}`)} alt="" />
                                            <p className={`percent ${position}`}>{percent}%</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="right_container commmon_container">
                    <div className="chart_right_mi">

                        <div className="left_cha_main">
                            <p>Net Profit</p>
                            <h1>$6759.25</h1>
                            <div className="percent_aa">
                                <img src={require(`../../assets/images/arrow-green.png`)} alt="" />
                                <p className="percent upward">3%</p>
                            </div>
                        </div>
                        <div className="right_cha_mains">
                            <ProfitChart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_grid grid2">
                <div className="left_container commmon_container">
                    <h3>Activity</h3>
                    <div className="chart_container_main">
                        <ColumnChart />

                    </div>
                </div>
                <div className="right_container commmon_container ">
                    {goalList.map((item) => {
                        return (
                            <React.Fragment key={uuidv4()}>
                                <ActivityCard data={item} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
            <div className="main_grid grid3">
                <div className="left_container commmon_container">
                    <h3>Recent Orders</h3>
                    <div style={{ marginTop: "15px" }}>

                    </div>
                    <CustomTable tableHeader={tableheaders} tableData={tableData} />
                </div>
                <div className="right_container commmon_container feedback_container">
                    <h3>Customer's Feedback</h3>

                    <div>
                        {feedbackArr.map((item, i) => {
                            return (
                                <React.Fragment key={uuidv4()}>
                                    <RatingRow data={item} />
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}