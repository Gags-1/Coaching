import { motor1, motor2, motor3, Teacher} from "../assets";


export const Posts = [
    {
        postId: "#1",
        username: "John Doe",
        userProfile: Teacher,
        Date: "12 July 2023",
        caption: "This is the note for science explaining the working of a motor.",
        noteImg: [motor1, motor2, motor3]
    },
    {
        postId: "#2",
        username: "John Doe",
        userProfile: Teacher,
        Date: "13 July 2023",
        caption: "This is the note for science explaining the working of a motor.",
        noteImg: [motor1, motor2, motor3, Teacher]
    }
]