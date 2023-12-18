export default async function getResponse(path, query) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${path}`);
        return response.json();
    } catch (error) {
        return { error: error.message, status: error.status };
    }
}
