export const useAsyncRequest = () => {
    const callRoute = async (route: string, method: string, body: any | undefined | null): Promise<void> => {
        try {
            await fetch(`http://localhost:3001/${route}`, {
                method: method,
                credentials: 'include',
                body: JSON.stringify(body),
            })
        } catch (err) {
            console.error(`Error: ${err}`)
        }
    }

    return { callRoute }
}
