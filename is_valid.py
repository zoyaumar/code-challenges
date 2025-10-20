def is_valid(string: str) -> bool:
    pairs = {"{":"}", "(":")", "[":"]"}
    stack = []
    for ch in string:
        if ch in pairs.keys():
            stack.append(ch)
        elif len(stack) == 0:
            return False
        elif ch != pairs.get(stack.pop()):
            return False
    return len(stack) == 0

print(is_valid("{()[]"))
