import { Settings } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL_STORES}/15812c1b-dc74-4ae2-b9c0-4998e2ba2a64`

const getSettings = async (): Promise<Settings> => {

    const res = await fetch(`${URL}`)
    const json = await res.json();
    return json.data;
}

export default getSettings;
