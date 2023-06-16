import { IUnits } from "@/interfaces/response";

export const getUnits = async (): Promise<IUnits[]> => {
    const url = "http://ippon.sa-east-1.elasticbeanstalk.com/api/v1/unidade";

    const options = {
        method: "GET",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicnVuby5ob3JuQHN0cmF0dXNwb3J0LmNvIiwiaWF0IjoxNjg2NDczMzc4LCJleHAiOjE2ODczMzczNzh9.BlGZIxlWGmVokkgVifB2UnPCBpucpeMGdFoj2aCZFBs",
        },
    };

    const res = await fetch(url, options);
    const units = await res.json();

    return units.content;
};
