async function apiCaller({
    endpoint,
    method,
    body,
    extraHeaders,
}: {
    endpoint: string
    method?: string | undefined
    body?: string | undefined | any
    extraHeaders?: HeadersInit | undefined
}): Promise<Object> {
    try {
        return new Promise((resolve, reject) => {
            fetch(endpoint, {
                method: String(method || 'GET').toUpperCase(),
                body: body || undefined,
                headers: {
                    // 'Content-type': 'application/json; charset=utf-8',
                    ...(extraHeaders || {}),
                },
            })
                .then((response) => response.json())
                .then((json: Object | any) => resolve(json))
                .catch((error) => reject(error))
        })
    } catch (error) {
        throw error
    }
}

export default apiCaller
