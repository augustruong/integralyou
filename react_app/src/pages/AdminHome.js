import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminHome(){
    return(
        <div>
        <div className="container h-100">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h1>Welcome Home</h1>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    </div>
    )
}