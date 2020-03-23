import React, { Component } from 'react';
import '../component/Covid.css';
import thailand from '../thailand.jpg';

export default class Covid extends Component {
    state = {
        loading: true,
        data: null
    }
    async componentDidMount() {
        const url = "https://covid19-cdn.workpointnews.com/api/constants.json?fbclid=IwAR2K99YaN5jUhEZhXgwdWf2eLBL3QK1bQQ2SSkYzgarlIE23Y027XIgJ5fU";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            data: data,
            loading: false
        })
    }
    render() {
        return (
            <>
                    <div className="container">
                        <h1>Thailand Covid Tracking</h1>
                        <br />
                        <div className="container-data">
                            {this.state.loading ?
                                <div>loading...</div>
                                :
                                <div> <img className="thailand" src={thailand} alt="thailand" />
                                    <br />

                            หายแล้ว: {this.state.data.หายแล้ว}
                                    <br />
                            เสียชีวิต: {this.state.data.เสียชีวิต}
                                    <br />
                            ติดเชื้อเพิ่มวันนี้: {this.state.data.เพิ่มวันนี้}
                                    <br />
                            กำลังรักษา: {this.state.data.กำลังรักษา}
                                    <br />
                            จำนวนผู้ติดเชื้อ: {this.state.data.ผู้ติดเชื้อ}
                                    <br />
                            (อัพเดทวันที่: {this.state.data.เพิ่มวันที่})
                                </div>
                            }

                        </div>
                        <div className="footer">All Right Reserved 2020 @Prach Butpa</div>
                    </div>
            </>
        );
    }
}


