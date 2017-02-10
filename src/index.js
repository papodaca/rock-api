import middleware from "./lib/middleware"

const makeResponce = (event, context, cb) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify({
      event: Object.keys(event),
      context: Object.keys(context),
      cb: typeof cb
    })
  };
};

export const handler = (event, context, cb) => {
  context.succeed(makeResponce.apply(null, arguments));
};
