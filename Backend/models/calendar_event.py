# models/calendar_event.py
class CalendarEvent:
    events = []
    current_id = 1

    @classmethod
    def get_all(cls):
        return cls.events

    @classmethod
    def get(cls, event_id):
        return next((event for event in cls.events if event["id"] == event_id), None)

    @classmethod
    def create(cls, data):
        event = {
            "id": cls.current_id,
            "title": data["title"],
            "start": data["start"],
            "end": data["end"],
            "description": data.get("description", ""),
        }
        cls.events.append(event)
        cls.current_id += 1
        return event

    @classmethod
    def update(cls, event_id, data):
        event = cls.get(event_id)
        if event:
            event.update(data)
            return event
        return None

    @classmethod
    def delete(cls, event_id):
        event = cls.get(event_id)
        if event:
            cls.events.remove(event)
            return event
        return None