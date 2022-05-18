// ES2015+ keywords/syntax used: class, constructor, const, let

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

const messageLogger1 = (topic, args) => {
  console.log('subscriber_1', topic, args);
};

pubsub.publish('/addFavorite', ['Here no subs so this will not be in console']);
pubsub.subscribe('/addFavorite', messageLogger1);
pubsub.publish('/addFavorite', ['test', 'Here works!']);

// Another simple message handler

// A simple message logger that logs any topics and data received through our
// subscriber
const messageLogger2 = (topics, data) => {
  console.log(`subscriber_2: ${topics}: ${data}`);
};

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g messageLogger) once a new
// notification is broadcast on that topic
const subscription = pubsub.subscribe('inbox/newMessage', messageLogger2);
pubsub.subscribe('inbox/newMessage', messageLogger1);

// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

pubsub.publish('inbox/newMessage', 'hello world!');

// or
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);

// or
pubsub.publish('inbox/newMessage', {
  sender: 'hello@google.com',
  body: 'Hey again!',
});

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
pubsub.unsubscribe(subscription);

// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish('inbox/newMessage', 'Hello! are you still there? (Only testing left here!)');
