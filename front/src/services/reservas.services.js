import axios from "axios";
import { URL } from "../constants/constants";

async function getReservas() {
    try {
        const response = await axios.get(URL)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

async function saveReserva(reserva) {
    try {
        const response = await axios.post(URL, reserva)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default { getReservas, saveReserva }