# ServerBL.py
import asyncio
import websockets
import json
from protocol import *
import protocolDB as db

db.init_db()
connected_clients = set()

async def handle_message(websocket, message):
    msg = receive_message(message)
    action = msg.get("action")
    data = msg.get("data")

    if action == "register":
        username = data["username"]
        password = data["password"]
        fullname = data["fullname"]
        try:
            db.add_user(username, password, fullname)
            await websocket.send(send_message("register_success", "נרשמת בהצלחה!"))
        except Exception as e:
            await websocket.send(send_message("register_failed", str(e)))

    elif action == "login":
        username = data["username"]
        password = data["password"]
        if db.check_user(username, password):
            await websocket.send(send_message("login_success", f"ברוך הבא {username}!"))
        else:
            await websocket.send(send_message("login_failed", "שם משתמש או סיסמה שגויים"))

    elif action == "get_grades":
        username = data["username"]
        grades = db.get_grades(username)
        await websocket.send(send_message("grades_list", grades))

async def client_handler(websocket):
    connected_clients.add(websocket)
    try:
        async for message in websocket:
            await handle_message(websocket, message)
    except websockets.ConnectionClosed:
        print("לקוח התנתק")
    finally:
        connected_clients.remove(websocket)

async def start_server():
    print("Server started on ws://localhost:12345")
    async with websockets.serve(client_handler, "localhost", 12345):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(start_server())
