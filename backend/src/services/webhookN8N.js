export async function triggerWorkFlow(data, traceID) {
    try {
        const workflowURL = process.env.N8N_WEBHOOK_URL

    const response = await fetch(workflowURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(traceID, ...data)
    })

    if(!response) {
        throw new Error("Error fetching to n8n")
    }
    } catch (error) {
        console.error("Error fetching to n8n", error.message)
    }
}