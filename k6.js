import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 100,
  rps: 1000,
  duration: '300s',
}

export default function() {
  let randomReqId = Math.floor((Math.random() * 1000000) + 9000000);

  let firstRequest = {
    method: 'GET',
    url: `http://127.0.0.1:3043/api/photos/${randomReqId}`,
    tags: { name: 'Get based on restaurant ID' }
  }

  let secondRequest = {
    method: 'GET',
    url: `http://127.0.0.1:3043/api/photos/${randomReqId}`,
    tags: { name: 'Get based on restaurant ID' }
  }

  let thirdRequest = {
    method: 'GET',
    url: `http://127.0.0.1:3043/api/photos/${randomReqId}`,
    tags: { name: 'Get based on restaurant ID'}
  }

  let resp = http.batch([firstRequest, secondRequest, thirdRequest]);

};