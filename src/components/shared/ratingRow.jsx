import "./sharedstyle.scss"
import { v4 as uuidv4 } from 'uuid';

export default function RatingRow({ data }) {
    return (
        <div className='rating_main'>
            <div className='rating_head'>
                <img src={require('../../assets/images/follower.png')} alt="" />
                <h4>{data.name}</h4>
            </div>
            <div className="rating_container">
                {new Array(5).fill(0).map((item, i) => {
                    return (<div key={uuidv4()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.87" height="20.801">
                            <path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" fill={i < data.rating ? '#eed12b' : '#fff'} />
                        </svg>
                    </div>)
                })}
            </div>

            <p>{data.desc}</p>
        </div>
    )
}