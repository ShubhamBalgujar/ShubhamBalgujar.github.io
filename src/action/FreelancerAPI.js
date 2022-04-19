export const GetFreelancerList = () => {
    const requestUrl = 'https://assets.toothsi.in/assets/json/test.json';
    return new Promise((resolve, reject) => {
        fetch(requestUrl, {
            headers: {},
            method: "GET"
        }).then(handleResponse).then(([responseJson]) => {
            resolve(responseJson);
        }).catch((error) => {
            reject(error);
        })
    })
}

const handleResponse = (response) => {
    return new Promise((resolve) => {
        response.json().then((res) => {
            if (response.ok || response.status == 200) {
                resolve([res]);
            } else {
                console.log("Error from API with response code: " + response.status, res)
                resolve([{ Message: "Something went wrong" }]);
            }
        }).catch((error) => {
            console.log("Error from API with response code: " + response.status, response);
            resolve([{ Message: "Something went wrong" }]);
        });
    })
}