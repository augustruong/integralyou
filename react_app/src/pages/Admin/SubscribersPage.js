import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function SubscribersPage(){
    const [subscribers, setSubscribers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getSubscribers();
    }, []);
  
    function getSubscribers() {
        axios.get(words.api.admin.subscriber.list).then(function(response) {
            setSubscribers(response.data);
        });
    }
    return(
        <div className="admin subscribers">
            <div className="header">
                <a href="/admin/home">Back to Home</a>
                <div className="flex-row justify-space-btw">
                    <h1>Subscribers List</h1>
                </div>
            </div>
            <div className="body">
                <table class="dbTable">
                    <thead>
                        <tr>
                            <th className="index">Index</th>
                            <th className="name">Name</th>
                            <th className="email">Email</th>
                            <th className="date">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber,key) => 
                        <tr key={key}>
                            <td>{subscriber.id}</td>
                            <td>{subscriber.firstname} {subscriber.lastname}</td>
                            <td>{subscriber.email}</td>
                            <td>{subscriber.date}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}