export const navLinks = [
    {
        title:"home",
        link:"/",
        hr:true
    },
    {
        title:"about us",
        link:"/aboutus",
        hr:true
    },
    {
        title:"events",
        link:"/events",
        hr:true
    },
    {
        title:"contact us",
        link:"/contact",
        hr:false
    }
]

export const depLogo = [
    {
        title:"Computer Science & Engineering",
        img:"/events/cs.svg",
        url:"/events/cse"
    },
    {
        title:"Electrical & Electronics Engineering",
        img:"/events/cs.svg",
        url:"/events/eee"
    },
    {
        title:"Mechanical Engineering",
        img:"/events/cs.svg",
        url:"/events/mech"
    },
    {
        title:"Civil Engineering",
        img:"/events/cs.svg",
        url:"/events/civil"
    },
    {
        title:"Basic Science & Humanities",
        img:"/events/cs.svg",
        url:"/events/bsc"
    },
]

export const backend = "https://sparkz-backend.onrender.com/api/v2/user"

export const api = {
    getAllEvents:"/getAllEvents",
    getFeaturedEvents:"/getFeaturedEvents",
    getDepEvents:"/getEventList/",
    getEventDetailsById:"/getEventDetailsById"
}

export const protectedRoute = {
    getAllEventDetailsWithToken :"/getEventDetailsByIdForLoggedInUsers/",
    registerWithTeam:"/registerWithTeam",
    registerEvent:"/eventRegister",
    getProfileroute: "/getUserDetails"
}