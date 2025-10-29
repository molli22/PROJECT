import asyncio
import websockets
import json
import time
from protocol import join_msg, chat_msg, leave_msg, make_message, TYPE_PING

async def read_stdin_and_send(ws, username):
    loop = asyncio.get_running_loop()
    while True:
        # run blocking input in executor so it doesn't block event loop
        text = await loop.run_in_executor(None, input, "")
        if text.lower() in ("/quit", "/exit"):
            await ws.send(leave_msg(username))
            await ws.close()
            break
        # send chat
        await ws.send(chat_msg(username, text, ts=time.time()))

async def receive_messages(ws):
    async for raw in ws:
        try:
            obj = json.loads(raw)
        except:
            print("raw:", raw)
            continue
        typ = obj.get("type")
        if typ == "history":
            print("[history]")
            for m in obj.get("messages", []):
                print(f"{m['from']}: {m['text']}")
        elif typ == "message":
            print(f"{obj.get('from')}: {obj.get('text')}")
        elif typ == "error":
            print("ERROR:", obj.get("message"))
        else:
            print("MSG:", obj)

async def main():
    username = input("username> ").strip() or "anon"
    uri = "ws://localhost:12345"
    async with websockets.connect(uri) as ws:
        await ws.send(join_msg(username))
        # run sender and receiver concurrently
        await asyncio.gather(
            read_stdin_and_send(ws, username),
            receive_messages(ws),
        )

if __name__ == "__main__":
    asyncio.run(main())
