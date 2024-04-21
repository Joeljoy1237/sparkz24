"use client"

import { api, protectedRoute } from "@/common/constants/constants"
import { privateGateway, publicGateway } from "../apiGateWay"
import { toast } from "react-toastify";

export const getDepartmentEvents = async (
    depId,
    setEventList
) => {
    try {
        const response = await publicGateway.get(api.getDepEvents + depId);
        //consoleresponse)
        setEventList(response?.data?.data);
    } catch (error) {
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
    setEvents
) => {
    try {
        const response = await publicGateway.post(api.getEventDetailsById, {
            eventId
        })
        setEvents(response?.data?.data)
        console.log(response)
    } catch (error) {
        //consoleerror)
    }
}

export const getEventDetailsByToken = async (
    eventId,
    setEvents,
    setIsRegistered
) => {
    try {
        const response = await privateGateway.post(protectedRoute.getAllEventDetailsWithToken, {
            eventId
        })
        setEvents(response?.data?.data);
        setIsRegistered(response?.data?.data?.isRegistered)
        console.log(response)
    } catch (error) {
        //consoleerror)
    }
}

export const eventRegistrationByBsc = async (
    eventId,
    team,
    router
) => {
    try {
        const response = await privateGateway.post(protectedRoute?.registerWithTeam, {
            eventId,
            team
        });
        toast.success("Registered successfully.", {
            theme: "dark"
        })
        router.push('/events/bsc')
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message, {
            theme: "dark"
        })
    }
}

export const eventRegistration = async (
    eventId,
    router,
    path,
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