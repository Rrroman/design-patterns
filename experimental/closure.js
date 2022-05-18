const counterFN = () => {
  let count = 0;
  return {
    getCount() {
      return count;
    },
    increaseCount() {
      return count++;
    }
  };
};

const counter = counterFN();
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
console.log(counter.getCount());
const counter2 = counterFN();
console.log(counter2.getCount());
console.log(counter === counter2);
console.log(counter.getCount() === counter2.getCount());
console.log(counter.getCount());
console.log(counter2.getCount());

