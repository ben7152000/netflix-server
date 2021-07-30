# API 接口

## 目錄：
[1、使用者註冊](#1使用者註冊)<br/>
[2、使用者登入](#2使用者登入)<br/>

## 1、使用者註冊

### 請求 URL：
    http://localhost:8081/api/auth/register

### 請求方式：
    POST

### 參數：
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
username|Y|String|使用者名稱|
email|Y|String|使用者信箱
password|Y|String|使用者密碼

### 返回範例：
    * 註冊成功
      {
        "isAdmin": false,
        "_id": "6103b420c961d40310d8f8e8",
        "username": "Test",
        "email": "test@gmail.com",
        "password": "$2b$10$oNZRpkrdyrm/oM/P4zsax.dSLGQ1sF01mqlrtFDdr/spgkOl2GK6.",
        "createdAt": "2021-07-30T08:11:12.680Z",
        "updatedAt": "2021-07-30T08:11:12.680Z",
        "__v": 0
      }

## 2、使用者登入

### 請求 URL：
    http://localhost:8081/api/auth/login

### 請求方式：
    POST

### 參數：
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
email|Y|String|使用者信箱
password|Y|String|使用者密碼

### 返回範例：
    * 登入成功
      {
        "isAdmin": false,
        "_id": "6103b420c961d40310d8f8e8",
        "username": "Test",
        "email": "test@gmail.com",
        "createdAt": "2021-07-30T08:11:12.680Z",
        "updatedAt": "2021-07-30T08:11:12.680Z",
        "__v": 0,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDNiNDIwYzk2MWQ0MDMxMGQ4ZjhlOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mjc2MzQ1MDUsImV4cCI6MTYyNzcyMDkwNX0.CddTAM0KmPW5UmYIEuRqdiWp9yzOiaxn4vrKRC9Pk_o"
      }
