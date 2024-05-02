# Restfull Api Amazone Prime Users

## Base URL : http://localhost:3000

### Users Endpoint
|HTTP Method|URL|Input|Output|Keterangan|
|-----------------|-----|------|---------|-
|GET|v1/users|-|Daftar seluruh object users|Untuk melihat seluruh data users|
|GET|v1/users/:id|User ID|Data object user sesuai dengan ID user|Untuk melihat data sesuai dengan ID user|
|POST|v1/users|data user|Menyimpan data object user|Untuk menyimpan data user|
|PUT|v1/users|user_id dan data user|Mengupdate object data user|Untuk mengupdate data user|
|DELETE|v1/users/:id|user_id|Mendelete object data user|Untuk mendelete data user|

### Header Authorization
|Header|Value|Keterangan|
|---------|------|------|
|Authorization|BFd1bgIcD1Kgx9uiTjaflX2q4z697RD83qmtSy0H4|Untuk value dapat dirubah bisa dilihat pada .env|

### Response Endpoint

Jika api tidak menggunkan Authorization atau Authorization tidak sesuai dengan token
```JSON
{
	"error": 401,
	"message": "Unauthorized"
}
```

Jika api mengalami kesalahan
```JSON
{
	"error": 500,
	"message": "Internal server error"
}
```
Jika api sesuai dengan permintaan
```JSON
{
	"error": false,
	"message": "success",
	"data":[
		{
		    "user_id": 1,
            "name": "test",
            "email_address": "test@testing"
		}
	]
}
```

reference for dataset : https://www.kaggle.com/datasets/arnavsmayan/amazon-prime-userbase-dataset

