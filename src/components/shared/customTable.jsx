import "./sharedstyle.scss";
import { v4 as uuidv4 } from 'uuid';

export default function CustomTable({ tableHeader, tableData }) {
    return (
        <div className="table_main">
            <table>
                <thead>
                    <tr>
                        {tableHeader.map((head) => {
                            return <th key={head.label}>{head.label}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item) => {
                            return (
                                <tr key={uuidv4()}>
                                    {tableHeader.map((head) => {
                                        return <td style={{ width: `calc(100% / ${tableHeader.length})` }} key={uuidv4()}>
                                            <div className={head.styleClass ? `${head.styleClass} ${item[head.key]}` : ''} >
                                                {head.styleClass == 'follower' && <img height={20} width={20} style={{marginRight:"10px"}} src={require("../../assets/images/follower.png")} alt="" />}
                                                <span>{item[head.key]}</span>
                                            </div>
                                        </td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}