// db/index.ts

import { Database } from "bun:sqlite";

// 1. Database 클래스로 db 객체 생성
const db = new Database('./file.db'); // 해당 경로 파일에 DB 내용을 저장
// const db = new Database(':memory:'); // in-memory DB 생성(휘발성)

db.exec('PRAGMA jounal_mode = WAL;'); // WAL 모드 활성화


// CRUD

// 테이블 생성
// CREATE TABLE [Table 명] (컬럼 1 컬럼1 타입 컬럼 1 제약 조건, ...)
db.exec(
    'DROP TABLE IF EXISTS conuntries; CREATE TABLE conuntries (id INTEGER PRIMARY KEY, code TEXT, name TEXT)'
);

// 데이터 삽입
// INSERT INTO [Table 명] VALUES(...)
const conuntries = [
    {
        $code: 'KR',
        $name: '대한민국'
    },
    {
        $code: 'CA',
        $name: '캐나다'
    },
    {
        $code: 'US',
        $name: '미국'
    },
    {
        $code: 'CN',
        $name: '중국'
    }
];

const insert = db.prepare('INSERT INTO conuntries (code, name) VALUES ($code, $name)');
for(const obj of conuntries) {
    insert.run(obj);
}

// 데이터 갱신
// UPDATE [Table 명] SET ...
const update = db.prepare('UPDATE conuntries SET name = $name WHERE code = $code');
update.run({
    $code: 'US',
    $name: 'United States'
});

// 데이터 삭제
// DELETE FROM [Table 명] [WHERE 절]
const remove = db.prepare('DELETE FROM conuntries WHERE name = ?'); // ? 기호를 이용하여 SQL 구문 내의 파라미터 자리 표시
remove.run('중국');

// 데이터 조회
// SELECT * FROM [Table 명] [WHERE 절]
const selectOne = db.query('SELECT * FROM conuntries WHERE code = ?');
const oneResult = selectOne.get('KR');
console.log(oneResult);

const selectMany = db.query('SELECT * FROM conuntries ORDER BY code');
const manyResults = selectMany.all();
console.log(manyResults);

// DB 닫기
db.close();
