var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr);
  }
  console.log("================");

  // is the same as this....
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);

const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }
};
