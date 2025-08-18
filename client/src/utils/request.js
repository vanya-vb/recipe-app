const request = async (method, url, data, options = {}) => {
    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        };
    }

    try {
        const response = await fetch(url, options);
        const responseContentType = response.headers.get('Content-Type');

        if (!responseContentType) {
            return;
        }

        if (!response.ok) {
            const err = await response.json();

            throw err;
        }

        if (response.status === 204) {
            return response;
        } else {
            const result = await response.json();

            return result;
        }

    } catch (err) {
        console.log(err)
        throw err;
    }
};

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
};