import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../Action/index'
import { USER } from '../constants';
function Logout(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        logouthandler();
    }, [])

    const logouthandler = () => {

        fetch('/logout_user', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch(userLoginAction(USER, false))
            history.push('/login', { replace: true })
            window.location.reload()

            if (res !== 200) {
                const error = new Error(res.error)
                throw error;
            }
        }).catch((error) => console.log(error))
    }
    return (
        <div>
        </div>
    );
}

export default Logout;