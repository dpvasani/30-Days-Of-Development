import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className="max-w-5xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                <img src={data.avatar_url} alt="GitHub Avatar" width={150} className="rounded-full shadow-lg mb-4" />
                <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
                <p className="text-gray-300 mb-4">@{data.login}</p>
                <p className="text-lg mb-2">Followers: {data.followers}</p>
                <p className="text-lg mb-4">Following: {data.following}</p>
                {data.bio && <p className="text-center italic text-gray-400 mb-4">{data.bio}</p>}
                {data.location && <p className="text-center text-gray-400 mb-4">Location: {data.location}</p>}
                <a 
                    href={data.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    View GitHub Profile
                </a>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Public Repositories: {data.public_repos}</h2>
                {/* Additional Info could be added here, like a list of repositories if needed */}
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dpvasani');
    return response.json();
}
