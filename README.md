<h1>
    Restfull Api Amazone Prime Users
</h1> </br>

<p>
    Base Url : http://localhost:3000
</p> </br>

<h2>
    Users Endpoint
</h2> </br>

<table>
    <thead>
        <tr>
            <th>HTTP Method</th>
            <th>URL</th>
            <th>Input</th>
            <th>Output</th>
            <th>Keterangan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>v1/users</td>
            <td>-</td>
            <td>Daftar seluruh object users</td>
            <td>Untuk melihat seluruh data users</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>v1/users/:id</td>
            <td>User ID</td>
            <td>Data object user sesuai dengan ID user</td>
            <td>Untuk melihat data sesuai dengan ID user</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>v1/users</td>
            <td>user_id,name,email_address,username,date_of_birth,gander,location,membership_start_date,membership_end_date,subscription_plan,payment_information,renewal_status,usage_frequecy,purchase_history,favorites_ganres,devices_used,engagement_metrics,feedback_ratings,customer_support_interacions</td>
            <td>Menyimpan object data user baru</td>
            <td>Untuk menyimpan data user</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>v1/users/:id</td>
            <td>user_id dan update name,email_address,username,date_of_birth,gander,location,membership_start_date,membership_end_date,subscription_plan,payment_information,renewal_status,usage_frequecy,purchase_history,favorites_ganres,devices_used,engagement_metrics,feedback_ratings,customer_support_interacions</td>
            <td>Mengupdate object data user</td>
            <td>Untuk mengupdate data user</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>v1/users/:id</td>
            <td>user_id</td>
            <td>Mengdelete object data user</td>
            <td>Untuk mengdelete data user</td>
        </tr>
    </tbody>
</table> </br>

<h2>
    Header Authorization
</h2> </br>

<table>
    <thead>
        <tr>
            <th>Header</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Authorization</td>
            <td>BFd1bgIcD1Kgx9uiTjaflX2q4z697RD83qmtSy0H4</td>
        </tr>
    </tbody>
</table> </br>

<h2>
    Response Api
</h2> </br>

<table>
    <thead>
        <tr>
            <th>Response</th>
            <th>Keterangan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                {
                   "error": 401,
                   "message": "Unauthorized"
                }
            </td>
            <td>Jika api tidak menggunkan Authorization atau Authorization tidak sesuai dengan token</td>
        </tr>
        <tr>
            <td>
                {
                    "error": 500,
                    "message": "Internal server error"
                }
            </td>
            <td>Jika api mengalami kesalahan</td>
        </tr>
        <tr>
            <td>
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
            </td>
            <td>Jika api mengalami kesalahan</td>
        </tr>
    </tbody>
</table> </br>