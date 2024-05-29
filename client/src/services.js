export const baseUrl = 'http://localhost:5000';

export const postArequest = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, body
    });

    const data = await res.json();

    if(!res.ok) {
        let message = '';

        if (data?.message) {
            message = data.message;
        } else {
            message = data;
        }
        return {error: true, message};
    }
    return data;
};

export const getArequest = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if(!res.ok) {
        let message = 'ERROR!';

        if (data?.message) {
            message = data.message;
        } else {
            message = data;
        }
        return {error: true, message};
    }
    return data;
}