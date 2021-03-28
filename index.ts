/* eslint-disable import/first */
require('dotenv').config();

import StreamBroadcaster from './src/core/StreamUpdate';
import Discord from './src/services/Discord';

(function () {
  const streamBroadcaster = new StreamBroadcaster();
  // When discord is ready
  Discord.client.on('ready', streamBroadcaster.redisSubscribe.bind(streamBroadcaster));
})();
