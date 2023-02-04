// const qqq: string = "안녕하세요";

// console.log(qqq);

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


// The GraphQL schema


// API-docs 만들기
const typeDefs = `#graphql
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }


  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(backend-example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend-practice 방식)
    createBoard(createBoardInput: CreateBoardInput): String
  }
`;

// A map of functions which return data for the schema.

// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 1. 모두 꺼내기
      const result = await Board.find();
      console.log(result);


      // 2. 한개만 꺼내기
      // const result = await Board.findOne({
      //   where: { number: 3},
      // });
      // console.log(result);
      return result;
    },
  },

  Mutation: {
    createBoard:async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,


        // 하나 하나 모두 입력하는 비효율적인 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록에 성공하였습니다."
    },

    // updateBoard: async () => {
      // 3번 게시글을 영희로 바꿔줘!
    //  await Board.update({number: 3}, {writer: "영희"});
    // },

    // deleteBoard: async () => {
    //   await Board.delete({number: 3}); // 3번 게시글을 삭제해줘!
      // await Board.update({number: 3}, {isDeleted: true}); // 3번 게시글을 삭제했다고 가정! (소프트 삭제) => isDeleted가 초기값인 false 이면? 삭제 안됬음, true 이면? 삭제 됬음
      // await Board.update({number: 3}, {deletedAt: new Date()}); // 3번 게시글 삭제했다고 가정! (소프트 삭제) => deletedAt이 초기값인 NULL 이면? 삭제 안됬음, new Date()가 들어가 있으면? 삭제 됬음.

    },
  };


// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,

  // 선택한 사이트만 풀어주고 싶을때
  // cors: {
  //   origin: ["http://naver.com", "http://coupang.com`"]
  // },
});






const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122", // 데이터 베이스가 설치된ip주소
  port: 5004, //데이터베이서 설치된 컴퓨터 포트
  username: "postgres",
  password: "postgres2022",
  database: "postgres", //데이터 베이스 안에 데이터배이스 생성 가능.그중 postgres에 연결
  entities: [Board], // 여기에 등록된 애를 가지고
  synchronize: true, // 똑같이 만들어줘
  logging: true, // 명령어가 바뀌는 과정을 눈으로 보여줘
});

AppDataSource.initialize()
  // 위의 것을 초기화해 만듬.
  // 성공했을경우
  // 실패 했을 경우
  .then(() => {
    console.log("DB접속에 성공했습니다.");
    startStandaloneServer(server).then(() => {
      console.log("그래프큐엘 서버가 실행되었습니다."); // 포트: 4000
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인: ", error);
  });
