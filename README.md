# vscode-google-analytics

> Simple vscode extension google analytics

## Document

- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters)

## Install

```bash
$ yarn add @dineug/vscode-google-analytics
or
$ npm install @dineug/vscode-google-analytics
```

## Usage

```javascript
import { Analytics } from "@dineug/vscode-google-analytics";

const analytics = new Analytics("UA-XXXXXXXXX-X");
analytics
  .send({
    category: "test ec",
    action: "test ea",
    label: "test el",
    value: 50,
    clientID: "clientID",
  })
  .then((data) => {
    console.dir(data);
  });
```

| Name     | Type   | Describe |
| -------- | ------ | -------- |
| category | String | Required |
| action   | String | Required |
| label    | String | Optional |
| value    | Number | Optional |
| clientID | String | Optional |
