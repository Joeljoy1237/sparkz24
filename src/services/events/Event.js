"use client"

import { api } from "@/common/constants/constants"
import { publicGateway } from "../apiGateWay"

export const getDepartmentEvents = async (
    depId,
    setEventList
) => {
    try {
        const response = await publicGateway.get(api.getDepEvents + depId);
        console.log(response)
        setEventList(response?.data?.data);
    } catch (error) {
        console.log(error)
    }

}