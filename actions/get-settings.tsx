import { Settings } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL_STORES}/8bf0a680-cfc8-47af-a93c-ec1b16e8954e`

const getSettings = async (): Promise<Settings> => {

    const res = await fetch(`${URL}`)
    const json = await res.json();
    return json.data;
}

export default getSettings;
