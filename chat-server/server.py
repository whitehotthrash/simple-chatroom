from fastapi import FastAPI, WebSocket
from fastapi.websockets import WebSocketDisconnect
from typing import List

app = FastAPI()
connections: List[WebSocket] = []

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    connections.append(ws)
    try:
        while True:
            data = await ws.receive_text()
            # broadcast to everyone
            for conn in connections:
                if conn is not ws:
                    await conn.send_text(data)
    except WebSocketDisconnect:
        connections.remove(ws)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)
