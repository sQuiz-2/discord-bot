/* eslint-disable import/first */
require('dotenv').config();

import StreamBroadcaster from './src/core/StreamUpdate';
import Discord from './src/services/Discord';

(async function () {
  await Discord.login();
  const streamBroadcaster = new StreamBroadcaster();
  // When discord is ready
  Discord.client.on('ready', streamBroadcaster.redisSubscribe.bind(streamBroadcaster));
})();
