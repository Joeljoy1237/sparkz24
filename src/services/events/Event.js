"use client"

import { api, protectedRoute } from "@/common/constants/constants"
import { privateGateway, publicGateway } from "../apiGateWay"
import { toast } from "react-toastify";

export const getDepartmentEvents = async (
    depId,
    setEventList,
    setLoading
) => {
    setLoading(true)
    try {
        const response = await publicGateway.get(api.getDepEvents + depId);
        //consoleresponse)
        setEventList(response?.data?.data);
        setLoading(false)
    } catch (error) {
        setLoading(false)
        //consoleerror)
    }

}

export const getAllEvents = async (
    setEvents
) => {
    try {
        const response = await publicGateway.get(api.getAllEvents)
        setEvents(response?.data?.data)
        //consoleresponse)
    } catch (error) {
        //consoleerror)
    }
}


export const getEventDetails = async (
    eventId,
    setEvents,
    setLoading
) => {
    setLoading(true);
    try {
        const response = await publicGateway.post(api.getEventDetailsById, {
            eventId
        })
        setEvents(response?.data?.data)
        console.log(response)
        setLoading(false);
    } catch (error) {
        setLoading(false);
        //consoleerror)
    }
}

export const getEventDetailsByToken = async (
    eventId,
    setEvents,
    setIsRegistered,
    setLoading
) => {
    setLoading(true)
    try {
        const response = await privateGateway.post(protectedRoute.getAllEventDetailsWithToken, {
            eventId
        })
        setEvents(response?.data?.data);
        setIsRegistered(response?.data?.registerStatus)
        console.log(response)
        setLoading(false)
    } catch (error) {
        setLoading(false)
        //consoleerror)
    }
}

export const eventRegistrationByBsc = async (
    eventId,
    team,
    router,
    setLoading,
    dep
) => {
    setLoading(true)
    try {
        const response = await privateGateway.post(protectedRoute?.registerWithTeam, {
            eventId,
            team,
            dep
        });
        toast.success("Registered successfully.", {
            theme: "dark"
        })
        router.push('/events/bsc');
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
        toast.error(error?.response?.data?.message, {
            theme: "dark"
        })
    }
}

export const eventRegistration = async (
    eventId,
    setIsRegistered
) => {
    try {
        const response = await privateGateway.post(protectedRoute?.registerEvent, {
            eventId,
        });
        toast.success(response?.data?.message, {
            theme: "dark"
        })
        setIsRegistered(true)
        // router.push('/events/'+path)
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message, {
            theme: "dark"
        })
    }
}