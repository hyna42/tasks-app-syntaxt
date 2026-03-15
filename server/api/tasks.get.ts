export default defineEventHandler(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    return [
        {
            id: 1,
            title: "Learn Nuxt",
            done: false
        },
        {
            id: 2,
            title: "Learn Vue",
            done: false
        }
    ]
})