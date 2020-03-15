# README

This is a record for the pino-caller stack trace offset adjustment.

## Detail results

### 12.16.1

```bash
$ nvm use v12.16.1
Now using node v12.16.1 (npm v6.13.4)

$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v12.16.1
{"level":30,"time":1584284020692,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Module._compile (internal/modules/cjs/loader.js:1158:30)","v":1}
{"level":30,"time":1584284020696,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:8:6)","v":1}
{"level":30,"time":1584284020697,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Module._compile (internal/modules/cjs/loader.js:1158:30)","v":1}
```

After update the stack trace offset:

```bash
$ nvm use v12.16.1
Now using node v12.16.1 (npm v6.13.4)

$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v12.16.1
{"level":30,"time":1584284503667,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:6:8)","v":1}
{"level":30,"time":1584284503672,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.showInfo (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:13:10)","v":1}
{"level":30,"time":1584284503673,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:10:8)","v":1}
```

### 10.19.0

```bash
$ nvm use v10.19.0
Now using node v10.19.0 (npm v6.13.4)

$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v10.19.0
{"level":30,"time":1584283941437,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Module._compile (internal/modules/cjs/loader.js:778:30)","v":1}
{"level":30,"time":1584283941440,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:8:6)","v":1}
{"level":30,"time":1584283941440,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Module._compile (internal/modules/cjs/loader.js:778:30)","v":1}
```

After update the offset:

```bash
$ nvm use v10.19.0
Now using node v10.19.0 (npm v6.13.4)

$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v10.19.0
{"level":30,"time":1584284431718,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:6:8)","v":1}
{"level":30,"time":1584284431723,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.showInfo (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:13:10)","v":1}
{"level":30,"time":1584284431723,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:10:8)","v":1}
```


### v8.17.0

```bash
$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v8.17.0
{"level":30,"time":1584283827548,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Module._compile (module.js:653:30)","v":1}
{"level":30,"time":1584283827551,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:8:6)","v":1}
{"level":30,"time":1584283827551,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Module._compile (module.js:653:30)","v":1}
```

After update the stack trace offset:

```bash
$ nvm use v8.17.0
Now using node v8.17.0 (npm v6.14.2)

$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v8.17.0
{"level":30,"time":1584284329321,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:6:8)","v":1}
{"level":30,"time":1584284329323,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.showInfo (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:13:10)","v":1}
{"level":30,"time":1584284329324,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:10:8)","v":1}
```


### v6.17.1

```bash
$ nvm use v6.17.1
Now using node v6.17.1 (npm v3.10.10)

$ npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v6.17.1
{"level":30,"time":1584284077480,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Module._compile (module.js:577:32)","v":1}
{"level":30,"time":1584284077486,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:8:6)","v":1}
{"level":30,"time":1584284077486,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Module._compile (module.js:577:32)","v":1}
```

After adjust the stack trace offset:

```bash
npm start

> pino.caller-test@1.0.0 start /Users/roy/workspace/roy/pino.caller-test
> node -v && node index.js

v6.17.1
{"level":30,"time":1584284199868,"msg":"[caller-test.js] Log in module scope, the line number should be caller-test.js:6","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:6:8)","v":1}
{"level":30,"time":1584284199874,"msg":"[caller-test.js] Log in function scope, the line number should be caller-test.js:13","caller":"Object.showInfo (/Users/roy/workspace/roy/pino.caller-test/caller-test.js:13:10)","v":1}
{"level":30,"time":1584284199875,"msg":"[index.js] Log in module scope, the line number should be index.js:10","caller":"Object.<anonymous> (/Users/roy/workspace/roy/pino.caller-test/index.js:10:8)","v":1}
```
