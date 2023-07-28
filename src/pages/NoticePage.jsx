import {useEffect, useState} from "react";
import UserData from "../components/notice/UserData";
import "./NoticePage.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const API = "https://notice-d52ff-default-rtdb.firebaseio.com/notices.json";

const NoticePage = () => {
    const [users, setUsers] = useState({});

    const fetchUsers = async () => {
        // console.log("hello");
        try {
            let data;
            const res = await fetch("https://notice-53ee5-default-rtdb.firebaseio.com/notices.json",{
                method: "GET",
                mode: "cors",
                headers: {
                    
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),  
            });
            // console.log(res); 
            const dat = await res.json();
            // console.log(dat);
         
            setUsers(dat);
            
           
            
        } catch (e) {
            // console.error(e)
        }
    }

//  console.log(users);
    useEffect(() => {
        fetchUsers();
       
    }, [])
    return<> <Header/>
    <div className="notice">
    <h1>LATEST NOTIFICATIONS:</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Notice</th>
                <th>Link</th>
              
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </div>
    <Footer/>
    </>
}

export default NoticePage;