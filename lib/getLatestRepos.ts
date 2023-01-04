import axios, { AxiosResponse } from "axios";
import userData from "../constants/data";

const getLatestRepos = async(data: { [x: string]: any }, token: (string | undefined)) => {
    console.log("data", data);

    try {
        const username = userData.githubUsername;
        var res: AxiosResponse<any, any>;

        // TODO test without var keyword
        if (token) {
            var res = await axios.get(
                `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
                {
                    headers: {
                        authorization: `token ${token}`,
                    },
                }
            );
        }
        else {
            var res = await axios.get(
                `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
            );
        }

        let repos = res.data.items;
        let latestSixRepos = repos.splice(0, 6);
        return latestSixRepos;

    } catch (err) {
        console.log(err);
    }
}

export default getLatestRepos;
