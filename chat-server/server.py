from fastapi import FastAPI, WebSocket
from fastapi.websockets import WebSocketDisconnect
from typing import List
import asyncio
import re

app = FastAPI()
connections: List[WebSocket] = []

DOCUMENTS = {
    "mining equipment module 1": "Specs for Mining Equipment Module 1:\n- Weight: 500kg\n- Power: 1200W\n- Output: 10 tons/hour\n...",
    "mining equipment module 2": "Specs for Mining Equipment Module 2:\n- Weight: 700kg\n- Power: 1500W\n- Output: 15 tons/hour\n...",
    
}

def find_document(query):
    print(f"User query: {query}")
    match = re.search(r"mining equipment module \d+", query.lower())
    if match:
        key = match.group(0)
        print(f"Matched key: {key}")
        return DOCUMENTS.get(key, f"Sorry, I don't have specs for '{key}'.")
    print("No match found")
    return "Sorry, I couldn't understand your request. Try: 'Get me the specs of mining equipment module 1'"

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    connections.append(ws)
    try:
        while True:
            data = await ws.receive_text()
            
            for conn in connections:
                if conn is not ws:
                    await conn.send_text(data)
            # Bot logic: respond if user asks for specs
            if "specs" in data.lower() or "documentation" in data.lower():
                asyncio.create_task(bot_response(data))
    except WebSocketDisconnect:
        connections.remove(ws)

async def bot_response(user_message):
    await asyncio.sleep(1)
    doc = find_document(user_message)
    bot_message = f"🤖 DocBot: {doc}"
    for conn in connections:
        await conn.send_text(bot_message)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
