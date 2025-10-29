# protocol.py
import json

def send_message(action, data):
    return json.dumps({"action": action, "data": data}, ensure_ascii=False)

def receive_message(message):
    return json.loads(message)
