import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function LettersPage(){
    const [letters, setLetters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getLetters();
    }, []);
  
    function getLetters() {
        axios.get(words.api.admin.letter.list).then(function(response) {
            setLetters(response.data);
        });
    }
    return(
        <div className="admin letters">
            <div className="header">
                <a href="/admin/home">Back to Home</a>
                <div className="flex-row justify-space-btw">
                    <h1>Letters List</h1>
                </div>
            </div>
            <div className="body">
            <table class="dbTable">
                    <thead>
                        <tr>
                            <th className="name">Name</th>
                            <th className="email">Email</th>
                            <th className="phone">Phone</th>
                            <th className="content">Subject/Message</th>
                            <th className="date">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {letters.map((letter,key) => 
                        <tr key={key}>
                            <td>{letter.firstname} {letter.lastname}</td>
                            <td>{letter.email}</td>
                            <td>{letter.phone}</td>
                            <td>{letter.subject}<br/>{parse(letter.message)}</td>
                            <td>{letter.date}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}