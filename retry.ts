const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function retry(
  func: () => Promise<any>,
  attempts: number,
  delay: number
) {
  let err;
  while (attempts > 0) {
    try {
      return await func();
    } catch (e) {
      if (attempts > 1) await sleep(delay);
      err = e;
      console.log(e + attempts);
      attempts--;
    }
  }
  throw err;
}

// Example
const mayFail = async () =>
  Math.random() > 0.7 ? "Success" : Promise.reject("Failed");
retry(mayFail, 3, 800).then(console.log("success")).catch(console.error);
