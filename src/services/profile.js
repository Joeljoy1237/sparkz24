import { protectedRoute } from "@/common/constants/constants"
import { privateGateway } from "./apiGateWay"

export const getProfile = async (
    setRegEvents,
    setLoading
) => {
    setLoading(true)
    try {
        const response = await privateGateway.get(protectedRoute.getProfileroute);
        console.log(response?.data?.data?.registeredEvents)
        setRegEvents(response?.data?.data?.registeredEvents);
        setLoading(false)
    } catch (error) {
        setLoading(false)
    }
}