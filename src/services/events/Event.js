"use client"

import { api } from "@/common/constants/constants"
import { publicGateway } from "../apiGateWay"

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