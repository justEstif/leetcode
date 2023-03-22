from collections import deque


def person_is_seller(name: str):
    return name[-1] == 'm'


# directed graph
graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []


def search(name: str):
    """
    search whether the person's name ends with the letter 'm'
    if it does, they are the mango seller, or add their friends to queue
    """
    search_queue = deque()
    search_queue += graph[name]  # add all of you's neighbors to queue
    searched = []

    while search_queue:
        person = search_queue.popleft()  # grab the first person

        if not person in searched:
            if person_is_seller(person):
                print(f"{person} is a mango seler!")
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False


search("you")
