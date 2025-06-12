# Time-Killer

TODO: 도메인 생기면 추가  
시간 순삭용 게임 페이

TODO: 각 게임을 만들면, 만들어질 때마다 어떤 브라우저 또는 어떤 OS에서 실행되는지 추가하기

## Prerequisites

- node v22.15.0
- npm v10.9.2

## Commands

```bash
npm run dev # 개발 서버 실행
```

```bash
npm run lint && npm run test && npm run build && npm run start # 테스트 및 프로덕션 서버 빌드 & 실행
```

## Task Flow

[Github Flow](https://docs.github.com/ko/get-started/using-github/github-flow) 참고

![Github Flow](https://github.com/user-attachments/assets/ce916763-36c1-4e9b-a1dc-7e6350e62c92)

1. [Github Projects](https://github.com/users/mochang2/projects/1/views/1)에서 이슈 생성
2. 생성된 이슈의 번호를 토대로 로컬에서 "feature/#{이슈 번호}" 브랜치 생성
3. 각 작업의 커밋 메시지는 "#{이슈 번호}: {작업 요약}" 형태
4. 작업 완료 후 푸시 + PR 생성 => 리뷰 후 "main" 브랜치에 머지

## Conventions

### formatter(prettier)

`md`과 `json` 파일은 IDE 기본 포맷터 사용  
`.vscode/settings.json`과 `.prettierrc.json` 참고

[extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 설치 필요

### linter(eslint)

`md`과 `json` 외의 파일(`ts`, `tsx`, `js`, `mjs` 등) 파일은 [unicorn eslint](https://www.npmjs.com/package/eslint-plugin-unicorn)와 커스텀 규칙 사용  
`.vscode/settings.json`과 `eslint.config.mjs` 참고

[extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 설치 필요

## Structure

TODO: 게임 하나 완성되면 추가하기
