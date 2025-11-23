# protocol.py
import json


#converts the dictionary into a string in JSON format.
def send_message(action, data):
    return json.dumps({"action": action, "data": data}, ensure_ascii=False)

#converts the JSON string into a python dictionary
def receive_message(message):
    return json.loads(message)

#get working days
#Class Client Teacher asks for "Working days" from server
#server answers, sends what days he teaches. (eto tipa evo Schedule)

def get_working_days_msg(teacher_id):
    return send_message("get_working_days", teacher_id)




