const PORT = 8000
const express = require ('express')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use (cors())


const API_KEY = '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'



app.post('/completion', async (req, res) => {
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: "how are your:"}],
            max_tokens: 100,
        })
    }
    try {

        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log('Your server is RUNNING ON port ' + PORT))


