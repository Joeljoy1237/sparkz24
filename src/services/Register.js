"use client"

import { backend } from '@/common/constants/constants';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { publicGateway } from './apiGateWay';

export const userRegister = async (
    firstName,
    lastName,
    email,
    mobileNo,
    college,
    department,
    semester,
    password,
    setLoading
    // toast
) => {
    setLoading(true)
    try {
        const response = await publicGateway.post("/register",{
            firstName,
            lastName,
            email,
            mobileNo,
            college,
            department,
            semester,
            password,
        })
        console.log(response)
        toast.success(response?.data?.message, {
            position: "bottom-center",
            theme:"colored"
        });
        setLoading(false)
        return true
    } catch (error) {
        setLoading(false)
        toast.error(error?.response?.data?.message, {
            position: "bottom-center",
            theme:"colored"
        });
        return false
    }
}