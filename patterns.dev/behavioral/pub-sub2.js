class PubSub {
  constructor() {
    // Storage for topics that can be broadcast
    // or listened to
    this.topics = {};

    // A topic identifier
    this.subUid = -1;
  }

  publish(topic, args) {
    if (!this.topics[topic]) {
      return false;
    }

    const subscribers = this.topics[topic];
    let len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  }

  subscribe(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }

    const token = (++this.subUid).toString();
    this.topics[topic].push({
      token,
      func,
    });
    return token;
  }

  unsubscribe(token) {
    for (const m in this.topics) {
      if (this.topics[m]) {
        for (let i = 0, j = this.topics[m].length; i < j; i++) {
          if (this.topics[m][i].token === token) {
            this.topics[m].splice(i, 1);

            return token;
          }
        }
      }
    }
    return this;
  }
}

const pubsub = new PubSub();

// Return the current local time to be used in our UI later
const getCurrentTime = () => {
  const date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear();
  const t = date.toLocaleTimeString().toLowerCase();

  return `${m}/${d}/${y} ${t}`;
};

// Add a new row of data to our fictional grid component
const addGridRow = data => {
  // ui.grid.addRow( data );
  console.log(`updated grid component with:${data}`);
};

// Update our fictional grid to show the time it was last
// updated
const updateCounter = data => {
  // ui.grid.updateLastChanged( getCurrentTime() );
  console.log(`data last updated at: ${getCurrentTime()} with ${data}`);
};

// Update the grid using the data passed to our subscribers
const gridUpdate = (topic, data) => {
  console.log(topic,'<-- topic');
  console.log(data, '<-- data');
  if (data !== undefined) {
    addGridRow(data);
    updateCounter(data);
  }
};


// Create a subscription to the newDataAvailable topic
const subscriber = pubsub.subscribe('newDataAvailable', gridUpdate);

// The following represents updates to our data layer. This could be
// powered by ajax requests which broadcast that new data is available
// to the rest of the application.

// Publish changes to the gridUpdated topic representing new entries
pubsub.publish('newDataAvailable', {
summary: 'Apple made $5 billion',
identifier: 'APPL',
stockPrice: 570.91,
});

pubsub.publish('newDataAvailable', {
summary: 'Microsoft made $20 million',
identifier: 'MSFT',
stockPrice: 30.85,
});