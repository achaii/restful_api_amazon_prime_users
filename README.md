# Restfull Api Amazone Prime Users

## Base URL : http://localhost:3000

### Users Endpoint
|HTTP Method|URL|Input|Output|Keterangan|
|-----------------|-----|------|---------|-
|GET|v1/users|-|Daftar seluruh object users|Untuk melihat seluruh data users|
|GET|v1/users/:id|User ID|Data object user sesuai dengan ID user|Untuk melihat data sesuai dengan ID user|
|POST|v1/users|user_id,name,email_address,username,date_of_birth,gander,location,membership_start_date,membership_end_date,subscription_plan,payment_information,renewal_status,usage_frequecy,purchase_history,favorites_ganres,devices_used,engagement_metrics,feedback_ratings,customer_support_interacions|Menyimpan object data user baru|Untuk menyimpan data user|
|PUT|v1/users/:id|user_id|Mengdelete object data user|Untuk mengdelete data user|

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
			"user_id": 1
			...
			...
		}
	]
}
```

reference for dataset : https://www.kaggle.com/datasets/arnavsmayan/amazon-prime-userbase-dataset

