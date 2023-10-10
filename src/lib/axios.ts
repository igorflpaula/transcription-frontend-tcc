import axios from "axios";

export const api = axios.create({
    baseURL: 'http://whisper-ai-backend.us-west-2.elasticbeanstalk.com'
})
