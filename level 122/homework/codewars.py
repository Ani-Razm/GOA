def bouncing_ball(h, bounce, window):
    if h > 0 and 1 > bounce > 0 and window < h:
        count = 1
        h = h * bounce
        while h > window:
            count += 2
            h = h * bounce
        return count
    return -1