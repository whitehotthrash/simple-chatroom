# Simple Chatroom

A minimal end‑to‑end WebSocket chatroom demo.

## Structure

- **chat-server/**: FastAPI WebSocket server  
- **chat-client/**: React frontend  

## Run

1. \`cd chat-server && uvicorn server:app --reload\`  
2. \`cd ../chat-client && npm start\`  

## Run on Local Network

1. **Start the server:**
   ```sh
   cd chat-server
   uvicorn server:app --host 0.0.0.0 --port 8000 --reload
   ```

2. **Find your computer's local IP address:**
   - On macOS/Linux: `ifconfig` or `ip addr`
   - On Windows: `ipconfig`
   - Look for something like `192.168.x.x`

3. **Update the WebSocket URL in `chat-client/src/App.js`:**
   ```js
   ws.current = new WebSocket('ws://YOUR_LOCAL_IP:8000/ws');
   ```
   Replace `YOUR_LOCAL_IP` with your actual IP address.

4. **Start frontend:**
   ```sh
   cd ../chat-client
   HOST=0.0.0.0 npm start
   ```
   (On Windows PowerShell: `$env:HOST="0.0.0.0"; npm start`)

5. **On another device on the same network, open a browser and go to:**
   ```
   http://YOUR_LOCAL_IP:3000
   ```

6. **Try chatting between two machines**

## Documentation Bot

  You can ask the chatroom for documentation, e.g.: "Get me the specs of mining equipment module 1"
  DocBot will return the specs