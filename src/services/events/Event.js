"use client"

import { api, protectedRoute } from "@/common/constants/constants"
import { privateGateway, publicGateway } from "../apiGateWay"

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
    setEvents
) => {
    try {
        const response = await privateGateway.post(protectedRoute.getAllEventDetailsWithToken, {
            eventId
        })
        setEvents(response?.data?.data)
        console.log(response)
    } catch (error) {
        //consoleerror)
    }
}

export const eventRegistrationByBsc = async (
    eventId,
    team
) => {
    try {
        const response = await privateGateway.post(protectedRoute?.registerWithTeam, {
            eventId,
            team
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}