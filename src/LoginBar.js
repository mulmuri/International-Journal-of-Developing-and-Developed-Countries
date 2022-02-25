import React from 'react';
import { Button } from '@mui/material';

export default function LoginBar() {
    return (
        <div className="bar">
            <Button style={{
                margin: "4px",
                marginRight: "0px",
                height: "30px",
                width: "140px",
                fontSize: "12px",
                color: "black",
                borderRadius: "0px",
                border: "lightgray 1px solid",
                fontFamily: "'Noto Sans KR', sans-serif"
            }} >Login</Button>
            <Button style={{
                margin: "4px",
                marginRight: "0px",
                height: "30px",
                width: "140px",
                fontSize: "12px",
                color: "black",
                borderRadius: "0px",
                border: "lightgray 1px solid",
                fontFamily: "'Noto Sans KR', sans-serif"
            }} >Register</Button>
        </div>
    );
}