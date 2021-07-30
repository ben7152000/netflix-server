# API 接口

## 目錄：
[1、使用者註冊](#1使用者註冊)<br/>
[2、使用者登入](#2使用者登入)<br/>
[3、取得個別使用者](#3取得個別使用者)<br/>
[4、取得所有使用者](#4取得所有使用者)<br/>
[5、更新使用者資訊](#5更新使用者資訊)<br/>
[6、刪除使用者](#6刪除使用者)<br/>
[7、建立電影](#7建立電影)<br/>
[8、取得個別電影](#8取得個別電影)<br/>
[9、取得所有電影](#9取得所有電影)<br/>
[10、取得隨機電影](#10取得隨機電影)<br/>
[11、更新個別電影](#11更新個別電影)<br/>
[12、刪除電影](#12刪除電影)<br/>
[13、建立電影清單](#13建立電影滾動清單)<br/>
[14、取得電影清單](#14取得電影滾動清單)<br/>
[15、刪除電影清單](#15刪除電影滾動清單)<br/>

## 1、使用者註冊

### 請求 URL：
    http://localhost:8081/api/auth/register

### 請求方式：
    POST

### 參數：
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
username|Y|String|使用者名稱
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

## 3、取得個別使用者

### 請求 URL：
    http://localhost:8081/api/users/find/:id

### 範例：
[http://localhost:8081/api/users/find/6103bb9c3e6e620657879996](http://localhost:8081/api/users/find/6103bb9c3e6e620657879996)

### 請求方式：
    GET

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|使用者id

### 返回範例：
    * 取得成功
        {
            "isAdmin": true,
            "_id": "6103c11eaefe6c0cc54673a3",
            "username": "Admin",
            "email": "admin@gmail.com",
            "createdAt": "2021-07-30T09:06:38.364Z",
            "updatedAt": "2021-07-30T09:31:41.111Z",
            "__v": 0
        }

## 4、取得所有使用者

### 請求 URL：
    http://localhost:8081/api/users/

### 請求方式：
    GET

### 參數：
無

### 返回範例：
    * 取得成功
        [
            {
                "isAdmin": false,
                "_id": "6103bb9c3e6e620657879996",
                "username": "Test",
                "email": "test@gmail.com",
                "password": "$2b$10$MFc2FW9FVgyU.EI1Orffw.yPZYDCxyxxBDfFHIuIkaNb3xHAlGuQu",
                "createdAt": "2021-07-30T08:43:08.940Z",
                "updatedAt": "2021-07-30T08:43:08.940Z",
                "__v": 0
            },
            {
                "isAdmin": true,
                "_id": "6103c11eaefe6c0cc54673a3",
                "username": "Admin",
                "email": "admin@gmail.com",
                "password": "$2b$10$YTRn8ntFk7TvG8wZnd2Gvetfqw61gX63G5/JZurVBuz4aaf2.BRtu",
                "createdAt": "2021-07-30T09:06:38.364Z",
                "updatedAt": "2021-07-30T09:06:38.364Z",
                "__v": 0
            },
            {
                "isAdmin": false,
                "_id": "6103c14eaefe6c0cc54673a5",
                "username": "Test2",
                "email": "test2@gmail.com",
                "password": "$2b$10$NtmMwMHOWjky.VK0BCRQ/OXUcZMAn7Hu.N3C/ikkiWMnaERkWLtI6",
                "createdAt": "2021-07-30T09:07:26.495Z",
                "updatedAt": "2021-07-30T09:07:26.495Z",
                "__v": 0
            },
            {  
                "isAdmin": false,
                "_id": "6103c153aefe6c0cc54673a7",
                "username": "Test3",
                "email": "test3@gmail.com",
                "password": "$2b$10$LqIEgoR2ZBM7cK8WmaBH7ejxNgbMx2Z4stkgC.TIUu..kiSSpxUEe",
                "createdAt": "2021-07-30T09:07:31.084Z",
                "updatedAt": "2021-07-30T09:07:31.084Z",
                "__v": 0
            },
            {
                "isAdmin": false,
                "_id": "6103c158aefe6c0cc54673a9",
                "username": "Test4",
                "email": "test4@gmail.com",
                "password": "$2b$10$uhC2/Z7e3k8B0lNgHU8VGehi.iIJNIybkiLeT9ppR6xg173OyKbe2",
                "createdAt": "2021-07-30T09:07:36.004Z",
                "updatedAt": "2021-07-30T09:07:36.004Z",
                "__v": 0
            },
            {
                "isAdmin": false,
                "_id": "6103c15caefe6c0cc54673ab",
                "username": "Test5",
                "email": "test5@gmail.com",
                "password": "$2b$10$eBkQ7dnIrFIsC7d6ZmhyAOdxF2CZ8lLGIdqYTMpbCFhlWCuWA7wtW",
                "createdAt": "2021-07-30T09:07:40.658Z",
                "updatedAt": "2021-07-30T09:07:40.658Z",
                "__v": 0
            }
        ]

## 5、更新使用者資訊

### 請求 URL：
    http://localhost:8081/api/users/:id

### 範例：
[http://localhost:8081/api/users/6103bb9c3e6e620657879996](http://localhost:8081/api/users/6103bb9c3e6e620657879996)

### 請求方式：
    PUT

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|使用者id

### 返回範例：
    * 修改成功
        {
            "isAdmin": false,
            "_id": "6103c14eaefe6c0cc54673a5",
            "username": "test",
            "email": "test2@gmail.com",
            "password": "$2b$10$SDrjTw7hbP9jODV012nvAOjOm51/ZUlyV7hpJvO45XtQE9blewzUu",
            "createdAt": "2021-07-30T09:07:26.495Z",
            "updatedAt": "2021-07-30T10:26:20.467Z",
            "__v": 0
        } 

## 6、刪除使用者

### 請求 URL：
    http://localhost:8081/api/users/:id

### 範例：
[http://localhost:8081/api/users/6103bb9c3e6e620657879996](http://localhost:8081/api/users/6103bb9c3e6e620657879996)

### 請求方式：
    DELETE

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|使用者id

### 返回範例：
    * 刪除成功
    "使用者已刪除"

## 7、建立電影

### 請求 URL：
    http://localhost:8081/api/movies

### 請求方式：
    POST

### 權限：
    Admin

### 參數：
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
title|Y|String|電影名稱
desc|N|String|電影描述
img|N|String|電影圖片
imgTitle|N|String|電影標題
imgSmall|N|String|電影的小標題
trailer|N|String|電影預告片
video|N|String|電影影片
year|N|String|電影年份
limit|N|Number|電影長度
genre|N|String|電影類型
isSeries|N|Boolean|是否是系列電影

### 返回範例：
    * 建立成功
        {
            "isSeries": true,
            "_id": "6103da5c7825b113dca714c6",
            "title": "復仇者聯盟",
            "desc": "美國隊長自冰獄中甦醒，而邪惡勢力也悄悄集結，力量龐大到極為驚人的地步，已非單一超級英雄就能解決。為了保護地球的安危，神盾局(S.H.I.E.L.D)局長尼克福瑞費盡心力將來自各方的超級英雄聚集一堂，其中包括鋼鐵人、綠巨人浩克、雷神索爾、美國隊長、鷹眼與黑寡婦等人。於是「復仇者聯盟」也就此組成，但各自擁有強大神力或武器的超級英雄們，能否容忍彼此且同心協力找出合作的模式？更是否來得及阻止力量驚人的邪惡大軍？由小勞勃道尼、克里斯伊凡、馬克魯法洛、克里斯漢斯沃、史嘉蕾喬韓森、傑瑞米雷納與山謬傑克森主演，喬斯威登執導的漫威影業年度巨片《復仇者聯盟》改編自1963年出品的暢銷同名漫畫。準備好看來自各方的超級英雄們如何各展神威嗎？敬請鎖定2012年暑假強檔《復仇者聯盟》。",
            "img": "https://upload.wikimedia.org/wikipedia/zh/1/18/%E5%BE%A9%E4%BB%87%E8%80%85%E8%81%AF%E7%9B%9F.jpg",
            "imgTitle": "復仇者聯盟",
            "imgSmall": "https://www.truemovie.com/2012Poster/int-avengers-small.jpg",
            "video": "https://777tv.app/vod/play/id/170044/sid/1/nid/1.html",
            "year": "2012",
            "limit": 142,
            "genre": "動作",
            "createdAt": "2021-07-30T10:54:20.334Z",
            "updatedAt": "2021-07-30T10:54:20.334Z",
            "__v": 0
        }

## 8、取得個別電影

### 請求 URL：
    http://localhost:8081/api/movies/find/:id

### 範例：
[http://localhost:8081/api/users/find/6103da5c7825b113dca714c6](http://localhost:8081/api/users/find/6103da5c7825b113dca714c6)

### 請求方式：
    GET

### 權限：
    Admin

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|電影id

### 返回範例：
    * 取得成功
        {
            "isSeries": true,
            "_id": "6103da5c7825b113dca714c6",
            "title": "復仇者聯盟",
            "desc": "美國隊長自冰獄中甦醒，而邪惡勢力也悄悄集結，力量龐大到極為驚人的地步，已非單一超級英雄就能解決。為了保護地球的安危，神盾局(S.H.I.E.L.D)局長尼克福瑞費盡心力將來自各方的超級英雄聚集一堂，其中包括鋼鐵人、綠巨人浩克、雷神索爾、美國隊長、鷹眼與黑寡婦等人。於是「復仇者聯盟」也就此組成，但各自擁有強大神力或武器的超級英雄們，能否容忍彼此且同心協力找出合作的模式？更是否來得及阻止力量驚人的邪惡大軍？由小勞勃道尼、克里斯伊凡、馬克魯法洛、克里斯漢斯沃、史嘉蕾喬韓森、傑瑞米雷納與山謬傑克森主演，喬斯威登執導的漫威影業年度巨片《復仇者聯盟》改編自1963年出品的暢銷同名漫畫。準備好看來自各方的超級英雄們如何各展神威嗎？敬請鎖定2012年暑假強檔《復仇者聯盟》。",
            "img": "https://upload.wikimedia.org/wikipedia/zh/1/18/%E5%BE%A9%E4%BB%87%E8%80%85%E8%81%AF%E7%9B%9F.jpg",
            "imgTitle": "復仇者聯盟",
            "imgSmall": "https://www.truemovie.com/2012Poster/int-avengers-small.jpg",
            "video": "https://777tv.app/vod/play/id/170044/sid/1/nid/1.html",
            "year": "2012",
            "limit": 142,
            "genre": "動作",
            "createdAt": "2021-07-30T10:54:20.334Z",
            "updatedAt": "2021-07-30T10:54:20.334Z",
            "__v": 0
        }

## 9、取得所有電影

### 請求 URL：
    http://localhost:8081/api/movies/

### 請求方式：
    GET

### 權限：
    Admin

### 參數：
無

### 返回範例：
    * 取得成功
        [
            {
                "isSeries": false,
                "_id": "6103dd767825b113dca714cc",
                "title": "異形：聖約",
                "desc": "好萊塢傳奇大導雷利史考特（Ridley Scott）將重返經典，再度回歸他過去曾一手打造的超級科幻史詩鉅作《異形》，新作《異形：聖約》（ALIEN: COVENANT）將直接與他1979年所推出的《異形》故事連結，並作為以《普羅米修斯》為首的前傳三部曲之第二章節。殖民太空船—聖約號前往在浩瀚銀河中一顆遙遠的星球，其成員發現了一個世人都未曾知道的「天堂世界」，但其實這裡是一個陰暗且險象環生的地方，當他們發現這個地方存在著難以想像的威脅，為了活命他們必須展開一場驚心動魄的逃亡旅程。",
                "img": "https://upload.wikimedia.org/wikipedia/zh/4/48/Alien_Covenant_Poster.jpg",
                "imgTitle": "異形：聖約",
                "imgSmall": "https://s.yimg.com/vu/movies/fp/mpost/66/94/6694.jpg",
                "video": "https://777tv.app/vod/play/id/175976/sid/1/nid/1.html",
                "year": "2017",
                "limit": 122,
                "genre": "科幻",
                "createdAt": "2021-07-30T11:07:34.093Z",
                "updatedAt": "2021-07-30T11:07:34.093Z",
                "__v": 0
            },
            {
                "isSeries": true,
                "_id": "6103da5c7825b113dca714c6",
                "title": "復仇者聯盟",
                "desc": "美國隊長自冰獄中甦醒，而邪惡勢力也悄悄集結，力量龐大到極為驚人的地步，已非單一超級英雄就能解決。為了保護地球的安危，神盾局(S.H.I.E.L.D)局長尼克福瑞費盡心力將來自各方的超級英雄聚集一堂，其中包括鋼鐵人、綠巨人浩克、雷神索爾、美國隊長、鷹眼與黑寡婦等人。於是「復仇者聯盟」也就此組成，但各自擁有強大神力或武器的超級英雄們，能否容忍彼此且同心協力找出合作的模式？更是否來得及阻止力量驚人的邪惡大軍？由小勞勃道尼、克里斯伊凡、馬克魯法洛、克里斯漢斯沃、史嘉蕾喬韓森、傑瑞米雷納與山謬傑克森主演，喬斯威登執導的漫威影業年度巨片《復仇者聯盟》改編自1963年出品的暢銷同名漫畫。準備好看來自各方的超級英雄們如何各展神威嗎？敬請鎖定2012年暑假強檔《復仇者聯盟》。",
                "img": "https://upload.wikimedia.org/wikipedia/zh/1/18/%E5%BE%A9%E4%BB%87%E8%80%85%E8%81%AF%E7%9B%9F.jpg",
                "imgTitle": "復仇者聯盟",
                "imgSmall": "https://www.truemovie.com/2012Poster/int-avengers-small.jpg",
                "video": "https://777tv.app/vod/play/id/170044/sid/1/nid/1.html",
                "year": "2012",
                "limit": 142,
                "genre": "動作",
                "createdAt": "2021-07-30T10:54:20.334Z",
                "updatedAt": "2021-07-30T10:54:20.334Z",
                "__v": 0
            }
        ]

## 10、取得隨機電影

### 請求 URL：
    http://localhost:8081/api/movies/random

### 範例：
[http://localhost:8081/api/movies/random?type=series](http://localhost:8081/api/movies/random?type=series)

### 請求方式：
    GET

### 權限：
    Admin

### 參數：query
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
type|N|String|隨機取出系列電影就加上series

### 返回範例：
    * 取得成功
        [
            {
                "_id": "6103da5c7825b113dca714c6",
                "isSeries": true,
                "title": "復仇者聯盟",
                "desc": "美國隊長自冰獄中甦醒，而邪惡勢力也悄悄集結，力量龐大到極為驚人的地步，已非單一超級英雄就能解決。為了保護地球的安危，神盾局(S.H.I.E.L.D)局長尼克福瑞費盡心力將來自各方的超級英雄聚集一堂，其中包括鋼鐵人、綠巨人浩克、雷神索爾、美國隊長、鷹眼與黑寡婦等人。於是「復仇者聯盟」也就此組成，但各自擁有強大神力或武器的超級英雄們，能否容忍彼此且同心協力找出合作的模式？更是否來得及阻止力量驚人的邪惡大軍？由小勞勃道尼、克里斯伊凡、馬克魯法洛、克里斯漢斯沃、史嘉蕾喬韓森、傑瑞米雷納與山謬傑克森主演，喬斯威登執導的漫威影業年度巨片《復仇者聯盟》改編自1963年出品的暢銷同名漫畫。準備好看來自各方的超級英雄們如何各展神威嗎？敬請鎖定2012年暑假強檔《復仇者聯盟》。",
                "img": "https://upload.wikimedia.org/wikipedia/zh/1/18/%E5%BE%A9%E4%BB%87%E8%80%85%E8%81%AF%E7%9B%9F.jpg",
                "imgTitle": "復仇者聯盟",
                "imgSmall": "https://www.truemovie.com/2012Poster/int-avengers-small.jpg",
                "video": "https://777tv.app/vod/play/id/170044/sid/1/nid/1.html",
                "year": "2012",
                "limit": 142,
                "genre": "動作",
                "createdAt": "2021-07-30T10:54:20.334Z",
                "updatedAt": "2021-07-30T10:54:20.334Z",
                "__v": 0
            }
        ]

## 11、更新電影

### 請求 URL：
    http://localhost:8081/api/movies/:id

### 範例：
[http://localhost:8081/api/movies/6103da5c7825b113dca714c6](http://localhost:8081/api/movies/6103da5c7825b113dca714c6)

### 請求方式：
    PUT

### 權限：
    Admin

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|電影id

### 返回範例：
    * 更新成功
        {
            "isSeries": true,
            "_id": "6103da5c7825b113dca714c6",
            "title": "復仇者",
            "desc": "美國隊長自冰獄中甦醒，而邪惡勢力也悄悄集結，力量龐大到極為驚人的地步，已非單一超級英雄就能解決。為了保護地球的安危，神盾局(S.H.I.E.L.D)局長尼克福瑞費盡心力將來自各方的超級英雄聚集一堂，其中包括鋼鐵人、綠巨人浩克、雷神索爾、美國隊長、鷹眼與黑寡婦等人。於是「復仇者聯盟」也就此組成，但各自擁有強大神力或武器的超級英雄們，能否容忍彼此且同心協力找出合作的模式？更是否來得及阻止力量驚人的邪惡大軍？由小勞勃道尼、克里斯伊凡、馬克魯法洛、克里斯漢斯沃、史嘉蕾喬韓森、傑瑞米雷納與山謬傑克森主演，喬斯威登執導的漫威影業年度巨片《復仇者聯盟》改編自1963年出品的暢銷同名漫畫。準備好看來自各方的超級英雄們如何各展神威嗎？敬請鎖定2012年暑假強檔《復仇者聯盟》。",
            "img": "https://upload.wikimedia.org/wikipedia/zh/1/18/%E5%BE%A9%E4%BB%87%E8%80%85%E8%81%AF%E7%9B%9F.jpg",
            "imgTitle": "復仇者聯盟",
            "imgSmall": "https://www.truemovie.com/2012Poster/int-avengers-small.jpg",
            "video": "https://777tv.app/vod/play/id/170044/sid/1/nid/1.html",
            "year": "2012",
            "limit": 142,
            "genre": "動作",
            "createdAt": "2021-07-30T10:54:20.334Z",
            "updatedAt": "2021-07-30T11:26:48.420Z",
            "__v": 0
        }

## 12、刪除電影

### 請求 URL：
    http://localhost:8081/api/movies/:id

### 範例：
[http://localhost:8081/api/movies/6103dd767825b113dca714cc](http://localhost:8081/api/movies/6103dd767825b113dca714cc)

### 請求方式：
    DELETE

### 權限：
    Admin

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|電影id

### 返回範例：
    * 刪除成功
    "電影已刪除"

## 13、建立電影清單

### 請求 URL：
    http://localhost:8081/api/lists

### 請求方式：
    POST

### 權限：
    Admin

### 參數：
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
title|Y|String|清單名稱
type|N|String|清單種類
genre|N|String|清單類型
content|N|Array|清單內的電影

### 返回範例：
    * 建立成功
        {
            "content": [
                "6103da5c7825b113dca714c6",
                "6103da5c7825b113dca714c6",
                "6103da5c7825b113dca714c6",
                "6103da5c7825b113dca714c6",
                "6103da5c7825b113dca714c6"
                 ],
            "_id": "6103f30b05e5c61640abb61a",
            "title": "最新動作片",
            "type": "電影",
            "genre": "動作片",
            "createdAt": "2021-07-30T12:39:39.337Z",
            "updatedAt": "2021-07-30T12:39:39.337Z",
            "__v": 0
        }

## 14、取得電影滾動清單

### 請求 URL：
    http://localhost:8081/api/lists

### 範例：
[http://localhost:8081/api/lists?type=電影](http://localhost:8081/api/lists?type=電影)

### 請求方式：
    GET

### 權限：
    Admin

### 參數：query
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
type|N|String|清單名稱
genre|N|String|清單種類

### 返回範例：
    * 取得成功
        [
            {
                "_id": "6103f30b05e5c61640abb61a",
                "content": [
                    "6103da5c7825b113dca714c6",
                    "6103da5c7825b113dca714c6",
                    "6103da5c7825b113dca714c6",
                    "6103da5c7825b113dca714c6",
                    "6103da5c7825b113dca714c6"
                    ],
                "title": "最新動作片",
                "type": "電影",
                "genre": "動作片",
                "createdAt": "2021-07-30T12:39:39.337Z",
                "updatedAt": "2021-07-30T12:39:39.337Z",
                "__v": 0
            },
            {
                "_id": "6103f36105e5c61640abb61c",
                "content": [
                    "6103e2a77825b113dca714f7",
                    "6103e2a77825b113dca714f7",
                    "6103e2a77825b113dca714f7",
                    "6103e2a77825b113dca714f7",
                    "6103e2a77825b113dca714f7"
                    ],
                "title": "最新科幻片",
                "type": "電影",
                "genre": "科幻片",
                "createdAt": "2021-07-30T12:41:05.935Z",
                "updatedAt": "2021-07-30T12:41:05.935Z",
                "__v": 0
            }
        ]

## 15、刪除電影滾動清單

### 請求 URL：
    http://localhost:8081/api/lists/:id

### 範例：
[http://localhost:8081/api/lists/6103dd767825b113d12314cc](http://localhost:8081/api/lists/6103dd767825b113d12314cc)

### 請求方式：
    DELETE

### 權限：
    Admin

### 參數：params
參數     | 是否必選 | 類型 | 說明
:--------:|:-------:|:----:|:----:
id|Y|String|電影id

### 返回範例：
    * 刪除成功
    "電影滾動清單已刪除"

