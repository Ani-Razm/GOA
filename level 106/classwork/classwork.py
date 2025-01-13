# Match My Husband
def match(usefulness, months):
    return 'Match!' if 100 * 0.85 ** months <= sum(usefulness) else 'No match!'