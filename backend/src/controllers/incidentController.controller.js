import { analyzeIncident } from "../services/agentFunctionality.js";
import { triggerWorkFlow } from "../services/webhookN8N.js";

export async function handleIncident(req, res) {
    try {
        const {description} = req.data
        const file = req.file
        const traceId = `INC-${Date.now()}`
        
        console.log(`[INFO] Beginning with tracing`);
        if(file) {
            console.log("File received")
        }
        const agentResponse = await analyzeIncident(description, file, traceId)
        const webhookResponse = await triggerWorkFlow(agentResponse, traceId)
        console.log(webhookResponse);
        res.status(202).json({
            message: "Tracing completed",
            analysis: agentResponse
        })
    } catch (error) {
        res.status(500).json({error: "Error in server"})
    }
}