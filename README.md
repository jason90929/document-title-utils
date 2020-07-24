# document-title-utils
To control document title on SPA

```
$ yarn add jason90929/document-title-utils
```

效果：
`頁面名 | 我的產品名`

先在 App 或初始層執行
`documentTitleUtils.init('我的產品名', '|')`，第二參數預設為 '|'

之後就是很簡單的在各個需要的頁面 React componentDidMount 或 Vue mounted 內加入 `documentTitleUtils.generateTitle('頁面名')` 即可
