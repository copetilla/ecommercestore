import { Settings } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL_STORES}/fb33dab5-98be-4a19-a637-eb32363bf50f`

const getSettings = async (): Promise<Settings> => {

    const res = await fetch(`${URL}`)
    const json = await res.json();
    return json.data;
}

export default getSettings;
