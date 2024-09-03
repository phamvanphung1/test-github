import models from "@models";

const seedUser = async () => {
  const data = [
    {
      fullName: "Khai Nguyen",
      userName: "khainguyen",
      iAmRole: "admin",
      email: "khainguyen@gmail.com",
      hashPwd: "faw#%@%af",
    },
    {
      fullName: "Khanh Ngoc",
      userName: "khanhngoc",
      iAmRole: "moderator",
      email: "khanhngoc@gmail.com",
      hashPwd: "ghawdf^!$61@$!",
    },
    {
      fullName: " Binh Nguyen",
      userName: "binhnguyen",
      iAmRole: "member",
      email: "binhnguyen@gmail.com",
      hashPwd: "#!gat@#af%",
    },
  ];
  await models.user.bulkCreate(data);
};

const seedBook = async () => {
  const data = [
    {
      title: "NodeJs",
      author: "Kevin Land",
      publishedDate: new Date("2022-10-05T00:00:00Z"),
      userId: 1,
    },
    {
      title: "HTML and CSS",
      author: "Andrew JR",
      publishedDate: new Date("2022-10-05T00:00:00Z"),
      userId: 2,
    },
    {
      title: "MySQL",
      author: "Helen Datie",
      publishedDate: new Date("2022-10-05T00:00:00Z"),
      userId: 1,
    },
    {
      title: "Javascript",
      author: "Faland Helow",
      publishedDate: new Date("2022-10-05T00:00:00Z"),
      userId: 1,
    },
    {
      title: "Python",
      author: "Daniel Rop",
      publishedDate: new Date("2022-10-05T00:00:00Z"),
      userId: 2,
    },
    {
      title: "Java",
      author: "Robin William",
      publishedDate: new Date("2022-10-05T00:00:00Z"),
      userId: 3,
    },
  ];
  await models.book.bulkCreate(data);
};

seedUser();
seedBook();
