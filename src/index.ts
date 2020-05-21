import got from "got";

function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function uuid() {
  return [
    s4(),
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    s4(),
    s4(),
  ].join("");
}

export interface EventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export class Analytics {
  private protocolVersion: string;
  private trackingID: string;
  private hitType = "event";
  private clientID: string | null = "";
  constructor(trackingID: string, protocolVersion = "1") {
    this.trackingID = trackingID;
    this.protocolVersion = protocolVersion;
  }
  send(data: EventData) {
    const form: any = {
      v: this.protocolVersion,
      tid: this.trackingID,
      cid: this.clientID ? this.clientID : uuid(),
      t: this.hitType,
      ec: data.category,
      ea: data.action,
    };
    if (data.label) {
      form.el = data.label;
    }
    if (data.value) {
      form.ev = data.value;
    }
    return got
      .post("https://www.google-analytics.com/collect", {
        form,
      })
      .then((res) => {
        return { res, form };
      });
  }
}
