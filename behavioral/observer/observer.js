class AutoNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach((subs) => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    console.log(observer, this.actions);
    this.actions = this.actions.filter((el) => el !== observer);
  }
}

class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}

class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
}

const autoNews = new AutoNews();
const mrJack = new Jack();
const mrMax = new Max();
autoNews.register(mrJack);
autoNews.register(mrMax);
autoNews.setNews('New car is coming');
autoNews.unregister(mrJack);
autoNews.setNews('Grate news about new car');
