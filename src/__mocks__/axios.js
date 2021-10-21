const mockResponse = {
    data: {
        results:[
            {
                name : {
                    first: "name",
                    last: "last"
                },
                picture: {
                    large: "ui4wjrnnfi4jnjionun"
                },
                login : {
                    username: "TheGoat"
                }
            }
        ]
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}