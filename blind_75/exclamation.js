function exclamation(points, isGoodQuestion) {
  const responses = new Map({
    5: "Nice!",
    25: "Sweet!",
    99: "Woot!",
    105: "HOLY CRAP!!",
  });
  const responses = [
    "Nice!",
    "Sweet!",
    "Woot!",
    "HOLY CRAP!!",
    "DAM SON:",
    "OK YOU CAN STOP NOW:",
  ];

  if (isGoodQuestion) {
    return "Thanks for the great question!";
  }
  if (points < 5) {
    return "Nice!";
  }
  if (points < 25) {
    return "Sweet!";
  }
  if (points < 99) {
    return "Woot!";
  }
  if (points < 105) {
    return "HOLY CRAP!!";
  }
  if (points > 199 && points < 206) {
    return "DAM SON:";
  }
  if (points > 299 && points < 306) {
    return "OK YOU CAN STOP NOW:";
  }

  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];
  return randomResponse;
}
