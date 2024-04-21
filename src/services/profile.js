import { protectedRoute } from "@/common/constants/constants"
import { privateGateway } from "./apiGateWay"

export const getProfile = async ()=>{
    try {
        const response = await privateGateway.get(protectedRoute.getProfileroute);
        console.log(response)
    } catch (error) {
        
    }
}