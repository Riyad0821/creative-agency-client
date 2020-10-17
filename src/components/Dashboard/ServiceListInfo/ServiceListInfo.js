import React, { useEffect, useState } from 'react';
import './ServiceListInfo.css';

import SingleUserList from '../SingleUserList/SingleUserList';
const ServiceListInfo = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('https://guarded-sea-90630.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setList(data);
            })
    }, [])
    return (
        <div>
            <div>
                {
                    list.length === 0 &&
                    <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                    </div>

                }
            </div>
            <div>
                {
                    list.map(item => <SingleUserList item={item} key={item._id}></SingleUserList>)
                }
            </div>
        </div>
    );
};

export default ServiceListInfo;