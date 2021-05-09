import React, { useState, useEffect } from 'react';

//create context
export const UserContext = React.createContext();

//provider
export function UserProvider(props) {

    const [userInfo, setUserInfo] = useState({
        token: null,
        user_id: null
    });

    useEffect(() => {
        if (userInfo.token == null) {
            setUserInfo({
                token: window.localStorage.getItem("token"),
                user_id: window.localStorage.getItem("user_id")
            })
        }
    }, [])

    const updateUserInfo = (userInfo) => {
        window.localStorage.setItem("token", userInfo.token)
        window.localStorage.setItem("user_id", userInfo.user_id)

        setUserInfo(userInfo)
    }
    // console.log(userInfo);
    return (
        <UserContext.Provider 
        value={[userInfo,updateUserInfo]}>
            {props.children} 
            {/* tat ca nhung cai gi bao trong provider -> dung value */}
        </UserContext.Provider>
    )
}

//export 2 thang` -> deconstruct