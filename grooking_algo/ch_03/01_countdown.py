def countdown(i):
    print(i)
    if i <= 0:  # base case
        print("BLAST OFF")
    else:  # recursive case
        countdown(i - 1)


countdown(10)
